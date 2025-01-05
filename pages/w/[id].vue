<template>
	<div>
		위키 내용
		<NuxtLink to="/w/테스트">테스트</NuxtLink>
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