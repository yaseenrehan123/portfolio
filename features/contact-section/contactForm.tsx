"use client";
import React, { useState } from 'react'
import FormContainer from '@/components/ui/form/formContainer';
import FormField from '@/components/ui/form/formField';
import Button from '@/components/ui/general/button';
import { IoIosSend } from "react-icons/io";
import MessageArea from '@/components/ui/form/messageArea';
import { useForm } from 'react-hook-form';
import { ContactFormFields, ContactQueryFields } from '@/libs/types';
import z from "zod";
import { zodResolver } from '@hookform/resolvers/zod';
import contactFormSchema from '@/schemas/contactFormSchema';
import { useMutation } from '@tanstack/react-query';
import Alignment from '@/components/ui/general/alignment';
import Message from '@/components/ui/general/message';
const ContactForm = () => {
    const [message, setMessage] = useState<string>("");
    const { register, handleSubmit, formState: { errors } } = useForm<ContactFormFields>({
        resolver: zodResolver(contactFormSchema)
    });

    const { mutateAsync, isPending, isError, reset } = useMutation({
        mutationKey: ["contactForm"],
        mutationFn: async (data: ContactQueryFields) => {
            const res = await fetch("https://api.web3forms.com/submit", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    Accept: "application/json"
                },
                body: JSON.stringify(data)
            });
            const body = await res.json();
            if (!res.ok) {
                throw new Error(body.error || "Unknown Error Occured")
            }
            return body;
        },
        onSuccess: () => setMessage("Success!"),
        onError: (e: Error) => setMessage(e.message)
    });

    const onSubmit = async (data: ContactFormFields) => {
        const queryData: ContactQueryFields = {
            ...data,
            access_key: process.env.NEXT_PUBLIC_WEB_3_FORMS_ACCESS_KEY || ""
        }
        console.log("QUERY DATA:", queryData);
        await mutateAsync(queryData)
        reset();
    }
    return (
        <FormContainer variant="light" className='w-full lg:w-[50%]' onSubmit={handleSubmit(onSubmit)}>
            <Alignment variant='colLeft' className='w-full'>
                <FormField variant="large" bg="dark" placeholder='Name' {...register("name")} />
                {errors.name && <Message variant={"error"} disableOnContent="never" content={errors.name?.message} />}
            </Alignment>
            <Alignment variant='colLeft' className='w-full'>
                <FormField variant="large" bg="dark" placeholder='Email' {...register("email")} />
                {errors.email && <Message variant={"error"} disableOnContent="never" content={errors.email?.message} />}
            </Alignment>
            <Alignment variant='colLeft' className='w-full'>
                <MessageArea variant="lg" theme='dark' placeholder='Message' {...register("message")} />
                {errors.message && <Message variant={"error"} disableOnContent="never" content={errors.message?.message} />}
            </Alignment>
            <Button className={`bg-black  w-full rounded-3xl flex items-center justify-center gap-2 text-[1.2rem]
                text-center ${isPending ? "text-yellow-500" : "text-white"}`} type='submit'>
                <div>{isPending ? "Loading..." : "Send Message"}</div>
                <IoIosSend />
            </Button>
            <Message variant={isError ? "error" : "success"} content={message} disableOnContent='md' />
        </FormContainer>
    )
}

export default ContactForm