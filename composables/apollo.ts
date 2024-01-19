import { ApolloClient, InMemoryCache, createHttpLink } from '@apollo/client/core'

const httpLink = createHttpLink({
    uri: '/graphql/user',
})
const cache = new InMemoryCache();

export const userApolloClient = new ApolloClient({ link: httpLink, cache })
