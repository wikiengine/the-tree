<template>
	<div>
		<h1>{{ $route.params.id }}</h1>
	</div>
</template>
<script setup>
import { usePageStore } from '@/store/page'
const page = usePageStore()
page.setTitle($route.params.id)
</script>