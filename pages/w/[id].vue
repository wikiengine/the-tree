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
page.setIsDoc(true)
page.setDocTitle(titleData.title)
page.setDocNamespace(titleData.namespace)
page.setViewName("wiki")
if (titleData.namespace == "문서") {
	page.setForceShowNamespace(false); 
} else {
	page.setForceShowNamespace(true); 
}
</script>