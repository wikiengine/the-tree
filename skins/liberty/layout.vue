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
      <div class="content-wrapper">
				<div class="title">
					<NuxtLink :to="/w/{{page.namespace}}:{{page.title}}"><span class="namespace">{{ page.namespace }}:</span>{{ page.title }}</NuxtLink>
	      </div>
				<slot />
			</div>
<div class="scroll-buttons">
            <NuxtLink class="scroll-toc" to="#toc"><i class="fa fa-list-alt" aria-hidden="true"></i></NuxtLink>
            <NuxtLink id="left" class="scroll-button" to="#top"><i class="fa fa-arrow-up" aria-hidden="true"></i></NuxtLink>
            <NuxtLink id="right" class="scroll-bottom" to="#bottom"><i class="fa fa-arrow-down" aria-hidden="true"></i></NuxtLink>
        </div>
	</div>
</template>

<style>
@import "./css/bootstrap.min.css";
@import "./css/default.css";
@import "./css/default_mobile.css";
</style>

<script setup>
//pinia 스토어
import { usePageStore } from '@/store/page'
const page = usePageStore()
</script>