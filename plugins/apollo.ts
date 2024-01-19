import { ApolloClients } from '@vue/apollo-composable'

export default defineNuxtPlugin(({ vueApp }) => {
    vueApp.provide(ApolloClients, {
        default: apolloClient
    })
})