import { Prisma, PrismaClient } from "@prisma/client";
import { PrismaClientValidationError } from "@prisma/client/runtime/library";
const prisma = new PrismaClient()

export default defineEventHandler(async(event)=>{
    let posts= await prisma.posts.findMany({
        orderBy: {id : "desc"},
        include: { likes: true }
    }) 
    return posts
})