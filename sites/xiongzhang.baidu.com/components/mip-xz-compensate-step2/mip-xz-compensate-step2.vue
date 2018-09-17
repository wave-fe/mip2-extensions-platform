<template>
  <div class="wrapper">
    <mip-xz-picuploader
      url="/mock/opensc/comment/Image.json"
      v-model="hello"
      @input="handleUpload">
    </mip-xz-picuploader>
    <mip-xz-textarea
      placeholder="详细描述交易过程，最少100字"
      max="2000"
      min="100"
      v-model="text">
    </mip-xz-textarea>
    <mip-xz-dialog
      :show="showDialog"
      @buttonclick="handleButton"
      title="标题"
      text="共建美好和谐社会共建美好和谐社会共建美好和谐社会"
      :buttons="buttons">
    </mip-xz-dialog>
  </div>
</template>

<style scoped>
.wrapper {
  margin: 0 auto;
  text-align: center;
}
</style>

<script>
import mipXzPicuploader from '../mip-xz-picuploader/mip-xz-picuploader';
import mipXzTextarea from '../mip-xz-textarea/mip-xz-textarea';
import mipXzDialog from '../mip-xz-dialog/mip-xz-dialog';
export default {
  data() {
    return {
      showDialog: false,
      buttons: [{
        id: 'ok',
        text: '好的'
      }, {
        id: 'cancel',
        text: '取消'
      }],
      hello: [],
      text: ''
    };
  },
  components: {
    mipXzDialog,
    mipXzTextarea,
    mipXzPicuploader
  },
  mounted () {
    setTimeout(() => {
        this.showDialog = true;
    }, 3000);
    console.log('This is my first custom component !')
  },
  methods: {
    handleButton(id) {
      console.log(id, ' clicked');
    },
    handleUpload(files) {
        console.log(files);
    }
  }
}
</script>
