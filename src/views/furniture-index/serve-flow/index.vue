<template>
  <section class="serve_flow">
    <div class="animate  flow_cont" ref="flowCont">
      <title-txt :txtObj="txtObj"></title-txt>
      <ul class="flow_tabs">
        <li v-for="(item,index) in flowList" :key="index" :class="flowIndex===index?'active_li':''" @click="flowHandler(index)">
          <p>{{ item.title }}</p>
          <p>{{ item.titleEnglish }}</p>
        </li>
      </ul>
      <ul class="tab_item">
        <li v-for="(item,index) in flowList" :key="index" v-show="flowIndex===index">
          <p v-for="(itemTxt,idnexTxt) in item.txtArr" :key="idnexTxt">{{ itemTxt }}</p>
        </li>
      </ul>
    </div>
  </section>
</template>

<script>
import TitleTxt from '@/components/TitleTxt'
import animateVisible from '@/mixin/animate-visible'
export default {
  name: 'ServeFlow',
  components: { TitleTxt },
  mixins: [animateVisible],
  data () {
    return {
      txtObj: {
        title: '服务流程',
        englishTxt: 'SERVICES PROCESS'
      },
      flowIndex: 0,
      flowList: [
        {
          title: '咨询',
          titleEnglish: 'Consultation',
          txtArr: [
            '装饰设计意向客户可通过在线咨询、电话咨询、亦可直接在设计团队预约满意的设计师上门量房，客服人员将第一时间响应您的请求，竭诚为您服务。',
            '设计师仔细聆听客户的装修需求（广州办公室装修、店铺装修、写字楼装修、厂房装修等装修相关业务），并解答分析。'
          ]
        },
        {
          title: '初步方案',
          titleEnglish: 'Preliminary Plan',
          txtArr: [
            '为您精心挑选合适的设计师上门进行度量环境，同时与客户深度沟通认真聆听客户的需求，为客户量身定制绿色环保的办公或居住空间。',
            '设计师及技术员亲自到现场度量及观察现场环境后，绘制平面配置图，初步平面方案确认后出具装修预算造价。'
          ]
        },
        {
          title: '优化设计',
          titleEnglish: 'Optimization Design',
          txtArr: [
            '双方达成一致意见，客户与公司签订合作协议，交纳设计押金后，设计师作进一步深化设计，提供方案效果图、方案施工图及准确装修报价表。'
          ]
        },
        {
          title: 'Optimization Design',
          titleEnglish: 'Signing of the contract',
          txtArr: [
            '根据客户的思想和要求，设计师会为您提供最优的、专业的设计方案及详细的装饰预算，客户确认方案后将与绿菩提装饰签订项目合作协议。',
            '客户确认设计和报价后，双方签订装修施工合同。'
          ]
        },
        {
          title: '施工',
          titleEnglish: 'Construction',
          txtArr: [
            '针对所有项目均会成立项目组进场，办理入场手续，在收到第一期工程款后进行开工。项目组负责人在项目施工期间进行科学控制、5s现场管理、分段验收、监督工程质量、严格控制工进度等。',
            '客户与工程人员办理入场手续，收到客户第一期工程款后开工。装修施工期间公司派工程人员到场管理、监督人员检查装修工程质量，发现问题及时解决，进行按质按量操作。'
          ]
        },
        {
          title: '售后服务',
          titleEnglish: 'After-sale service',
          txtArr: [
            '项目竣工验收保质保量，按国家及行业规范进行整体验收，不合格或未达标在工程期限内进行整改，以达到验收标准。验收通过签订验收单进行工程尾款结算，同时为您提供竣工技术文件、工程保修卡。',
            '定期对客户回访，提供两年的免费保修服务，终身维护。水电紧急保修情况，24小时上门维修；其他保修情况，48小时上门维修。请相信，我们是专业的广州设计公司。'
          ]
        }
      ]
    }
  },
  mounted () {
    this.animateVisible(this.$refs.flowCont, 'animate_up')
  },
  methods: {
    flowHandler (index) {
      this.flowIndex = index
    }
  }
}
</script>

<style lang="scss" scoped>
.serve_flow {
  background-image: url('@/assets/images/serve-flow.jpg');
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  background-attachment: fixed;
  padding: 60px 0 60px;
  .flow_cont {
    width: 1200px;
    margin: 0 auto;
    .flow_tabs {
      display: flex;
      justify-content: space-around;
      padding-bottom: 50px;
      border-bottom: 1px solid #ccc;
      flex-wrap: wrap;
      > li {
        width: 150px;
        height: 150px;
        border: 2px solid #c89302;
        border-radius: 50%;
        background-color: #c89302;
        color: #222;
        text-align: center;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        cursor: pointer;
        transition: all 0.5s ease 0s;
        position: relative;

        &:hover {
          background-color: #fab702;
          border-color: #fab702;
          color: #222;
        }
        p:nth-child(1) {
          font-size: 18px;
          line-height: 1.3;
        }
        p:nth-child(2) {
          font-size: 12px;
          line-height: 2;
        }
      }
      .active_li {
        background-color: transparent;
        border-color: #fff;
        color: #fff;
        &::after {
          content: '';
          display: block;
          width: 1px;
          height: 50px;
          background-color: #ccc;
          position: absolute;
          left: 50%;
          bottom: -52px;
        }
        &:hover {
          background-color: transparent;
          border-color: #666;
          color: white;
        }
      }
    }
    .tab_item {
      > li {
        color: #ddd;
        font-size: 14px;
        line-height: 1.8;
        p {
          margin-top: 25px;
        }
      }
    }
  }
}
@media screen and (max-width: 1200px) {
  .serve_flow {
    padding: 30px 10px;
    .flow_cont {
      width: 100%;
      .flow_tabs {
        > li {
          width: 136px;
          height: 136px;
        }
      }
    }
  }
}

@media screen and (max-width: 970px) {
  .serve_flow {
    .flow_cont {
      .flow_tabs {
        > li {
          width: 94px;
          height: 94px;
          margin-top: 10px;
          p:nth-child(1) {
            font-size: 14px;
          }
          p:nth-child(2) {
            display: none;
          }
        }
        .active_li {
          &::after {
            width: 0;
          }
        }
      }
    }
  }
}
</style>
