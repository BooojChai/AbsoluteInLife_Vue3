<template>
    <div class="sharing">
        <Card :cardName="'Card-01'" :cardType="'Sharing'" :isDefaultActive="true" :title="{icon:'icon-zhiding',text:'01. 记录2018年9月大连之行'}" :footer="{left:'2022/7/29',right:'# 雨也须来，晴也须来'}" :backgroundImage="require('./Article/Page/assets/ABGDL.jpg')" :targetArticle="'LoveArticle-01'">
            <p>和蛋总的第一次旅行，去往美丽的北方滨海城市———<b class="red">大连</b>。</p>
            <p>大连的美给我们留下了<b class="red">极其深刻</b>的印象，也造就了我的一个拍照技术小巅峰。</p>
            <b>雨也须来，晴也须来。</b>
            <img src="./Article/Page/assets/dl/dl3_card.jpg" alt="">
        </Card>
    </div>
</template>

<script>
/* Cards */
import Card from './Card/Card.vue'

export default {
    components: {
        Card
    }
}
</script>

<style lang="less" scoped>
img {
    width: 100%;
    margin-top: 10px;
}
</style>