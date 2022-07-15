<template>
    <div class="article" @mousewheel="cancelScroll()" @touchmove="cancelScroll()"
    :style="{backgroundImage: 'url('+ bgiPath +')'}">
        <Header :title="header.title" :mark="header.mark" :item="header.item"/>
        <div class="main wrapper" v-if="!isMobile">
            <slot/>
            <CardFooter :content="footer"/>
        </div>
        <div class="main-mobile" v-else>
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
        backdrop-filter: blur(8px);
        background-color: rgba(24,24,24,.5);
        border-radius: 10px;
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
}
</style>