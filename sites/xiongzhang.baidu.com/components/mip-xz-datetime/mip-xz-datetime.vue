<template>
  <div class="mint-datetime">
    <button class="mint-datetime-btn-label"><span class="c-color-gray">{{ currentValue || placeholder }}</span></button>
    <input
      ref="date"
      :value="currentValue"
      type="date"
      class="mint-datetime-input"
      @change="inputChange">
  </div>
</template>

<style scoped lang="less">
.mint {
  &-datetime {
      position: relative;

      &-btn-label {
        display: inline-block;
        overflow: hidden;
        width: 100%;
        height: 38px;
        // padding: 0 8px;
        border: 0;
        font-size: 14px;
        font-weight: 400;
        line-height: 37px;
        text-align: right;
        vertical-align: middle;
        text-decoration: none;
        color: #000;
        // border-radius: 3px;
        outline: 0;
        background-color: #fff;
        -webkit-tap-highlight-color: rgba(0,0,0,0);
      }

      &-input {
        display: inline-block;
        overflow: hidden;
        width: 100%;
        height: 38px;
        // padding: 0 .08rem;
        border: 1px solid #eee;
        font-size: 14px;
        line-height: 38px;
        vertical-align: middle;
        word-wrap: normal;
        word-break: normal;
        color: #000;
        // border-radius: 1px;
        outline: 0;
        background-color: #fff;
        appearance: none;
        position: absolute;
        top: 0;
        left: 0;
        opacity: 0;
        text-align: right;
      }

  }
}
</style>

<script>
export default {
  name: 'MtDatetime',

  props: {
    placeholder: {
      type: String,
      default: ''
    },
    disabled: {
      type: Boolean,
      default: false
    },
    value: {
      type: String,
      default: ''
    }
  },

  data () {
    return {
      currentValue: this.value
    }
  },

  methods: {
    inputChange () {
      let dateEl = this.$refs.date
      this.currentValue = dateEl.value
      this.$emit('change', this.currentValue)
    }
  }
}
</script>
