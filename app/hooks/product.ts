import { z } from "zod";


const formSchema = z.object({
    name:z.string().min(2,{
        message:"Name Must have two Characters"
    }),
    price:z.number().positive({
        message:"Price Must be a positive"
    }),
    src:z.string().min(10,{
        message:"File is Required"
    })
})

