<template>
    <div class="article" @mousewheel="cancelScroll()" @touchmove="cancelScroll()"
    :style="{backgroundImage: 'url('+ bgiPath +')'}">
        <Header :title="header.title" :mark="header.mark" :item="header.item"/>
        <div class="main wrapper" v-if="!isMobile" :class="{'no-article-bg' : isNoArticleBg}">
            <slot/>
            <CardFooter :content="footer"/>
        </div>
        <div class="main-mobile" v-else :class="{'no-article-bg' : isNoArticleBg}">
            <slot/>
            <CardFooter :content="footer"/>
        </div>
        <Footer/>
    </div>
</template>

<script>
import Header from './ArticleHeader.vue'
import Footer from '../Footer.vue'
import CardFooter from '../Card/CardFooter.vue'

import { onMounted } from 'vue'
import Scroller from '../../plugin/scrollTo'

import MobileAdapter from '../../plugin/mobileAdapter'

export default {
    components: {
        Header,
        Footer,
        CardFooter
    },
    props: {
        header: {
            title: "Article Title",
            mark: "Article Mark",
            item: "Article Item",
        },
        footer: {
            left: "Footer Left",
            right: "Footer right",
        },
        bgiPath: {
            type: String,
            require: true
        },
        isNoArticleBg: {
            type: Boolean,
            default: false
        }
    },
    setup() {
        onMounted(()=> {
            Scroller.scrollTo()
        })

        function cancelScroll() {
            Scroller.cancelScroll()
        }

        return {
            cancelScroll,
            isMobile: MobileAdapter.isMobile
        }
    }
}
</script>

<style lang="less" scoped>
.article {
    background-size: contain;

    .main {
        // backdrop-filter: blur(8px);
        // background-color: rgba(24,24,24,.5);
        // border-radius: 10px;
        margin-bottom: 30px;
        padding: 30px 40px 20px 40px;
    }

    .main-mobile {
        backdrop-filter: blur(8px);
        background-color: rgba(24,24,24,.5);
        border-radius: 10px;
        margin: 0 15px 30px 15px;
        padding: 15px 15px 20px 20px;
    }

    .no-article-bg {
        padding: 0 !important;
        backdrop-filter: none !important;
        background-color: rgba(0,0,0,0) !important;
    }
}
</style>