import z from "zod";

const contactFormSchema = z.object({
    name: z.string("Name cant be empty")
        .min(8, "Name must have minimium 8 characters")
        .max(15, "Name must have maximum 8 characters"),
    email: z.email("Not valid email"),
    message: z.string("Message cant be empty")
        .min(10, "Message must have minimum 10 characters")
});

export default contactFormSchema;