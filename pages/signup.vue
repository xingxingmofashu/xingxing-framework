<script setup>
import { signup } from '~/composables/users'

const user = reactive({
    account: '',
    password: ''
})

</script>
<template>
    <input type="text" v-model="user.account" h-2rem w-10rem>
    <input type="password" v-model="user.password" h-2rem w-10rem>
    <button @click="signup(user)">Sign Up</button>
</template>