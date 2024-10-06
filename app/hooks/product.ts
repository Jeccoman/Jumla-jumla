import { z } from "zod";
import { getUser } from "../actions/user";


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



const editSchema = z.object({
    name:z.string().min(2,{
        message:"Name Must have two Characters"
    }),
    price:z.number().positive({
        message:"Price Must be a positive"
    }),
    src:z.string().min(10,{
        message:"File is Required"
    }),
    id:z.string().min(6,{
        message:"Required"
    })
})



const deleteSchema = z.object({

    id:z.string().min(7,{

    })
  })

export async function CreateProduct(name:string,price:number,src:string){

    try{
        formSchema.parse({name,price,src})
    } catch (error) {
   
        if (error instanceof z.ZodError) {
    
          console.error("Validation error:", error.errors);
          return { success: false, errors: error.errors };
        }
    
        console.error("Unexpected error:", error);
        return { success: false, error: "An unexpected error occurred" };
      }
    
      const user = await getUser()

      if(user.success === false){
        return {success:false,message:"Unauthorized"}
      }

      const isExisting = await prisma?.user.findFirst({
        where:{
            id:user?.user?.id as string
        }
      })

      if(!isExisting){
        return {success:false,message:"User Does Not Exist"}
      }

      const product = await prisma?.product.create({
        data:{
            name:name,
            price:price.toString(),
            src:src,
            userId:isExisting.id,
          
        }
      })

      return {success:true, product:product}

}


export async function Updateproduct(id:string,name:string,price:number,src:string){

    try{
        editSchema.parse({name,price,src,id,})
    } catch (error) {
   
        if (error instanceof z.ZodError) {
    
          console.error("Validation error:", error.errors);
          return { success: false, errors: error.errors };
        }
    
        console.error("Unexpected error:", error);
        return { success: false, error: "An unexpected error occurred" };
      }
    
      const user = await getUser()
  
      if(user.success === false){
        return {success:false,message:"Unauthorized"}
      }
  
      const isExisting = await prisma?.user.findFirst({
        where:{
            id:user?.user?.id as string
        }
      })
  
      if(!isExisting){
        return {success:false,message:"User Does Not Exist"}
      }
  
      const product = await prisma?.product.update({
        where:{
          id:id
        },
        data:{
            name:name,
            price:price.toString(),
            src:src,
           
        }
      })
  
      return {success:true, product:product}
  
  }


  export async function Myproducts(){
     
    const user = await getUser()
  
    if(user.success === false){
      return {success:false,message:"Unauthorized"}
    }
  
    const isExisting = await prisma?.user.findFirst({
      where:{
          id:user?.user?.id as string
      }
    })
  
    if(!isExisting){
      return {success:false,message:"User Does Not Exist"}
    }
  
    const products = await prisma?.product.findMany({
      where:{
          userId:isExisting.id
      }
    })
  
    return {success:true, products:products}
  }

  export async function Deleteproduct(id:string){

    try{
      deleteSchema.parse({id})
  } catch (error) {
  
      if (error instanceof z.ZodError) {
  
        console.error("Validation error:", error.errors);
        return { success: false, errors: error.errors };
      }
  
      console.error("Unexpected error:", error);
      return { success: false, error: "An unexpected error occurred" };
    }
       
    const user = await getUser()
  
    if(user.success === false){
      return {success:false,message:"Unauthorized"}
    }
  
    const isExisting = await prisma?.user.findFirst({
      where:{
          id:user?.user?.id as string
      }
    })
  
    if(!isExisting){
      return {success:false,message:"User Does Not Exist"}
    }
  
    const product = await prisma?.product.delete({
      where:{
          id:id
      }
    })
  
    return {success:true, product:product}
  }
  