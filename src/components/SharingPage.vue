<template>
    <div class="sharing">
        <Card :cardName="'Card-01'" :cardType="'Sharing'" :title="{icon:'icon-haixing',text:'01. 记录2018年9月大连之行'}" :footer="{left:'2022/7/29',right:'# 雨也须来，晴也须来'}" :backgroundImage="require('./Article/Page/assets/ABGDL.jpg')" :targetArticle="'LoveArticle-01'">
            <p>和蛋总的第一次旅行，去往美丽的北方滨海城市——<b class="red">大连</b>。</p>
            <p>大连的美给我们留下了<b class="red">极其深刻</b>的印象，也造就了我的一个拍照技术小巅峰。</p>
            <b>雨也须来，晴也须来。</b>
            <img src="./Article/Page/assets/dl/dl3_card.jpg" alt="">
        </Card>
        <Card :cardName="'Card-02'" :cardType="'Sharing'" :isDefaultActive="true" :title="{icon:'icon-huoguo',text:'02. 记录2019年10月重庆之行'}" :footer="{left:'2022/7/31',right:'# 从你的全世界路过'}" :backgroundImage="require('./Article/Page/assets/ABGCQ.jpg')" :targetArticle="'LoveArticle-02'">
            <p>2019年10月底，在疫情到来前的最后一个秋天，我和蛋总来了一趟说走就走的旅行，去往西南8D立体城市、魔幻山城——<b class="red">重庆</b>。</p>
            <p>重庆独一无二的城市景观和极具特色的美食令人<b class="red">流连忘返</b>，我最好的朋友和大学室友都<b>定居在重庆</b>。这是我<b>第二次</b>来到重庆，也绝不是最后一次。</p>
            <b>从你的前世界路过。</b>
            <img src="./Article/Page/assets/cq/cq7_card.jpg" alt="">
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