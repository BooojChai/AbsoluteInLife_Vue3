<template>
    <ArticleTemplate :header="headerContent" :footer="footerContent" :bgiPath="bgiPath">
        <div class="content">
            <h2>Cover. <a href="https://y.qq.com/n/ryqq/songDetail/003TEnl83gBNge" target="_blank">山海 - 草东没有派对</a></h2>
            <video class="video" controls>
                <source src="./assets/sh.mp4" type="video/mp4">
            </video>

            <h2>Cover. <a href="https://y.qq.com/n/ryqq/songDetail/003icnfI1qimEE" target="_blank">Chemical Bus - 逃跑计划</a></h2>
            <video class="video" controls>
                <source src="./assets/chemical_bus.mp4" type="video/mp4">
            </video>

            <h2>Cover Half. <a href="https://y.qq.com/n/ryqq/songDetail/004A2bMN49hRml" target="_blank">爱情你比我想的阁较伟大 - 茄子蛋</a></h2>
            <video class="video" controls>
                <source src="./assets/dwl.mp4" type="video/mp4">
            </video>

            <div class="ending">
                <li>Vocal/Guitar @Bojun Chai</li>
                <li>Vocal/Drum <a href="https://github.com/daviddwlee84" target="_blank">@David Lee</a></li>
                <li>Bass/Program/Synthesizer <a href="https://music.163.com/#/user/home?id=1515499305" target="_blank">@强倩Airice</a></li>
                <li>Solo Guitar <a href="https://www.qzq.at" target="_blank">@Samuel Qian</a></li>
                <li>Video By <a href="javascript:;">@AKA蛋蛋堡</a></li>
                <li>Space <a href="javascript:;">@Microsoft Suzhou</a></li>

                <img src="./assets/yd.jpg" alt="">
            </div>
        </div>
    </ArticleTemplate>
</template>

<script lang="ts">
import ArticleTemplate from '../ArticleTemplate.vue'

export default {
    components: {
        ArticleTemplate
    },
    setup() {
        let data = {
            headerContent: {
                title: "2022元旦微软苏州Office 乐队排练",
                mark: "未命名乐队首聚，生涩却有趣",
                item: "Music, Live & Life. 01",
            },
            footerContent: {
                left: "2022/06/20",
                right: "#一拍即合，一见如故",
            },
            bgiPath: require('./assets/ABG2.jpg')
        }

        return {
            ...(data)
        }
    }
}
</script>

<style lang="less" scoped>
.content {
    font-size: 18px;
    line-height: 1.625;
    font-weight: 500;

    * {
        margin-bottom: 12px;
    }

    li {
        margin-top: 5px;
        margin-bottom: 5px;
        padding-left: 15px;
    }

    h1,h2,h3 {
        color: #A0A0A0
    }


    a:hover {
        color: #B7452f;
    }

    .video {
        width: 100%
    }

    .ending {
        border-top: 1px solid;
        border-image: linear-gradient(to right, rgba(100,100,100,.5), rgba(100,100,100,.1)) 1;
        margin-top: 30px;
        padding-top: 20px;

        a {
            border-bottom: 2px solid #777777;
        }

        a:hover {
            border-bottom: 2px solid #B7452f;
        }

        img {
            width: 100%;
            margin: 15px;
        }
    }
}
</style>