<template>
  <!-- 底部 -->
  <footer class="foot_box">
    <section class="list_box">
      <div class="list_cont">
        <div class="col">
          <h4>关于我们</h4>
          <ul class="child_list">
            <li>公司简介</li>
            <li>企业文化</li>
            <li>发展历程</li>
          </ul>
        </div>
        <div class="col">
          <h4>服务项目</h4>
          <ul class="child_list">
            <li>公司简介</li>
            <li>企业文化</li>
            <li>发展历程</li>
          </ul>
        </div>
        <div class="col">
          <h4>案例展示</h4>
          <ul class="child_list">
            <li>公司简介</li>
            <li>企业文化</li>
            <li>发展历程</li>
          </ul>
        </div>
        <div class="col">
          <h4>新闻资讯</h4>
          <ul class="child_list">
            <li>公司简介</li>
            <li>企业文化</li>
            <li>发展历程</li>
          </ul>
        </div>
        <div class="col">
          <h4>联系</h4>
          <ul class="child_list">
            <li>公司简介</li>
            <li>企业文化</li>
            <li>发展历程</li>
          </ul>
        </div>
      </div>

    </section>
    <section class="des_box">
      <div class="des_cont">Copyright © 2023 测试站点&nbsp;&nbsp;本站资源来源于互联网&nbsp;&nbsp;苏ICP12345678&nbsp;&nbsp;XML地图</div>
    </section>
  </footer>
</template>

<script>
export default {
  name: 'FootBox',
  data () {
    return {}
  }
}
</script>

<style lang="scss" scoped>
.foot_box {
  .list_box {
    width: 100%;
    background-color: #111;
    color: #93959b;
    font-size: 13px;
    padding-top: 40px;
    padding-bottom: 35px;
    .list_cont {
      width: 1200px;
      margin: 0 auto;
      display: flex;
      flex-wrap: wrap;
      justify-content: space-between;

      .col {
        padding: 0 5px;
        > h4 {
          line-height: 20px;
          font-size: 16px;
          color: white;
          margin-bottom: 10px;
        }
        .child_list {
          li {
            line-height: 2;
          }
        }
      }
    }
  }
  .des_box {
    width: 100%;
    padding-top: 25px;
    padding-bottom: 25px;
    background: #0d0d0d;
    font-size: 13px;
    color: #93959b;
    .des_cont {
      width: 1200px;
      margin: 0 auto;
    }
  }
  @media screen and (max-width: 1200px) {
    .list_box {
      .list_cont {
        width: 100%;
        padding: 0 15px;
      }
    }
    .des_box {
      .des_cont {
        width: 100%;
        padding: 0 15px;
      }
    }
  }
}
</style>
