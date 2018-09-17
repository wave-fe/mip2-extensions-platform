<template>
  <div class="multi-line-wrapper">
    <textarea
      :placeholder="placeholder"
      v-model="value">
    </textarea>
    <div class="warning">{{warningText}}</div>
  </div>
</template>

<style scoped>
.multi-line-wrapper {
  border: solid 1px #eee;
}
.multi-line-wrapper textarea {
  padding: 6px 8px;
  outline: none;
  resize: none;
  font-size: 14px;
  width: 100%;
  height: 100px;
  display: block;
}
.multi-line-wrapper textarea::-webkit-input-placeholder {
  color: #999;
}
.warning {
  text-align: right;
  padding: 5px 10px;
  font-size: 10px;
  color: #999;
}
</style>

<script>
export default {
  props: {
    isValid: Boolean,
    placeholder: String,
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
    warningText() {
      let validText = this.getValidText();
      if (validText) {
        return validText;
      }
      else {
        return this.value.length + ' / ' + this.max;
      }
    }
  },
  methods: {
    getValidText() {
      if (this.value && this.value.length < this.min) {
          return '最少' + this.min + '个字，已输入' + this.value.length + '个字';
      }
      else if (this.value.length > this.max) {
          return '最多' + this.max + '个字，已输入' + this.value.length + '个字'
      }
    }
  }
}
</script>
