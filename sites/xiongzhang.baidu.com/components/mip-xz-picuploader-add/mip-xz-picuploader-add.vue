<template>
  <div class="wrapper">
    <input
        type="file"
        ref="input"
        class="select-file-input"
        @change="selectFile">
    <div class="add-btn" @click="handleAdd">
        <p>上传最多10张照片</p>
    </div>
  </div>
</template>

<style scoped>
.wrapper {
  float: left;
  margin-right: 8px;
  margin-bottom: 8px;
}
.select-file-input {
  display: none;
}
.add-btn {
  width: 89px;
  height: 89px;
  border: solid 1px #eee;
  background: url(./add.svg) no-repeat center 24px;
  background-size: 24px 24px;
}
.add-btn p {
  color: #c7c7c7;
  font-size: 10px;
  font-weight: 100;
  margin-top: 60px;
  white-space: nowrap;
  letter-spacing: -1px;
}
</style>

<script>
export default {
  mounted () {
    console.log('This is my first custom component !')
  },
  methods: {
    selectFile(e) {
        let input = e.target;
        for (var i = 0; i < input.files.length; i++) {
            let file = input.files[i];
            // hack img size
            if (file.size > 10 * 1000 * 1000) {
                this.$emit('imgtoolarge');
                input.value = '';
                return;
            }

            if (!input.value) {
                return;
            }
            this.$emit('fileselected', file);
        }
        input.value = '';
    },
    handleAdd() {
      this.$refs.input.click();
    }
  }
}
</script>
