import { prisma } from "~/prisma/db"

export default defineEventHandler((event) => {
    try {
        return prisma.systemUser.findMany();
    } catch (error) {
        throw new Error(error as string)
    }
})