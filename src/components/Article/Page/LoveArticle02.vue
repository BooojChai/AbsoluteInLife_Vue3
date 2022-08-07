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
                title: "2019.10 重庆之行",
                mark: "从你的全世界路过",
                item: "Sharing Love. 02",
            },
            footerContent: {
                left: "2022/07/31",
                right: "# 从你的全世界路过",
            },
            bgiPath: require('./assets/ABGCQ.jpg'),
            imgArray: [
                {
                    src: require('./assets/cq/cq6.jpg'),
                },
                {
                    src: require('./assets/cq/cq5.jpg'),
                },
                {
                    src: require('./assets/cq/cq1.jpg'),
                },
                {
                    src: require('./assets/cq/cq4.jpg'),
                },
                {
                    src: require('./assets/cq/cq3.jpg'),
                },
                {
                    src: require('./assets/cq/cq7.jpg'),
                },
                {
                    src: require('./assets/cq/cq10.jpg'),
                },
                {
                    src: require('./assets/cq/cq12.jpg'),
                },
                {
                    src: require('./assets/cq/cq13.jpg'),
                },
                {
                    src: require('./assets/cq/cq2.jpg'),
                },
                {
                    src: require('./assets/cq/cq9.jpg'),
                },
                {
                    src: require('./assets/cq/cq8.jpg'),
                },
                {
                    src: require('./assets/cq/cq11.jpg'),
                },
                {
                    src: require('./assets/cq/cq15.jpg'),
                },
                {
                    src: require('./assets/cq/cq16.jpg'),
                },
                {
                    src: require('./assets/cq/cq17.jpg'),
                },
                {
                    src: require('./assets/cq/cq19.jpg'),
                },
                {
                    src: require('./assets/cq/cq18.jpg'),
                },
                {
                    src: require('./assets/cq/cq20.jpg'),
                },
                {
                    src: require('./assets/cq/cq21.jpg'),
                },
                {
                    src: require('./assets/cq/cq22.jpg'),
                },
                {
                    src: require('./assets/cq/cq23.jpg'),
                },
                {
                    src: require('./assets/cq/cq24.jpg'),
                },
                {
                    src: require('./assets/cq/cq25.jpg'),
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