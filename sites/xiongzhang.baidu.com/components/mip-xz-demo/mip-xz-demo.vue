<template>
  <div>
    <div class="pay-form-wrap">
      <x-cell
        :value="order.name"
        title="购买商品或服务" />
      <x-field
        label="交易金额"
        placeholder="请输入金额"
        type="number"
        @change="changeMoney" />
      <x-cell
        title="交易时间"
        is-link>
        <x-datetime
          placeholder="请选择"
          @change="changeTime" />
      </x-cell>
      <x-cell
        title="交易方式"
        is-link>
        <!-- select显示placeholder -->
        <x-select
          :opts="orderTypeOpts"
          type="plain"
          placeholder="请选择"
          @change="changeWay" />
      </x-cell>
      <x-cell
        title="性别"
        is-link>
        <!-- select显示指定项，index为数字 -->
        <x-select
          :opts="sexyOpts"
          type="plain"
          index="0"
          @change="changeSexy" />
      </x-cell>
      <x-field
        label="交易账号"
        placeholder="请填写"
        type="number"
        @change="changeAccount" />
    </div>
    <div class="commercial-form-wrap">
      <div>
        <div class="title">商家违反了承诺</div>
        <div class="choose">
          <x-select
            :opts="promiseOpts"
            index="0"
            placeholder="请选择"
            @change="helloworld" />
        </div>
      </div>
      <div class="btn-wrap">
        <x-button
          plain
          size="large"
          @click="nextStep">下一步</x-button>
      </div>
    </div>
    <div style="margin-top: 10px;margin-bottom: 10px">
      <x-radio
        v-model="order.check"
        :options="optionsRadio"
        class="page-part">
        <a
          slot="append"
          href="https://m.baidu.com" >《点我收获money》</a>
      </x-radio>
      <x-cell title="选中的项">{{ order.check }}</x-cell>
    </div>
    <div style="margin-top: 10px;margin-bottom: 10px">
      <x-radio
        v-model="value1"
        :options="options1"
        class="page-part"
        title="单选框列表" />
      <div>
        <x-cell title="选中的项">{{ value1 }}</x-cell>
      </div>

      <x-radio
        v-model="value2"
        :options="options2"
        class="page-part"
        title="第二个单选框列表" />
      <div>
        <x-cell title="选中的项">{{ value2 }}</x-cell>
      </div>

      <x-radio
        v-model="value3"
        :options="options3"
        align="right"
        class="page-part"
        title="右对齐" />
    </div>
  </div>
</template>

<style scoped lang="less">

.pay-form-wrap {
  border-bottom: 8px solid #f1f1f1;
}
.commercial-form-wrap {
  padding: 0 17px 33px;
  // border-bottom: 8px solid #f1f1f1;

  .title {
    padding: 20px 0;
    line-height: 1;
    font-size: 14px;
    color: #000;
  }

  .btn-wrap {
    margin-top: 30px;
  }
}
</style>

<script>

import XCell from '../mip-xz-cell/mip-xz-cell'
import XField from '../mip-xz-field/mip-xz-field'
import XButton from '../mip-xz-button/mip-xz-button'
import XSelect from '../mip-xz-select/mip-xz-select'
import XDatetime from '../mip-xz-datetime/mip-xz-datetime'
import XRadio from '../mip-xz-radio/mip-xz-radio'

export default {

  components: {
    XCell,
    XField,
    XButton,
    XSelect,
    XDatetime,
    XRadio
  },

  props: {
    src: {
      type: String,
      required: true,
      default () {
        return ''
      }
    },
    show: {
      type: String,
      default () {
        return 'first'
      }
    }
  },
  data () {
    return {
      order: {
        name: '上门保洁服务',
        money: null,
        sexy: 1,
        way: null,
        time: null,
        check: ''
      },
      value1: '',
      value2: '值A',
      value3: '',
      promiseOpts: [
        {
          text: '乱收费',
          value: 1
        },
        {
          text: '乱咬人',
          value: 2
        },
        {
          text: '乱扔垃圾',
          value: 3
        }
      ],
      orderTypeOpts: [
        {
          text: '网上银行',
          value: 1
        },
        {
          text: '支付宝',
          value: 2
        },
        {
          text: '微信',
          value: 3
        },
        {
          text: '现金',
          value: 4
        },
        {
          text: '其他',
          value: 5
        }
      ],
      sexyOpts: [
        {
          text: '男',
          value: 1
        },
        {
          text: '女',
          value: 2
        }
      ]
    }
  },
  created () {
    this.optionsRadio = [{label: '我已阅读并同意', value: 34}]
    this.options1 = ['选项A', '选项B', '选项C']
    this.options3 = ['选项A', '选项B', '选项C']
    this.options2 = [
      {
        label: '被禁用',
        value: '值F',
        disabled: true
      },
      {
        label: '选项A',
        value: '值A'
      },
      {
        label: '选项B',
        value: '值B'
      }
    ]
  },

  mounted () {
    console.log('This is my first custom component !')
  },
  methods: {
    changeMoney (val) {
      console.log('change money: ' + val)
      this.order.money = val
    },
    changeSexy (data) {
      console.log('change sex: ' + data.text)
      this.order.sex = data.value
    },
    changeWay (data) {
      console.log('change order way: ' + data.text)
      this.order.way = data.value
    },
    changeTime (data) {
      console.log('change time: ' + data)
      this.order.time = data
    },
    changeAccount (data) {
      console.log('change account: ' + data)
      this.order.account = data
    },
    nextStep () {
      if (this.validate()) {
        console.log('goto next step')
      } else {
        console.log('校验出错')
      }
    },
    validate (data) {
      console.log('validate all field')
      if (!this.order.money) {
        MIP.setData({
          toastTip: '请输入金额'
        })
        this.$emit('validate')
        return false
      }
      if (!this.order.way) {
        MIP.setData({
          toastTip: '选择交易方式'
        })
        this.$emit('validate')
        return false
      }
      if (!this.order.time) {
        MIP.setData({
          toastTip: '请选择时间'
        })
        this.$emit('validate')
        return false
      }
      if (!this.order.account) {
        MIP.setData({
          toastTip: '请填写账号'
        })
        this.$emit('validate')
        return false
      }
      if (!this.order.check) {
        MIP.setData({
          toastTip: '必须同意哦'
        })
        this.$emit('validate')
        return false
      }
      return true
    }
  }
}
</script>
