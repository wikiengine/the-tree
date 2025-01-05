<template>
	<div>
		<nav><NuxtLink to="/">home</NuxtLink> <NuxtLink to="/w/test">test</NuxtLink></nav>
		<h1>{{ page.namespace }}: {{ page.title}}</h1>
		<component :is="Liberty">
			<slot />
		</component>
	</div>
</template>
<script setup>
import Liberty from "@/skins/liberty/layout.vue"
import { usePageStore } from '@/store/page'
const page = usePageStore()
</script>