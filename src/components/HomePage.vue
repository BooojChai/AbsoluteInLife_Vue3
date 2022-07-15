<template>
    <div class="homepage">
        <Banner/>
        <div class="main wrapper" v-if="!isMobile">
            <div class="profile-content">
                <Profile/>
            </div>
            <div class="core-content">
                <Menu/>
                <div class="cards">
                    <router-view></router-view>
                </div>
            </div>
        </div>
        <div class="main-mobile" v-else>
            <Menu ref="MenuRef" @menuClick="menuClick"/>
            <div class="cards">
                <swiper
                    :initialSlide=1
                    @swiper="onSwiper"
                    @slideChange="onSlideChange"
                >
                    <swiper-slide><Profile/></swiper-slide>
                    <swiper-slide><CareerPage/></swiper-slide>
                    <swiper-slide><NotePage/></swiper-slide>
                    <swiper-slide><TechPage/></swiper-slide>
                    <swiper-slide><MusicPage/></swiper-slide>
                    <swiper-slide><SharingPage/></swiper-slide>
                </swiper>
            </div>
        </div>
        <Footer/>
    </div>
</template>

<script>
import Banner from './Banner.vue'
import Profile from './Profile.vue'
import Footer from './Footer.vue'
import Menu from './Menu'
import CareerPage from './CareerPage'
import NotePage from './NotePage'
import TechPage from './TechPage'
import MusicPage from './MusicPage'
import SharingPage from './SharingPage'
import MobileAdapter from '../plugin/mobileAdapter'

import { ref } from 'vue'
import { Swiper, SwiperSlide } from 'swiper/vue'
import 'swiper/css';

export default {
    components: {
        Banner,
        Profile,
        Footer,
        Menu,
        CareerPage,
        NotePage,
        TechPage,
        MusicPage,
        SharingPage,

        Swiper,
        SwiperSlide
    },
    setup() {
        const MenuRef = ref(null)

        let useSwiper

        const onSwiper = (swiper) => {
            useSwiper = swiper
        };

        const onSlideChange = (swiper) => {
            if (swiper.activeIndex == 0) {
                MenuRef.value.clearStatus()
            } else {
                MenuRef.value.actMouseOver(swiper.activeIndex)
            }
        }

        const menuClick = (index) => {
            useSwiper.slideTo(index)
        }

        return {
            MenuRef,
            menuClick,
            onSwiper,
            onSlideChange,
            isMobile: MobileAdapter.isMobile
        }
    }
}
</script>

<style lang="less" scoped>
.main {
    display: flex;
    margin-top: 10px;
    margin-bottom: 30px;

    .profile-content {
        flex: 1;
        margin-right: 10px;
    }

    .core-content {
        flex: 2.4;

        .cards {
            margin-top: 20px;
            padding: 0 10px;
        }
    }
}

.main-mobile {
    .cards {
        margin-top: 20px;
        padding: 0 10px;
    }
}
</style>