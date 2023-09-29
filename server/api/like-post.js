import { Prisma, PrismaClient } from "@prisma/client";
import { PrismaClientValidationError } from "@prisma/client/runtime/library";
const prisma = new PrismaClient()

export default defineEventHandler(async(event)=>{
   const body = await readBody (event)

   const res = await prisma.likes.create({
    data:{

        userId: body.userId,
        postId: body.postId,
    }
   })

   
   return res
})