<template>
  <div class="textarea-wrapper">
    <div class="multi-line-wrapper">
      <textarea
        @blur="handleBlur"
        @input="handleInput"
        :placeholder="placeholder"
        v-model="value">
      </textarea>
      <div class="count">{{countText}}</div>
    </div>
  <div class="warning" v-if="showWarning && warningText">{{warningText}}</div>
  </div>
</template>

<style scoped>
.multi-line-wrapper {
  border: solid 1px #eee;
}
.multi-line-wrapper textarea {
  padding: 6px 8px;
  outline: none;
  border: none;
  resize: none;
  font-size: 14px;
  width: 100%;
  height: 100px;
  display: block;
}
.multi-line-wrapper textarea::-webkit-input-placeholder {
  color: #999;
}
.count {
  text-align: right;
  padding: 5px 10px;
  font-size: 10px;
  color: #999;
}
.warning {
  text-align: left;
  padding: 5px 10px;
  color: #d00000;
  font-size: 10px;
}
</style>

<script>
export default {
  props: {
    isValid: Boolean,
    placeholder: String,
    showWarning: Boolean,
    max: {
      type: Number,
      default: 2000
    },
    min: {
      type: Number,
      default: 200
    },
    value: String
  },
  mounted () {
  },
  computed: {
    countText() {
      return this.value.length + ' / ' + this.max;
    },
    warningText() {
      if (!this.value) {
          return '请填写内容，不能为空'
      }
      else if (this.value && this.value.length < this.min) {
          return '最少' + this.min + '个字，已输入' + this.value.length + '个字';
      }
      else if (this.value.length > this.max) {
          return '最多' + this.max + '个字，已输入' + this.value.length + '个字'
      }
    }
  },
  methods: {
    handleBlur() {
      this.showWarning = true;
    },
    handleInput() {
      this.showWarning = false;
    }
  }
}
</script>
