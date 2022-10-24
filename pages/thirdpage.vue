<script setup>
const { counter, inc, dec } = useCounter()
definePageMeta({
  middleware: 'auth',
})
</script>

<template>
    <div class="container-fluid">

        <h1>Composables sample</h1>
        <p>{{ counter }}</p>
        <button type="button" class="btn btn-outline-primary" @click="inc"> + </button>
        <button type="button" class="btn btn-outline-secondary" @click="dec"> - </button>
        <NuxtLink to="/">Home</NuxtLink>
    </div>
</template>