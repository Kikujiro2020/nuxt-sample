<script setup>
import data from "/data.json"
const { counter, inc, dec } = useCounter()
onMounted(() => { console.log(counter.value) })

</script>
<template>
    <div class="container-fluid">

        <p>{{ counter }}</p>
        <button class="btn" @click="inc"> + </button>
        <button class="btn" @click="dec"> - </button>
        <h1>Fish data</h1>
        <div v-for="value in data">
            <NuxtLink :to='"/fishdata/" + value.id'>{{ value.name }}</NuxtLink>

        </div>
    </div>
</template>