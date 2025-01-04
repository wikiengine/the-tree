<template>
	<div>
		<h1>{{ $route.params.id }}</h1>
	</div>
</template>
<script setup>
import { processTitle } from '@/lib/processTitle'
import { usePageStore } from '@/store/page'
const route = useRoute()
const titleData = processTitle(route.params.id)
const page = usePageStore()
page.setTitle(titleData.title)
page.setNamespace(titleData.namespace)
</script>