<template>
    <div class="container-fluid">
       
        <h1>Index</h1>
        <NuxtLink to="/secondpage">to SecondPage</NuxtLink>
    </div>
</template>

<script setup>
// This will also work in `<script setup>`
definePageMeta({
  layout: "sample",
});
</script>