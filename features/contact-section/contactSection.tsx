import React from 'react'

import ContactHeader from './contactHeader';
import ContactForm from './contactForm';

const ContactSection = () => {
    return (
        <div className='flex items-center flex-col gap-6 w-full'>
            <div className='flex flex-col items-center gap-10 lg:flex-row lg:justify-center lg:items-start lg:gap-x-30 w-[80%]
            p-2'>

                <ContactHeader />
                <ContactForm />


            </div>


        </div>
    )
}

export default ContactSection