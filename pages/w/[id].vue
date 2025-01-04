<template>
	<div>
		<h1>{{ $route.params.id }}</h1>
		{{ store.counter }}
	</div>
</template>
<script setup>
import { useCounterStore } from '@/stores/counter'

const counter = useCounterStore()

counter.count++
// 자동 완성! ✨
counter.$patch({ count: counter.count + 1 })
// 또는 actions 사용
counter.increment()
</script>