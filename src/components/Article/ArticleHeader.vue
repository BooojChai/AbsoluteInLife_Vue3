<template>
    <div class="header" v-if="!isMobile">
        <transition name="icon-trans" appear>
            <div class="iconfont icon-FanHui" @click="$router.back()"></div>
        </transition>
        <div class="wrapper">
            <transition name="title-trans" appear>
                <div class="title">{{title}}</div>
            </transition>
            <div class="item">
                <transition name="my-word-trans">
                    <div class="my-word" v-show="myWord.show">{{myWord.text}}</div>
                </transition>
                <transition name="my-word-trans">
                    <div class="my-item" v-show="myItem.show">{{myItem.text}}</div>
                </transition>
            </div>
        </div>
    </div>
    <div class="header-mobile" v-else>
        <transition name="title-trans" appear>
            <div class="title">{{title}}</div>
        </transition>
        <transition name="my-word-trans">
            <div class="my-word" v-show="myWord.show">{{myWord.text}}</div>
        </transition>
        <transition name="my-word-trans">
            <div class="my-bottom-line" v-show="myItem.show">
                <div class="my-item">{{myItem.text}}</div>
                <div class="iconfont icon-shouye" @click="$router.push('./')"></div>
            </div>
        </transition>
    </div>
</template>

<script lang="ts">
import { onMounted, reactive, defineComponent } from 'vue'
import MobileAdapter from '../../plugin/mobileAdapter'

export default defineComponent({
    props: {
        title: {
            type: String,
            default: "Hi Article,"
        },
        mark: {
            type: String,
            default: "To find the absolute in your life.",
        },
        item: {
            type: String,
            default: "Item. 01",
        }
    },
    setup(props) {
        let data = reactive({
            myWord: {
                show: false,
                text: props.mark
            },
            myItem: {
                show: false,
                text: props.item
            }
        })

        function startUp() {
            setTimeout(() => {
                data.myWord.show = true
            }, 500);
            setTimeout(() => {
                data.myItem.show = true
            }, 1500);
        }

        onMounted(()=> {
            startUp()
        })

        return {
            ...(data),
            isMobile: MobileAdapter.isMobile
        }
    }
})
</script>

<style lang="less" scoped>
.header {
    height: 190px;
    color: #DFDFDF;
    opacity: .8;
    padding-left: 10px;

    .title-trans-enter-from {
        padding-top: 33px;
        opacity: 0;
    }

    .title-trans-enter-active {
        transition: all 2s;
    }

    .icon-FanHui {
        position: fixed;
        top: 30px;
        left: 30px;
        font-size: 40px;
    }

    .title {
        font-family: "Oswald-Regular";
        padding-top: 48px;
        text-align: left;
        font-size: 40px;
    }

    .item {
        display: flex;
        justify-content: space-between;

        .my-word {
            font-size: 20px;
            text-align: left;
            opacity: .85;
        }

        .my-item {
            font-size: 20px;
            text-align: left;
            margin-right: 10px;
            opacity: .85;
        }

        .my-word-trans-enter-active {
            transition: all 4s;
        }

        .my-word-trans-enter-from {
            opacity: 0;
        }
    }
}

.header-mobile {
    min-height: 180px;
    color: #DFDFDF;
    opacity: .8;
    padding: 40px 10px 15px 20px;

    .icon-trans-enter-from {
        opacity: 0;
    }

    .icon-trans-enter-active {
        transition: all 5s;
    }

    .title-trans-enter-from {
        padding-top: 33px;
        opacity: 0;
    }

    .title-trans-enter-active {
        transition: all 2s;
    }

    .title {
        font-family: "Oswald-Regular";
        text-align: left;
        font-size: 30px;
    }

    .my-word-trans-enter-active {
        transition: all 3s;
    }

    .my-word-trans-enter-from {
        opacity: 0;
    }

    .my-word {
        font-size: 18px;
        text-align: left;
        margin-top: 5px;
        opacity: .8;
    }

    .my-bottom-line {
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding-right: 10px;

        .my-item {
            font-size: 14px;
            text-align: left;
            opacity: .65;
        }

        .icon-shouye {
            font-size: 25px;
        }
    }
}
</style>