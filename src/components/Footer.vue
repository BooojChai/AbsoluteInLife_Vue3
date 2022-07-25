<template>
    <div class="footer" v-pre>
        <div class="saywhat">
            虽然前方拥堵，但您仍在最优道路上。
        </div>
        <div class="power">
            Powered By <a href="https://v3.cn.vuejs.org" target="_blank">Vue.js</a> | Design & Dev <a href="https://github.com/BooojChai" target="_blank">Boooj</a>
        </div>
        <div class="ending">
          <img src="../assets/batb.png" alt="">
          <span class="text">
            <a target="_blank" href="http://www.beian.gov.cn/portal/registerSystemInfo?recordcode=32011402011199" >苏公网安备 32011402011199号</a>
          </span>
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
    align-items: center;
    text-align: center;
    font-size: 15px;
    margin-top: 10px;
    padding-bottom: 20px;

    .power {
      span, a {
        color: #B7452f;
      }
    }

    .ending {
      margin-top: 10px;
      padding-top: 10px;
      width: 300px;
      font-size: 13px;
      border-top: 1px solid;
      border-image: linear-gradient(to right, rgba(66, 66, 66, .1), rgba(66, 66, 66, .9), rgba(66, 66, 66, .1)) 1;

      img {
        width: 17px;
        height: 17px;
      }

      .text {
        display: inline-block;
        margin-left: 5px;
      }
    }
  }
</style>