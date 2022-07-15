<template>
    <div class="profile" :class="{'profile-mobile':isMobile}">
        <img src="../assets/avatar.jpg" alt="">

        <div class="name">{{ name }}</div>

        <div class="sign">{{ sign }}</div>

        <div class="core-content">
            <div class="aboutme title" @click="$router.push('./Article-01')">About Me</div>

            <div class="content">
                <li v-for="(item, index) in prop" :key="index">{{ prop[index] }}</li>
            </div>

            <div class="findme title">Find Me Here</div>

            <div class="content">
                <div v-for="(item, index) in findme" :key="index">
                    <span :class="findme[index].iconClass"></span>
                    <span><a :href="findme[index].url" target="_blank">{{ findme[index].text }}</a></span>
                </div>
            </div>

            <div class="Friends title">
                Friends
            </div>

            <div class="content">
                <span v-for="(item, index) in friends" :key="index"><a :href="friends[index].url"
                        target="_blank">{{ friends[index].name }}</a></span>
            </div>
        </div>
    </div>
</template>

<script>
import MobileAdapter from '../plugin/mobileAdapter'

export default {
    setup() {
        let data = {
            name: "Bojun Chai",
            sign: "即使缓慢，但步履不停。",
            prop: ["正在奔三的微软工程师", "业余吉他手/鼓手/贝斯手/唱作人",
                "最喜欢做的事情是“动脑子”", "一个新生男孩的爸爸"],
            findme: [
                {
                    iconClass: ["iconfont", "icon-changge"],
                    url: "https://music.163.com/#/user/home?id=370053934",
                    text: "Songwriter - NetEase Cloud Music"
                },
                {
                    iconClass: ["iconfont", "icon-yinle"],
                    url: "https://music.163.com/#/user/home?id=67230984",
                    text: "YouthSquare Band"
                },
                {
                    iconClass: ["iconfont", "icon-shipin"],
                    url: "https://space.bilibili.com/89096037?spm_id_from=333.1007.0.0",
                    text: "YouthSquare Band - Bilibili"
                },
                {
                    iconClass: ["iconfont", "icon-github"],
                    url: "https://github.com/BooojChai",
                    text: "BooojChai - Github"
                }
            ],
            friends: [
                {
                    url: "https://github.com/daviddwlee84",
                    name: "David Lee"
                },
                {
                    url: "https://www.qzq.at/",
                    name: "Samuel Qian"
                },
                {
                    url: "https://music.163.com/#/user/home?id=1515499305",
                    name: "强倩Airice"
                },
                {
                    url: "http://eureka-moment-fm.com/",
                    name: "Eureka Moment"
                },
                {
                    url: "https://play.google.com/store/apps/details?id=com.eurekaffeine.pokedex",
                    name: "破壳萌图鉴 - Play Store"
                },
                {
                    url: "https://aka.ms/returntrue",
                    name: "ReturnTrue"
                }
            ]
        }

        return {
            ...(data),
            isMobile: MobileAdapter.isMobile
        }
    }
}
</script>

<style lang="less" scoped>
.profile-mobile {
    margin: 0 10px;
    padding: 15px;
    border-radius: 20px;
    border: #181818 1px solid;
    background-image: url('./Article/Page/assets/beatles.jpg');
    background-size: cover;
}

.profile {
    display: flex;
    flex-direction: column;
    align-items: center;
    font-size: 15px;
    margin-bottom: 20px;

    img {
        margin-top: 10px;
        width: 200px;
        height: 200px;
        border-radius: 10px;
    }

    .name {
        font-size: 28px;
        color: #AFAFAF;
        margin-top: 10px;
    }

    .title {
        margin-top: 15px;
        font-size: 20px;
        font-weight: 600;
        line-height: 40px;
        border-top: 1px solid;
        border-image: linear-gradient(to right, rgba(66, 66, 66, .9), rgba(66, 66, 66, .1)) 1;
        padding-left: 10px;
    }

    .title:hover {
        color: #B7452f;
    }

    .core-content {
        .content {
            padding-left: 10px;
            white-space: pre-wrap;

            span {
                margin-right: 15px;
            }
        }

        .content a:hover {
            color: #B7452f;
        }
    }
}
</style>