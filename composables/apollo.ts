import { ApolloClient, InMemoryCache, createHttpLink } from '@apollo/client/core'

const httpLink = createHttpLink({
    uri: '/graphql/user',
})
const cache = new InMemoryCache();

export const apolloClient = new ApolloClient({ link: httpLink, cache })
