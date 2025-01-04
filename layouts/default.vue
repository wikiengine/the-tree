<template>
	<div>
		<nav><NuxtLink to="/">home</NuxtLink> <NuxtLink to="/w/test">test</NuxtLink></nav>
		<h1>{{ page.namespace }}: {{ page.title}}</h1>
		<slot />
	</div>
</template>
<script setup>
import { usePageStore } from '@/store/page'
const page = usePageStore()
</script>
<style>
@import "~/public/css/bootstrap.min.css";
</style>