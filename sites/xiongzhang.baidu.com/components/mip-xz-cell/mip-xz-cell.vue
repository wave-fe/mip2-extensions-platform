<template>
  <a
    :href="href"
    class="mint-cell">
    <span
      v-if="isLink"
      class="mint-cell-mask" />
    <div class="mint-cell-left">
      <slot name="left" />
    </div>
    <div class="mint-cell-wrapper">
      <div class="mint-cell-title">
        <slot name="icon">
          <i
            v-if="icon"
            :class="'mintui-' + icon"
            class="mintui" />
        </slot>
        <slot name="title">
          <span
            class="mint-cell-text"
            v-text="title" />
          <span
            v-if="label"
            class="mint-cell-label"
            v-text="label" />
        </slot>
      </div>
      <div
        :class="{ 'is-link' : isLink }"
        class="mint-cell-value">
        <slot>
          <span v-text="value" />
        </slot>
      </div>
      <i
        v-if="isLink"
        class="mint-cell-allow-right" />
    </div>
    <div class="mint-cell-right">
      <slot name="right" />
    </div>
  </a>
</template>

<script>
// if (process.env.NODE_ENV === 'component') {
//   require('mint-ui/packages/font/style.css');
// }

/**
 * mt-cell
 * @module components/cell
 * @desc 单元格
 * @param {string|Object} [to] - 跳转链接，使用 vue-router 的情况下 to 会传递给 router.push，否则作为 a 标签的 href 属性处理
 * @param {string} [icon] - 图标，提供 more, back，或者自定义的图标（传入不带前缀的图标类名，最后拼接成 .mintui-xxx）
 * @param {string} [title] - 标题
 * @param {string} [label] - 备注信息
 * @param {boolean} [is-link=false] - 可点击的链接
 * @param {string} [value] - 右侧显示文字
 * @param {slot} - 同 value, 会覆盖 value 属性
 * @param {slot} [title] - 同 title, 会覆盖 title 属性
 * @param {slot} [icon] - 同 icon, 会覆盖 icon 属性，例如可以传入图片
 *
 * @example
 * <mt-cell title="标题文字" icon="back" is-link value="描述文字"></mt-cell>
 * <mt-cell title="标题文字" icon="back">
 *   <div slot="value">描述文字啊哈</div>
 * </mt-cell>
 */
export default {
  name: 'MtCell',

  props: {
    to: {
      type: [String, Object],
      default: null
    },
    icon: {
      type: String,
      default: null
    },
    title: {
      type: String,
      default: null
    },
    label: {
      type: String,
      default: null
    },
    isLink: {
      type: Boolean,
      default: false
    },
    value: {
      type: Object,
      default () {
        return {}
      }
    }
  },

  computed: {
    href () {
      if (this.to && !this.added && this.$router) {
        const resolved = this.$router.match(this.to)
        if (!resolved.matched.length) return this.to
        this.$nextTick(() => {
          /* eslint-disable vue/no-side-effects-in-computed-properties */
          this.added = true
          this.$el.addEventListener('click', this.handleClick)
          /* eslint-enable vue/no-side-effects-in-computed-properties */
        })
        return resolved.fullPath || resolved.path
      }
      return this.to
    }
  },

  methods: {
    handleClick ($event) {
      $event.preventDefault()
      this.$router.push(this.href)
    }
  }
}
</script>

<style lang="less" scoped>
  @import "../../common/style/var";

  .mint {
    &-cell {
      background-color: @color-white;
      box-sizing: border-box;
      color: inherit;
      min-height: 54px;
      display: block;
      padding: 0 16px;
      overflow: hidden;
      position: relative;
      text-decoration: none;

      &:first-child {
        .mint-cell-wrapper {
          background-origin: border-box;
        }
      }

      &:last-child {
        background-image: linear-gradient(0deg, @color-grey, @color-grey 100%, transparent 100%);
        background-size: 100% 1px;
        background-repeat: no-repeat;
        background-position: bottom;
      }

      &-wrapper {
        background-image:linear-gradient(180deg, @color-grey, @color-grey 100%, transparent 100%);
        background-size: 120% 1px;
        background-repeat: no-repeat;
        background-position: top left;
        background-origin: content-box;
        align-items: center;
        box-sizing: border-box;
        display: flex;
        font-size: 14px;
        line-height: 1;
        min-height: inherit;
        overflow: hidden;
        padding: 0;
        width: 100%;
      }

      &-mask {
        &::after {
          background-color: #000;
          content: " ";
          opacity: 0;
          position: absolute 0;
        }

        &:active::after {
          opacity: .1;
        }
      }

      &-text {
        vertical-align: middle;
      }

      &-label {
        color: #888;
        display: block;
        font-size: 12px;
        margin-top: 6px;
      }

      img {
        vertical-align: middle;
      }

      &-title {
        flex: 1;
      }

      &-value {
        color: @cell-value-color;
        display: flex;
        align-items: center;

        &.is-link {
          margin-right: 17px;
        }
      }

      &-left {
        position: absolute;
        height: 100%;
        left: 0;
        transform: translate3d(-100%, 0, 0);
      }

      &-right {
        position: absolute;
        height: 100%;
        right: 0;
        top: 0;
        transform: translate3d(100%, 0, 0);
      }

      &-allow-right::after {
        border: solid 1px #999;
        border-bottom-width: 0;
        border-left-width: 0;
        content: " ";
        position: absolute;
        top: 50%;
        right: 20px;
        width: 9px;
        height: 9px;
        transform: translateY(-50%) rotate(45deg);
      }
    }
  }
</style>
