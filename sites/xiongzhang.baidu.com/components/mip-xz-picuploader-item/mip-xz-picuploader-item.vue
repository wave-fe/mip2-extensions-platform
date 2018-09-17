<template>
  <div class="wrapper">
    <div class="preview" :style="{backgroundImage:preview}">
        <div class="remove" @click="remove"></div>
    </div>
  </div>
</template>

<style scoped>
.wrapper {
  float: left;
  margin-right: 8px;
  margin-bottom: 8px;
}
.preview {
  width: 89px;
  height: 89px;
  border: solid 1px #ccc;
  position: relative;
  background-size: cover;
  background-position: center;
}
.remove {
  position: absolute;
  width: 16px;
  height: 16px;
  background: url(./close.svg) no-repeat center;
  background-size: 16px;
  background-color: #000;
  right: 0;
  top: 0;
}
</style>

<script>
import {upload} from './uploader';
export default {
  data() {
    return {
      preview: ''
    };
  },
  props: {
    url: String,
    value: String,
    file: Object
  },
  mounted () {
        upload(this.file, {
            method: 'POST',
            url: this.url,
            ratio: 0.1,
            onparse: (err, info) => {
                if (!err) {
                    this.preview = 'url(' + info.data + ')';
                }
            },
            callback: (err, info) => {
                if (err) {
                    // window.alert(err);
                    this.remove();
                    return;
                }
                this.$emit('input', info.image_url);
            }
        });

  },
  methods: {
    remove() {
      this.$emit('del', this.file);
    }
  }
}
</script>
