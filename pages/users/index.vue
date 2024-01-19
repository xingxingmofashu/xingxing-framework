<script setup lang="ts">
import { gql } from 'graphql-tag'
import { useQuery } from '@vue/apollo-composable';

onMounted(() => {
    const { result } = useQuery(gql`query QueryUsers {
            users {
                Account
                CreateTime
                CreatedBy
            }
        }`)
    console.log(result)
})
</script>
<template>
    User Index
</template>