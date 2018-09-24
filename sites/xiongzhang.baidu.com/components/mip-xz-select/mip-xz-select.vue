<template>
  <div
    :class="['mint-select--' + type]"
    class="mint-select" >
    <select
      ref="select"
      @change="selectChange" >
      <option
        v-for="item in opts"
        :key="item.value"
        :value="item.value">{{ item.text }}</option>
    </select>
    <button
      :class="['mint-select-' + type + '-button']"
      :style="{color: ifPlaceholder ? '#999' : '#000'}">{{ currentText }}</button>
  </div>
</template>

<style scoped lang="less">
.mint {
  &-select {
    position: relative;
    background-color: #fff;

    &--default::before {
      border: solid 1px #555;
      border-bottom-width: 0;
      border-left-width: 0;
      content: " ";
      position: absolute;
      top: 16px;
      right: 11px;
      width: 9px;
      height: 9px;
      transform: translateY(-50%) rotate(135deg);
    }

    &>select {
      display: inline-block;
      overflow: hidden;
      width: 100%;
      font-size: 14px;
      line-height: normal;
      vertical-align: middle;
      word-wrap: normal;
      word-break: normal;
      color: #000;
      border-radius: 0;
      border: 0;
      outline: 0;
      background-color: transparent;
      appearance: none;
    }

    &--default>select,
    &-default-button {
      position: relative;
      height: 38px;
      padding: 0 24px 0 8px;
      border: 1px solid #eee;
    }

    &-default-button {
      background: #fff;
      color: #000;
      text-align:left;
      font-size: 14px;
      position: absolute;
      top: 0;
      pointer-events: none;
      border-right: 0;
    }
    &--plain>select {
      color: #000;
    }

    &-plain-button {
      width: 100%;
      background: #fff;
      border: 0;
      color: #000;
      text-align:right;
      font-size: 14px;
      position: absolute;
      top:0;
      pointer-events: none;
    }
  }
}
</style>

<script>
export default {
  name: 'MtSelect',

  props: {
    opts: {
      type: Array,
      default () {
        return []
      }
    },
    placeholder: {
      type: String,
      default: ''
    },
    disabled: {
      type: Boolean,
      default: false
    },
    // 默认选中的index
    index: {
      type: Number,
      default: -1
    },
    text: {
      type: String,
      default: ''
    },
    type: {
      type: String,
      default: 'default',
      validator (value) {
        return [
          'default',
          'plain'
        ].indexOf(value) > -1
      }
    }
  },
  data () {
    let text = ''
    let value = ''
    let index = parseInt(this.index, 10)
    console.log(index)

    if (index > -1) {
      text = this.opts[index].text
      value = this.opts[index].value
    } else if (index === -1 && this.placeholder) {
      text = this.placeholder
    }

    return {
      currentIndex: index,
      currentText: text,
      currentValue: value
    }
  },
  computed: {
    ifPlaceholder () {
      return this.currentText === this.placeholder
    }
  },

  mounted () {
    this.$refs.select.selectedIndex = this.index
  },

  methods: {
    selectChange () {
      let select = this.$refs.select
      let index = this.index = select.selectedIndex
      this.currentValue = select.options[index].value
      this.currentText = select.options[index].text
      this.$emit('change', {value: this.currentValue, text: this.currentText, index})
    }
  }
}
</script>
