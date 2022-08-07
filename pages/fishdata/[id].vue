<script setup lang="ts">
const data = [
    {
        "id": 1,
        "name": "メバル",
        "place": "北海道南部～九州の沿岸部",
        "season": "春から冬"
    },
    {
        "id": 2,
        "name": "アジ",
        "place": "全国各地",
        "season": "初夏から晩夏"
    },
    {
        "id": 3,
        "name": "カサゴ",
        "place": "日本近海～太平洋西部",
        "season": "冬から春"
    },
    {
        "id": 4,
        "name": "キジハタ",
        "place": "日本から中国沿岸",
        "season": "春から夏"
    },
    {
        "id": 5,
        "name": "スズキ",
        "place": "北海道南部～九州の沿岸部",
        "season": "春から夏"
    },
    {
        "id": 6,
        "name": "ブリ",
        "place": "北海道～九州の太平洋岸",
        "season": "冬"
    }
]
const route = useRoute();
const id = Number(route.params.id);
console.log(id)
const fish_data = data.find(res => res.id === id)
</script>

<template>
    <div class="container mt-5">
        <div class="card" style="width: 18rem;">
            <div class="card-header">
                名称：{{ fish_data.name }}
            </div>
            <ul class="list-group list-group-flush">
                <li class="list-group-item"> 生息域：{{ fish_data.place }}</li>
                <li class="list-group-item">旬：{{ fish_data.season }}</li>
            </ul>
        </div>
    </div>
</template>