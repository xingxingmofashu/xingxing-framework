import { ApolloServer } from '@apollo/server';
import { startServerAndCreateH3Handler } from '@as-integrations/h3'
import { prisma } from "~/prisma/db"

const typeDefs = `
type User {
    Account: String
    Password: String
    CreateTime: String
    CreatedBy: String
    ModificationTime: String
    ModifiedBy: String
}
type Query {
    users: [User]
}
`

const resolvers = {
    Query: {
        users: async () => {
            return await prisma.systemUser.findMany()
        }
    },
}

const apollo = new ApolloServer({
    typeDefs,
    resolvers
});

export default startServerAndCreateH3Handler(apollo)