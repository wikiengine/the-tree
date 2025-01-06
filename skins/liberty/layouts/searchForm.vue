<template>
    <form id="searchform" class="form-inline" @submit.prevent>
        <div class="input-group">
            <div class="input-search">
                <input type="search" name="q" placeholder="검색" accesskey="f" class="form-control" id="searchInput" autocomplete="off">
                <div v-if="false" class="v-autocomplete-list">
                    <div class="v-autocomplete-list-item">
                        <div>검색리스트</div>
                    </div>
                </div>
            </div>
            <span class="input-group-btn">
              <button type="submit" name="fulltext" value="검색" class="btn btn-secondary"><span class="fa fa-search"></span></button>
              <button type="submit" name="fulltext" value="보기" class="btn btn-secondary"><span class="fa fa-arrow-right"></span></button>
            </span>
        </div>
    </form>
</template>

<style scoped>
.v-autocomplete-list {
    position: absolute;
    z-index: 3;
    border: 1px solid #CCC;
    background-color: #fff;
    width: 10.8rem;
}

@media (max-width: 1023px) {
    .v-autocomplete-list {
        width: 100%;
    }
}

.theseed-dark-mode .v-autocomplete-list {
    background-color: #2d2f34;
    border: 1px solid #383b40;
}

.v-autocomplete-list-item {
    cursor: pointer;
    color: #373a3c;
    padding: 0.5rem;
    word-break: break-all;
}

.theseed-dark-mode .v-autocomplete-list-item {
    color: #ddd;
}

.v-autocomplete-list-item.v-autocomplete-item-active {
    background-color: #f3f6fa;
}

.theseed-dark-mode .v-autocomplete-list-item.v-autocomplete-item-active {
    background-color: #383b40;
}
</style>