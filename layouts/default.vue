<template>
	<div>
		<nav><NuxtLknk to="/">home</NuxtLink> <NuxtLknk to="/w/test">test</NuxtLink></nav>
		<h1>{{ page.namespace }}: {{ page.title}}</h1>
		<slot />
	</div>
</template>
<script setup>
import { usePageStore } from '@/store/page'
const page = usePageStore()
</script>
