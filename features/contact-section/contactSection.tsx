import React from 'react'

import ContactHeader from './contactHeader';
import ContactForm from './contactForm';
import FadeInScreen from '../general/components/animation/fadeInScreen';
const ContactSection = () => {
    return (
        <FadeInScreen className='flex items-center flex-col gap-6 w-full'
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ type: "spring", duration: 1 }}>
            <div className='flex flex-col items-center gap-10 lg:flex-row lg:justify-center lg:items-start lg:gap-x-30 w-[80%]
            p-2'>

                <ContactHeader />
                <ContactForm />


            </div>


        </FadeInScreen>
    )
}

export default ContactSection