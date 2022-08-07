<template>
    <div class="banner">
        <transition name="title-trans" appear>
            <div class="title">{{title.text}}</div>
        </transition>
        <transition name="my-word-trans" appear>
            <div class="my-word" v-if="myWord.show">{{myWord.text}}</div>
        </transition>
    </div>
</template>

<script lang="ts">
import { onMounted, reactive, toRefs } from 'vue';

export default {
    setup() {
        let data = reactive({
            title: {
                text: "Hi There,"
            },
            myWord: {
                text: "To find the absolute in your life.",
                show: false
            }
        })

        function startUp() {
            setTimeout(() => {
                data.myWord.show = true
            }, 1000);
        }

        onMounted(()=>{
            startUp()
        })

        return {
            ...toRefs(data),
            startUp
        }
    }
}
</script>

<style lang="less" scoped>
    .banner {
        position: relative;
        height: 240px;
        background-image: linear-gradient(to top, #121212, rgba(18, 18, 18, 0)), url(../assets/xj2.jpg);
        background-position: center;
        background-size: cover;
        color: #DFDFDF;
        opacity: .8;

        .title {
            font-family: "Oswald-Regular";
            padding-top: 40px;
            text-align: center;
            font-size: 70px;
        }

        .title-trans-enter-from {
            padding-top: 33px;
            opacity: 0;
        }

        .title-trans-enter-active {
            transition: all 2s;
        }

        .my-word {
            font-size: 24px;
            text-align: center;
        }

        .my-word-trans-enter-active {
            transition: all 4s;
        }

        .my-word-trans-enter-from {
            opacity: 0;
        }
    }
</style>