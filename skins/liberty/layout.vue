<template>
	<div class="Liberty">
		<div id="top"></div>
      <div class="nav-wrapper">
				<nav class="navbar navbar-dark">
					<NuxtLink class="navbar-brand" to="/">logo</NuxtLink>
						<ul class="nav navbar-nav">
							<li class="nav-item">
	              <NuxtLink class="nav-link" to="/RecentChanges"><span class="fa fa-refresh"></span><span class="hide-title">최근 변경</span></NuxtLink>
              </li>
              <li class="nav-item">
                 <NuxtLink class="nav-link" to="/RecentDiscuss"><span class="fa fa-comments"></span><span class="hide-title">최근 토론</span></NuxtLink>
              </li>
              <li class="nav-item">
                 <nuxtLink class="nav-link" to="/random"><span class="fa fa-random"></span><span class="hide-title">임의 문서</span></NuxtLink>
              </li>
						</ul>
					</nav>
				</div>
			</div>
      <div class="content-wrapper">
				<h1>{{ page.namespace }}:{{ page.title }}</h1>
	      <slot />
			</div>
	</div>
</template>

<style>
@import "./css/bootstrap.min.css";
@import "./css/default.css";
</style>

<script setup>
//pinia 스토어
import { usePageStore } from '@/store/page'
const page = usePageStore()
</script>