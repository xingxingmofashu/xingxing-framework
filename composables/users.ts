import { gql } from 'graphql-tag'
import { provideApolloClient, useQuery } from '@vue/apollo-composable'

export const signup = ({ account, password }: { account: string, password: string }) => {
    return $fetch('/api/users/signup', {
        method: 'post',
        body: JSON.stringify({ account, password })
    })
}

export const getUserByAccount = (account: string) => {
    return $fetch(`/api/users/${account}`)
}
export const getAllUser = () => {
    const QueryUsers = gql`
        query QueryUsers {
            users {
                Account
                CreateTime
                CreatedBy
            }
        }
    `
    return provideApolloClient(apolloClient)(() => useQuery(QueryUsers))
}