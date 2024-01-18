<script setup>

const users = await getAllUser();
</script>
<template>
    User Index
    {{ users }}
</template>