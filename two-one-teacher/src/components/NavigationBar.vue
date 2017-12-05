<template>
  <header class="navBar-container">
    <i class="backArrowLeftItem" @click="goBack"></i>
    <span class="title">{{title}}</span>
  </header>
</template>

<script>
  export default {
    name: 'NavigationBar',
    data(){
      return {}
    },
    props: {
      // 标题
      title: {
        type: String,
        default: '同师'
      }
    },
    methods:{
      goBack: function () {
        this.$emit('back')
      }
    }
  }
</script>

<style scoped lang="less">
  .flex {
    -webkit-display: flex;
    display: flex;
  }
  header {
    .flex;
    align-items: center;
    justify-content: center;
    height: 44px;
    position: absolute;
    z-index: 1000;
    left: 0;
    width: 100%;
    top: 0;
    background-color: white;
    border-bottom: 1px solid #eee;
    i{
      display: inline-block;
      background: url('../assets/back_slected@2x.png') no-repeat center center;
      background-size: contain;
      width:1rem;
      height: 1rem;
      /*background-color: red;*/
      position: absolute;
      left: 0;
      top: 50%;
      margin-top: -.5rem;
      margin-left:1rem;
      /*margin-left: 1rem;*/
    }
    span {
      flex: 1;
      font-size: .9rem;
    }
  }
</style>
