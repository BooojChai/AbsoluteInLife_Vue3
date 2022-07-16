<template>
    <div class="sharing">
        <Card :cardName="'Card-01'" :cardType="'Sharing'" :isDefaultActive="true" :title="{icon:'icon-zhiding',text:'Sharing Love. 板块建设中'}" :footer="{left:'To Be Done',right:'#正在Coding'}" :backgroundImage="require('./Article/Page/assets/ABG2.jpg')" :targetArticle="'SharingPage'">
            <img src="../assets/star.png" alt="">
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
}
</style>