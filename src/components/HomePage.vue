<template>
    <div class="homepage">
        <Banner/>
        <div class="main wrapper" v-if="!isMobile">
            <Profile/>
            <div class="core-content">
                <Menu/>
                <div class="cards">
                    <router-view></router-view>
                </div>
            </div>
        </div>
        <div class="main-mobile" v-else>
            <Menu/>
            <div class="cards">
                <router-view></router-view>
            </div>
        </div>
        <Footer/>
    </div>
</template>

<script>
import Banner from './Banner.vue'
import Profile from './Profile.vue'
import Footer from './Footer.vue'
import Menu from './Menu.vue'
import MobileAdapter from '../plugin/mobileAdapter'
import { ref } from 'vue'

export default {
    components: {
        Banner,
        Profile,
        Footer,
        Menu
    },
    setup() {
        let isMobile = ref(MobileAdapter.isMobile)

        return {
            isMobile
        }
    }
}
</script>

<style lang="less" scoped>
.main {
    display: flex;
    margin-top: 10px;
    margin-bottom: 30px;

    .core-content {
        flex: 1;

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