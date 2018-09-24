<template>
  <div class="dialog-wrapper" v-if="show">
    <div class="dialog-body">
      <div class="dialog-title">
        {{title}}
      </div>
      <div class="dialog-text">
        {{text}}
      </div>
      <div class="dialog-operation">
        <div class="dialog-button" v-for="button in buttons" @click="handleClick(button.id)">
            {{button.text}}
        </div>
      </div>
    </div>
  </div>
</template>

<style>
.dialog-wrapper {
  position: fixed;
  z-index: 9999;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.65);
}
.dialog-body {
  max-width: 100%;
  min-width: 331px;
  background-color: #fff;
  border-radius: 4px;
  transform: translate(-50%, -50%);
  position: absolute;
  top: 50%;
  left: 50%;
}
.dialog-title {
  font-size: 24px;
  padding: 28px 37px 24px 37px;
  color: #000;
}
.dialog-text {
  font-size: 16px;
  padding: 0 37px 30px 37px;
  color: #999;
}
.dialog-operation {
  border-top: solid 1px #e0e0e0;
  display: flex;
}
.dialog-button {
  flex: 1;
  font-size: 18px;
  padding: 10px 37px 13px 37px;
  color: #000;
  border-right: solid 1px #e0e0e0;
}
.dialog-button:last-child {
  border-right: none;
}
</style>

<script>
  export default {

    data() {
      return {
      };
    },

    props: {
      show: {
        type: Boolean,
        default: false
      },
      title: String,
      text: String,
      buttons: {
        type: Array,
        default: []
      }
    },

    computed: {
    },

    methods: {
      handleClick(id) {
        this.$emit('buttonclick', id);
        this.show = false;
      }
    }
  };
</script>
