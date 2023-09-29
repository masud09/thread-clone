import { Prisma, PrismaClient } from "@prisma/client";
import { PrismaClientValidationError } from "@prisma/client/runtime/library";
const prisma = new PrismaClient()

export default defineEventHandler(async(event)=>{
   const body = await readBody (event)

   const res= await prisma.posts.create({
        data:{

            userId:body.userId,
            name:body.name,
            image: body.image,
            text: body.text,
            picture:body.picture,
        }

   })
   return res
})