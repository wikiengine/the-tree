<template>
	<div>
		<h1>{{ $route.params.id }}</h1>
		<pre>{{ data }}</pre>
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
const { data } = await useFetch(`https://plground.xyz/w/${titleData.title}:${titleData.namespace}`)
</script>