<template>
  <div
    class="mint-radiolist"
    @change="$emit('change', currentValue)">
    <div
      v-for="(option, index) in options"
      :key="index"
      class="mint-radiolist-wrap">
      <label
        slot="title"
        class="mint-radiolist-label" >
        <span
          :class="{'is-right': align === 'right'}"
          class="mint-radio">
          <input
            v-model="currentValue"
            :disabled="option.disabled"
            :value="option.value || option"
            class="mint-radio-input"
            type="radio">
          <span class="mint-radio-core" />
        </span>
        <span
          class="mint-radio-label"
          v-text="option.label || option" />
      </label>
      <span class="mint-radiolist-append"><slot name="append" /></span>
    </div>
  </div>
</template>

<script>
/**
 * mt-radio
 * @module components/radio
 * @desc 单选框列表，依赖 cell 组件
 *
 * @param {string[], object[]} options - 选项数组，可以传入 [{label: 'label', value: 'value', disabled: true}] 或者 ['ab', 'cd', 'ef']
 * @param {string} value - 选中值
 * @param {string} [align=left] - checkbox 对齐位置，`left`, `right`
 *
 * @example
 * <mt-radio v-model="value" :options="['a', 'b', 'c']"></mt-radio>
 */
export default {
  name: 'MtRadio',

  props: {
    align: {
      type: String,
      default: 'left'
    },
    options: {
      type: Array,
      required: true,
      default () {
        return []
      }
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

  watch: {
    value (val) {
      this.currentValue = val
    },

    currentValue (val) {
      this.$emit('input', val)
    }
  }
}
</script>

<style lang="less" scoped>
  @import "../../common/style/var";

  .mint {
    &-radiolist {

      &-wrap {
        font-size: 0
      }

      &-append {
        color: #555;
        font-size: 14px;
        position: relative;
        top: 4px;
      }

      &-label {
        display: inline-block;
        // padding: 0 10px;
        font-size: 0;
      }

      &-title {
        font-size: 12px;
        margin: 8px;
        display: block;
        color: @radio-title-color;
      }
    }

    &-radio {
      &.is-right {
        float: right;
      }

      &-label {
        vertical-align: middle;
        margin-left: 6px;
        font-size: 14px;
        color: #555;
      }

      &-input {
        display: none;

        &:checked {
          + .mint-radio-core {
            background-color: @color-blue;
            border-color: @color-blue;

            &::after {
              background-color: @color-white;
              transform: scale(1);
            }
          }
        }

        &[disabled] + .mint-radio-core {
          background-color: @color-grey;
          border-color: #ccc;
        }
      }

      &-core {
        box-sizing: border-box;
        display: inline-block;
        background-color: @color-white;
        border-radius: 100%;
        border: 1px solid #555;
        position: relative;
        width: 14px;
        height: 14px;
        vertical-align: middle;

        &::after {
          content: " ";
          border-radius: 100%;
          position: absolute;
          top: 3px;
          left: 3px;
          width: 6px;
          height: 6px;
          transition: transform .2s;
          transform: scale(0);
        }
      }
    }
  }
</style>
