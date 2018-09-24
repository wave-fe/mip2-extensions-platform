<template>
  <div class="uploader-wrapper">
    <div>
      <mip-xz-picuploader-item
        v-for="item in value"
        :url="url"
        v-model="item.url"
        :file="item.file"
        @del="del">
      </mip-xz-picuploader-item>
    </div>
    <mip-xz-picuploader-add v-if="value.length < max" :max="max" @fileselected="fileselected">
    </mip-xz-picuploader-add>
  </div>
</template>

<style scoped>
.uploader-wrapper {
  overflow: hidden;
  margin-right: -8px;
  margin-bottom: -8px;
}
</style>

<script>
import mipXzPicuploaderItem from '../mip-xz-picuploader-item/mip-xz-picuploader-item';
import mipXzPicuploaderAdd from '../mip-xz-picuploader-add/mip-xz-picuploader-add';
export default {
  props: {
    max: {
      type: Number,
      default: 10
    },
    value: {
      type: Array,
      default: []
    },
    url: String
  },
  components: {
    mipXzPicuploaderAdd,
    mipXzPicuploaderItem
  },
  mounted () {
  },
  methods: {
    fileselected(file) {
      this.$emit('input', [...this.value, {file: file, url: ''}]);
    },
    del(file) {
      this.$emit('input', this.value.filter(item => item.file !== file))
    }
  }
}
</script>
