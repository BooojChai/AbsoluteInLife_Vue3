<template>
    <div class="footer" v-pre>
        <div class="saywhat">
            虽然前方拥堵，但您仍在最优道路上。
        </div>
        <div class="power">
            Powered By <a href="https://v3.cn.vuejs.org" target="_blank">Vue.js</a> | Design & Dev <a href="https://github.com/BooojChai" target="_blank">Boooj</a>
        </div>
        <div class="ending">
            欢迎常来：）
        </div>
    </div>
</template>

<script>
export default {
}
</script>

<style lang="less" scoped>
  .footer {
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    text-align: center;
    font-size: 15px;
    margin-top: 10px;
    padding-bottom: 20px;

    .power span, a {
      color: #B7452f;
    }

    .ending {
      font-size: 14px;
    }
  }
</style>