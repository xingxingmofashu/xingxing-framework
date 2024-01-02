<script setup>
import { all } from '~/composables/users'
const users = await all();
</script>
<template>
    User Index
    {{ users }}
</template>