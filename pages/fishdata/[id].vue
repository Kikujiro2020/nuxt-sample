
<script setup>
import data from "/data.json"
const route = useRoute()
const id = Number(route.params.id)
const fishdata = data.find(res => res.id === id)
</script>
<template>
    <div class="container mt-5">
        <div class="card" style="width: 18rem;">
            <div class="card-header">
                名称　{{ fishdata.name }}
            </div>
            <ul class="list-group list-group-flush">
                <li class="list-group-item">生息地　{{ fishdata.place }}</li>
                <li class="list-group-item">旬　{{ fishdata.season }}</li>
            </ul>
        </div>
    <NuxtLink to="/fishdata">戻る</NuxtLink>
    </div>
</template>