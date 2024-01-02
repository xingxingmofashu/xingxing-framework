<script setup>
import { get } from "~/composables/users"

const route = useRoute();
const user = await get(route.params.account);

</script>
<template>
  {{ user }}
</template>