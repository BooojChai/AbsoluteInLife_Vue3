<template>
    <div class="card" @mouseover="handleMouse" @click="navigateFromCard()">
        <img :src="backgroundImage" alt="">
        <CardTitle :content="title"  @click="navigateFromTitle()"></CardTitle>
            <collapse-transition>
                <div class="content" v-show="isActive">
                    <slot></slot>
                </div>
            </collapse-transition>
        <CardFooter :content="footer"></CardFooter>
    </div>
</template>

<script>
import CardTitle from "./CardTitle.vue"
import CardFooter from "./CardFooter.vue"
import CollapseTransition from "../collapse-transition"

import { ref, onBeforeMount, onMounted, onUnmounted } from 'vue'
import { useRouter } from 'vue-router'
import eventbus from '../../plugin/eventbus';

import MobileAdapter from '../../plugin/mobileAdapter'

export default {
    setup(props) {
        let isActive = ref(false)
        let router = useRouter()
        let isMobile = ref(MobileAdapter.isMobile)

        onBeforeMount(()=> {
            isActive.value = props.isDefaultActive
        })

        onMounted(()=> {
            eventbus.on('switchCard',(data)=>{
                if (data.type == props.cardType) {
                    if (data.name == props.cardName) {
                        isActive.value = true
                    } else {
                        isActive.value = false
                    }
                }
            })
        })

        onUnmounted(()=> {
            eventbus.off('switchCard')
        })

        function handleMouse() {
            if (!isMobile.value) {
                eventbus.emit('switchCard', {
                    name: props.cardName,
                    type: props.cardType
                })
            }
        }

        function navigateFromTitle() {
            if (isActive.value) {
                router.push({name: props.targetArticle})
            }
        }

        function navigateFromCard() {
            if (isMobile.value) {
                if (isActive.value) {
                    router.push({name: props.targetArticle})
                } else {
                    eventbus.emit('switchCard', {
                        name: props.cardName,
                        type: props.cardType
                    })
                }
            }
        }

        return {
            isActive,
            navigateFromCard,
            navigateFromTitle,
            handleMouse,
            isMobile
        }
    },
    props: {
        isDefaultActive: {
            type: Boolean,
            default: false
        },
        cardType: {
            type: String,
            required: true
        },
        cardName: {
            type: String,
            required: true
        },
        targetArticle: {
            type: String,
            default: "/"
        },
        title: {
            icon: "icon-zhiding",
            text:  "It's title text"
        },
        footer: {
            left: "This is footer left",
            right: 'This is footer right'
        },
        backgroundImage: {
            type: String
        }
    },
    components: {
        CardTitle,
        CardFooter,
        CollapseTransition
    }
}
</script>

<style lang="less">
    .card {
        position: relative;
        padding: 20px 30px 10px 30px;
        border-radius: 10px;
        border: #181818 1px solid;
        overflow: hidden;
        margin: 0 10px 10px 10px;

        img {
            position: absolute;
            object-fit: contain;
            top: 0;
            left: 0;
            opacity: .4;
            z-index: -1;
        }

        .content {
            font-size: 18px;
            line-height: 1.625;
            font-weight: 500;

            p,
            div,
            img {
                padding: 6px 0;
            }

            li {
                padding-left: 20px;
            }

            li:hover a {
                color: #B7452f;
            }
        }
    }
</style>