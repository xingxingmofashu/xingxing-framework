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
    return $fetch('/graphql/user', {
        method: 'post',
        body: JSON.stringify({
            query: `query QueryUsers {
                users {
                  Account
                  CreateTime
                  CreatedBy
                }
              }
            `,
            operationName: 'QueryUsers',
            variables: {}
        })
    })
}