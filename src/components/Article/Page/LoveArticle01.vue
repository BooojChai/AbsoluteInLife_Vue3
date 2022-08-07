<template>
    <ArticleTemplate :header="headerContent" :footer="footerContent" :bgiPath="bgiPath" :isNoArticleBg="true">
        <div class="content">
            <Waterfall :list="imgArray" :gutter="5" :breakpoints="breakpoints">
                <template #item="{ url }">
                    <div class="card">
                        <LazyImg :url="url" />
                    </div>
                </template>
            </Waterfall>
        </div>
    </ArticleTemplate>
</template>

<script lang="ts">
import ArticleTemplate from '../ArticleTemplate.vue'

import { LazyImg, Waterfall } from 'vue-waterfall-plugin-next'
import 'vue-waterfall-plugin-next/style.css'

export default {
    components: {
        ArticleTemplate,
        LazyImg,
        Waterfall
    },
    setup() {
        let data = {
            headerContent: {
                title: "2018.9 大连之行",
                mark: "雨也须来，晴也须来",
                item: "Sharing Love. 01",
            },
            footerContent: {
                left: "2022/07/29",
                right: "# 雨也须来，晴也须来",
            },
            bgiPath: require('./assets/ABGDL.jpg'),
            imgArray: [
                {
                    src: require('./assets/dl/dl1.jpg'),
                },
                {
                    src: require('./assets/dl/dl2.jpg'),
                },
                {
                    src: require('./assets/dl/dl3.jpg'),
                },
                {
                    src: require('./assets/dl/dl4.jpg'),
                },
                {
                    src: require('./assets/dl/dl6.jpg'),
                },
                {
                    src: require('./assets/dl/dl5.jpg'),
                },
                {
                    src: require('./assets/dl/dl7.jpg'),
                },
                {
                    src: require('./assets/dl/dl8.jpg'),
                },
                {
                    src: require('./assets/dl/dl10.jpg'),
                },
                {
                    src: require('./assets/dl/dl9.jpg'),
                },
                {
                    src: require('./assets/dl/dl11.jpg'),
                },
                {
                    src: require('./assets/dl/dl12.jpg'),
                },
                {
                    src: require('./assets/dl/dl13.jpg'),
                },
                {
                    src: require('./assets/dl/dl15.jpg'),
                },
                {
                    src: require('./assets/dl/dl16.jpg'),
                },
                {
                    src: require('./assets/dl/dl17.jpg'),
                },
                {
                    src: require('./assets/dl/dl19.jpg'),
                },
                {
                    src: require('./assets/dl/dl18.jpg'),
                },
                {
                    src: require('./assets/dl/dl20.jpg'),
                },
            ],
            breakpoints: {
                1200: {
                    rowPerView: 3,
                },
                800: {
                    rowPerView: 2,
                },
                500: {
                    rowPerView: 1,
                }
            }
        }

        return {
            ...(data)
        }
    }
}
</script>

<style lang="less" scoped>
.waterfall-list {
    background: none !important;
    padding: 0 !important;

    .card {
        padding: 15px !important;
        backdrop-filter: blur(4px) !important;
        background-color: rgba(28,28,28,.5) !important;
    }
}
</style>