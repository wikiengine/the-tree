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
			  <li class="nav-item">
                        <dropdown>
                            <template #toggle>
                                <a class="nav-link dropdown-toggle dropdown-toggle-fix" href="#" @click.prevent>
                                    <span class="fa fa-gear"></span><span class="hide-title">도구</span>
                                </a>
                            </template>
                            <div class="dropdown-menu" role="menu">
                                <NuxtLink to="/NeededPages" class="dropdown-item">작성이 필요한 문서</NuxtLink>
                                <NuxtLink to="/OrphanedPages" class="dropdown-item">고립된 문서</NuxtLink>
                                <NuxtLink to="/UncategorizedPages" class="dropdown-item">분류가 되지 않은 문서</NuxtLink>
                                <NuxtLink to="/OldPages" class="dropdown-item">편집된 지 오래된 문서</NuxtLink>
                                <NuxtLink to="/ShortestPages" class="dropdown-item">내용이 짧은 문서</NuxtLink>
                                <NuxtLink to="/LongestPages" class="dropdown-item">내용이 긴 문서</NuxtLink>
                                <NuxtLink to="/BlockHistory" class="dropdown-item">차단 내역</NuxtLink>
                                <NuxtLink to="/RandomPage" class="dropdown-item">RandomPage</NuxtLink>
                                <NuxtLink to="/Upload" class="dropdown-item">파일 올리기</NuxtLink>
                                <NuxtLink to="/License" class="dropdown-item">라이선스</NuxtLink>
                            </div>
                        </dropdown>
                    </li>
						</ul>
						<div class="navbar-login">
                    <dropdown class="login-menu">
                        <template #toggle>
                            <a id="login-menu" class="dropdown-toggle" type="button">
                                <span class="fa fa-user"></span>
                            </a>
                        </template>
                        <div class="dropdown-menu dropdown-menu-right login-dropdown-menu">
                            <div v-if="false" class="username dropdown-item">
                                <b>회원닉네임</b><br>Member
                            </div>
                            <div v-else-if="false" class="username dropdown-item">
                                <b>ip</b><br>Please login!
                            </div>
                            <div class="dropdown-divider"></div>
                            <a href="#" class="dropdown-item">설정</a>
                            <a href="#" class="dropdown-item">다크 테마로</a>
                            <a href="#" class="dropdown-item">라이트 테마로</a>
                            <div class="dropdown-divider"></div>
                            <nuxt-link class="dropdown-item">로그아웃</nuxt-link>
                            <nuxt-link class="dropdown-item">로그인</nuxt-link>
                        </div>
                    </dropdown>
                </div>
                <search-form />
					</nav>
				</div>
				<div class="content-wrapper">
            <div class="liberty-sidebar">
                <div class="liberty-right-fixed">
                    <div class="live-recent">
                        <div class="live-recent-header">
                            <ul class="nav nav-tabs">
                                <li class="nav-item">
                                    <a id="liberty-recent-tab1" class="nav-link active">최근 변경</a>
                                </li>
                            </ul>
                        </div>
                        <!--<recent-card />-->
                        <div class="live-recent-footer">
                            <nuxt-link to="/RecentChanges" title="최근 변경내역"><span class="label label-info">더 보기</span></nuxt-link>
                        </div>
                    </div>
                </div>
            </div>
            <div class="container-fluid liberty-content">
                <div id="site-notice" class="notification">
                    <span class="label label-danger" v-html="test" />
                </div>
                <div class="liberty-content-header">
                    <!--<content-tool />-->
                    <div class="title">
                        <h1 v-if="page.data.document.isDoc">
                            <nuxt-link to="/"><span v-if="page.data.document.forceShowNamespace !== false" class="namespace">{{page.data.document.namespace}}:</span>{{page.data.document.title}}</nuxt-link>
                            <small v-if="page.viewName === 'edit_edit_request' || page.viewName === 'edit_request'">(편집 요청)</small>
                        </h1>
						<h1 v-else>{{ page.title }}</h1>
                    </div>
                </div>
                <div class="liberty-content-main wiki-article">
                    <slot />
                    <div v-if="page.viewName === 'license'">
                        <h2>Liberty skin license</h2>
                        <pre>리버티 라이센스</pre>
                    </div>
                    <div class="clearfix"></div>
                </div>
                <div id="bottom" class="liberty-footer">
                    <ul class="footer-places" @click="onDynamicContentClick($event)" v-html="푸터" />
                    <ul class="footer-icons">
                        <li class="footer-poweredbyico">
                            <a href="//gitlab.com/librewiki/Liberty-MW-Skin">Liberty</a> | <a href="//theseed.io/">the seed</a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
        <div class="scroll-buttons">
            <nuxt-link class="scroll-toc" to="#toc"><i class="fa fa-list-alt" aria-hidden="true"></i></nuxt-link>
            <nuxt-link id="left" class="scroll-button" to="#top"><i class="fa fa-arrow-up" aria-hidden="true"></i></nuxt-link>
            <nuxt-link id="right" class="scroll-bottom" to="#bottom"><i class="fa fa-arrow-down" aria-hidden="true"></i></nuxt-link>
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
@import "./css/font-awesome.min.css";
@import "./css/font/Noto Sans KR.css";
@import "./css/default.css";
@import './css/default_mobile.css';
@import "./css/dark.css";
</style>

<script setup>
//pinia
import { usePageStore } from '@/store/page'

//lib
import selectByTheme from "@/lib/selectByTheme"

//components
import Dropdown from './components/dropdown';
import SearchForm from './layouts/searchForm';
const page = usePageStore()
</script>