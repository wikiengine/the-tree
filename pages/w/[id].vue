<template>
	<div>
		<h1>{{ $route.params.id }}</h1>
	</div>
</template>
<script setup>
const route = useRoute()
import { usePageStore } from '@/store/page'
const page = usePageStore()
page.setTitle(route.params.id)
</script>