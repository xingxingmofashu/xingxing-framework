export const signup = ({ account, password }: { account: string, password: string }) => {
    return $fetch('/api/users/signup', {
        method: 'post',
        body: JSON.stringify({ account, password })
    })
}

export const get = (account: string) => {
    return $fetch(`/api/users/${account}`)
}
export const all = () => {
    return $fetch('/api/users/**')
}