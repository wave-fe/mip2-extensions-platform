<template>
  <button
    :type="nativeType"
    :class="['mint-button--' + type, 'mint-button--' + size, {
      'is-disabled': disabled,
      'is-plain': plain
    }]"
    :disabled="disabled"
    class="mint-button"
    @click="handleClick">
    <span
      v-if="icon || $slots.icon"
      class="mint-button-icon"
    >
      <slot name="icon">
        <i
          v-if="icon"
          :class="'mintui-' + icon"
          class="mintui" />
      </slot>
    </span>
    <label class="mint-button-text"><slot /></label>
  </button>
</template>

<script>
/**
 * mt-header
 * @module components/button
 * @desc 按钮
 * @param {string} [type=default] - 显示类型，接受 default, primary, danger
 * @param {boolean} [disabled=false] - 禁用
 * @param {boolean} [plain=false] - 幽灵按钮
 * @param {string} [size=normal] - 尺寸，接受 normal, small, large
 * @param {string} [native-type] - 原生 type 属性
 * @param {string} [icon] - 图标，提供 more, back，或者自定义的图标（传入不带前缀的图标类名，最后拼接成 .mintui-xxx）
 * @param {slot} - 显示文本
 * @param {slot} [icon] 显示图标
 *
 * @example
 * <mt-button size="large" icon="back" type="primary">按钮</mt-button>
 */
export default {
  name: 'MtButton',

  props: {
    icon: {
      type: String,
      default: ''
    },
    disabled: {
      type: Boolean,
      default: false
    },
    nativeType: {
      type: String,
      default: ''
    },
    plain: {
      type: Boolean,
      default: false
    },
    type: {
      type: String,
      default: 'default',
      validator (value) {
        return [
          'default',
          'danger',
          'primary'
        ].indexOf(value) > -1
      }
    },
    size: {
      type: String,
      default: 'normal',
      validator (value) {
        return [
          'small',
          'normal',
          'large'
        ].indexOf(value) > -1
      }
    }
  },
  methods: {
    handleClick (evt) {
      this.$emit('click', evt)
    }
  }
}
</script>

<style lang="less" scoped>
  @import "../../common/style/var";

  .mint {
    &-button {
      appearance: none;
      border-radius: 3px;
      border: 0;
      box-sizing: border-box;
      color: inherit;
      display: block;
      font-size: 14px;
      font-weight: 400;
      vertical-align: middle;
      height: 38px;
      line-height: 37px;
      outline: 0;
      overflow: hidden;
      position: relative;
      text-align: center;
      text-decoration: none;
      -webkit-tap-highlight-color: rgba(0,0,0,0);

      &::after {
        background-color: #000;
        content: " ";
        opacity: 0;
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
      }

      &:not(.is-disabled):active::after {
        opacity: .05;
      }

      &-icon {
        vertical-align: middle;
        display: inline-block;
      }

      &--default {
        color: @button-default-color;
        background-color: @button-default-background-color;
        box-shadow: @button-default-box-shadow;

        &.is-plain {
          border: 1px solid @button-default-plain-border-color;
          background-color: transparent;
          box-shadow: none;
          color: @button-default-plain-color;
        }
      }

      &--primary {
        color: @button-primary-color;
        background-color: @button-primary-background-color;

        &.is-plain {
          border: 1px solid @button-primary-background-color;
          background-color: transparent;
          color: @button-primary-background-color;
        }
      }

      &--danger {
        color: @button-danger-color;
        background-color: @button-danger-background-color;

        &.is-plain {
          border: 1px solid @button-danger-background-color;
          background-color: transparent;
          color: @button-danger-background-color;
        }
      }

      &--large {
        display: block;
        width: 100%;
      }

      &--normal {
        display: inline-block;
        padding: 0 8px;
      }

      &--small {
        display: inline-block;
        font-size: 14px;
        padding: 0 12px;
        height: 33px;
      }

      &.is-disabled {
        opacity: .6;
      }
    }
  }
</style>
