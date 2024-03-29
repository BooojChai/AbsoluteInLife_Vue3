<template>
    <div class="homepage">
        <Banner/>
        <div class="main wrapper" v-if="!isMobile">
            <div class="profile-content">
                <Profile/>
            </div>
            <div class="core-content">
                <Menu ref="MenuRef"/>
                <div class="cards">
                    <router-view></router-view>
                </div>
            </div>
        </div>
        <div class="main-mobile" v-else>
            <Menu ref="MenuRef" @menuClick="menuClick"/>
            <div class="cards">
                <swiper
                    :autoHeight="true"
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

<script lang="ts">
import Banner from './Banner.vue'
import Profile from './Profile.vue'
import Footer from './Footer.vue'
import Menu from './Menu.vue'
import CareerPage from './CareerPage.vue'
import NotePage from './NotePage.vue'
import TechPage from './TechPage.vue'
import MusicPage from './MusicPage.vue'
import SharingPage from './SharingPage.vue'
import MobileAdapter from '../plugin/mobileAdapter'

import eventbus from '../plugin/eventbus';

import { ref, onMounted, defineComponent } from 'vue'
import { Swiper, SwiperSlide } from 'swiper/vue'
import 'swiper/css';

/* Only for mobile */
let targetIndex = 0

export default defineComponent({
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
    beforeRouteEnter(to: any, from: any, next: any) {
        let routerMap = ['/','/career','/note','/tech','/music','/sharing']
        routerMap.forEach(function(value, index) {
                if (to.path === value) {
                    targetIndex = index
                }
            }
        )

        next()
	},
    setup() {
        const MenuRef = ref()

        let useSwiper: any
        let isMobile = ref(MobileAdapter.isMobile)

        const onSwiper = (swiper: any) => {
            useSwiper = swiper
        };

        const onSlideChange = (swiper: any) => {
            if (swiper.activeIndex == 0) {
                MenuRef.value.clearStatus()
            } else {
                MenuRef.value.actMouseOver(swiper.activeIndex)
            }
        }

        const menuClick = (index: number) => {
            useSwiper.slideTo(index)
        }

        onMounted(()=> {
            if (isMobile.value) {
                eventbus.on('switchCard',()=>{
                    setTimeout(()=> {
                        useSwiper.updateAutoHeight(500)
                    }, 300)
                })

                menuClick(targetIndex)
            } else {
                targetIndex = targetIndex == 0 ? 1 : targetIndex
                MenuRef.value.actMouseOver(targetIndex)
            }
        })

        return {
            MenuRef,
            menuClick,
            onSwiper,
            onSlideChange,
            isMobile
        }
    }
})
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