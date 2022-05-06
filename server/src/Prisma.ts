import { PrismaClient } from "@prisma/client";
import { query } from "express";

const Prisma = new PrismaClient({
    log: ['query']
})

export default Prisma