<template>
    <div class="menu">
        <div class="menu-item" v-for="(item, index) in items" :key="index" :class="{'active':items[index].isActive}"
        :style="{backgroundImage: 'linear-gradient(to right, rgba(18, 18, 18, 0), rgba(18, 18, 18, 1)), url('+ items[index].info.backgroudImg +')'}"
        @mouseover="handleMouseOver(index)">
            <div class="text">
                {{items[index].info.text}}
            </div>
            <transition name="word-trans">
                <div class="word" v-show="items[index].isActive" v-if="isMobile">
                    {{items[index].info.wordMobile}}
                </div>
                <div class="word" v-show="items[index].isActive" v-else>
                    {{items[index].info.word}}
                </div>
            </transition>
        </div>
    </div>
</template>

<script>
import { reactive, markRaw, ref } from 'vue'
import { useRouter } from 'vue-router'
import MobileAdapter from '../plugin/mobileAdapter'

export default {
    setup(props, context) {
        let router = useRouter()
        let isMobile = ref(MobileAdapter.isMobile)

        let items = reactive({
            1 : {
                info : markRaw({
                    name: "career",
                    text: "Professional \n Career",
                    word: "前路依然遥远",
                    wordMobile: "前路遥远",
                    backgroudImg: require('../assets/career.jpg'),
                    target: "CareerPage",
                }),
                isActive: true
            },
            2 : {
                info : markRaw({
                    name: "note",
                    text: "Informal \n Essay",
                    word: "最重要的小事",
                    wordMobile: "一些小事",
                    backgroudImg: require('../assets/note.jpg'),
                    target: "NotePage",
                }),
                isActive: false
            },
            3 : {
                info : markRaw({
                    name: "tech",
                    text: "Technology \n Science",
                    word: "软核技术分享",
                    wordMobile: "技术分享",
                    backgroudImg: require('../assets/tech.jpg'),
                    target: "TechPage",
                }),
                isActive: false
            },
            4 : {
                info : markRaw({
                    name: "music",
                    text: "Live & Life, \n Music",
                    word: "只有音乐才是解药",
                    wordMobile: "来口音药",
                    backgroudImg: require('../assets/music.jpg'),
                    target: "MusicPage",
                }),
                isActive: false
            },
            5 : {
                info : markRaw({
                    name: "sharing",
                    text: "Sharing \n Love",
                    word: "促膝长谈，畅聊一切",
                    wordMobile: "畅聊一切",
                    backgroudImg: require('../assets/sharing.jpg'),
                    target: "SharingPage",
                }),
                isActive: false
            },
        })

        function handleMouseOver(index) {
            context.emit("menuClick", index)
            actMouseOver(index)
        }

        const clearStatus = () => {
            for (var key in items) {
                items[key].isActive = false
            }
        }

        function actMouseOver(index) {
            clearStatus()

            items[index].isActive = true

            if (!props.isDemo) {
                router.replace({ name: items[index].info.target })
            }
        }

        return {
            items,
            isMobile,
            actMouseOver,
            clearStatus,
            handleMouseOver
        }
    },
    props: {
        isDemo: {
            type: Boolean,
            default: false
        }
    }
}
</script>

<style lang="less" scoped>
    .menu {
        display: flex;
        border: 2px solid #282828;
        border-radius: 10px;
        overflow: hidden;
        margin: 10px 20px 10px 20px;
        font-size: 16px;

        .menu-item {
            flex: 1;
            position: relative;
            border-right: 1px solid #181818;
            background-size: cover;
            padding: 10px;
            transition: all 1s;
            white-space: pre;
            overflow: hidden;

            .text {
                font-size: 16px;
            }

            .word-trans-enter-from, .word-trans-leave-to {
                padding-right: 20px;
                opacity: 0;
            }

            .word-trans-enter-active, .word-trans-leave-active {
                transition: all 1.2s;
            }

            .word {
                position: absolute;
                bottom: 9px;
                right: 10px;
                font-weight: 600;
                font-family: "shouxie";
            }
        }

        .menu-item:last-child {
            border: none
        }

        .active {
            flex: 2;
        }
    }
</style>