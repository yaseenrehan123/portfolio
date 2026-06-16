import React from 'react'
import FormContainer from '@/components/ui/form/formContainer';
import FormField from '@/components/ui/form/formField';
import Button from '@/components/ui/general/button';
import { IoIosSend } from "react-icons/io";

const ContactForm = () => {
    return (
        <FormContainer variant="light" className='w-full lg:w-[50%]'>
            <FormField variant="large" bg="dark" placeholder='Name' />
            <FormField variant="large" bg="dark" placeholder='Email' />
            <FormField variant="large" bg="dark" placeholder='Message' />
            <Button className='bg-black text-white w-full rounded-3xl flex items-center justify-center gap-2 text-[1.2rem]
                text-center'>
                <div>Send Message</div>
                <IoIosSend />
            </Button>
        </FormContainer>
    )
}

export default ContactForm