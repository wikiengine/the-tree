<template>
	<component :is="Liberty">
		<slot />
	</component>
</template>
<script setup>
import Liberty from "@/skins/liberty/layout.vue"
</script>