<template>
    <h2>The Tree</h2>
    <p>v0.0.1</p>
    <ul>
        <li>Backend: imitated-seed-api</li>
        <li>Frontend: null</li>
        <li>Skin: null</li>
    </ul>
</template>

<script setup>
import { usePageStore } from "@/store/page";
const page = usePageStore()
page.setIsDoc(false)
page.setTitle("라이센스")
page.setViewName("license")
</script>