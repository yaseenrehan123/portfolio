"use client";
import React from 'react'
import { motion } from "framer-motion";
import { FadeInScreenProps } from '@/libs/types';

const FadeInScreen = ({ children, ...props }: FadeInScreenProps) => {
    return (
        <motion.div
            {...props}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ type: "spring", duration: 1 }}>
            {children}
        </motion.div>
    )
}

export default FadeInScreen