import { prisma } from "~/prisma/db"
export default defineEventHandler(async (event) => {
    try {
        const { account, password } = await readBody(event);
        const createUser = await prisma.systemUser.create({
            data: {
                Account: account,
                Password: password
            }
        })
        return createUser
    } catch (error) {
        throw new Error(error as string)
    }
})