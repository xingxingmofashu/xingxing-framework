import { prisma } from "~/prisma/db"

export default defineEventHandler((event) => {
    try {
        const { account } = event.context.params!;
        const user = prisma.systemUser.findFirst({
            where: { Account: account }
        });
        return user;
    } catch (error) {
        throw new Error(error as string)
    }
})