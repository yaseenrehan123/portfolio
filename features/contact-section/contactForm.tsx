"use client";
import React from 'react'
import FormContainer from '@/components/ui/form/formContainer';
import FormField from '@/components/ui/form/formField';
import Button from '@/components/ui/general/button';
import { IoIosSend } from "react-icons/io";
import MessageArea from '@/components/ui/form/messageArea';

const ContactForm = () => {

    async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
        event.preventDefault();
        const formData = new FormData(event.currentTarget);

        formData.append("access_key", process.env.NEXT_PUBLIC_WEB_3_FORMS_ACCESS_KEY ?? "");
        console.log("Form Fields Captured:", Object.fromEntries(formData));
        const object = Object.fromEntries(formData);
        const json = JSON.stringify(object);

        const response = await fetch("https://api.web3forms.com/submit", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                Accept: "application/json"
            },
            body: json
        });
        const result = await response.json();
        if (result.success) {
            console.log(result);
        }
    }
    return (
        <FormContainer variant="light" className='w-full lg:w-[50%]' onSubmit={handleSubmit}>
            <FormField variant="large" bg="dark" placeholder='Name' name='name' />
            <FormField variant="large" bg="dark" placeholder='Email' name='email' />
            <MessageArea variant="lg" theme='dark' placeholder='Message' name='message' />
            <Button className='bg-black text-white w-full rounded-3xl flex items-center justify-center gap-2 text-[1.2rem]
                text-center' type='submit'>
                <div>Send Message</div>
                <IoIosSend />
            </Button>
        </FormContainer>
    )
}

export default ContactForm