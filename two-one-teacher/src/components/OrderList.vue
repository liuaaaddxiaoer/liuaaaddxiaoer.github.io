<template>
  <div class="order-container">
    <ul>
      <li v-for="(item,index) in list" :key="index">
        <div class="profileView">
          <img :src="!isBuy?item.fromUser.avatar:item.toUser.avatar" :onerror="KDefaultImg" alt="">
          <span>{{!isBuy?item.fromUser.realname:item.toUser.realname}}</span>
          <i>{{item.status == 1 ? '已完成' : ''}}</i>
        </div>
        <div class="content-descview">
          <img src="" alt="">
          <i></i>
          <span></span>
          <b></b>
        </div>
        <div class="contact-totalMoney">
          <span></span>
          <i></i>
          <b></b>
        </div>
        <div class="message"></div>
      </li>
    </ul>
  </div>
</template>
<script>
  export default {
    name: 'OrderList',
    data(){
      return {
        list: [],
        pageNumber: 1,
        KDefaultImg: this.$store.state.KDefaultImg
      }
    },
    mounted() {
      this.title()
      this.fetchData()
    },
    computed: {
      tab: function () {
        return this.$route.path == '/buyList' ? 'buy': 'sell'
      },
      isBuy: function () {
        return this.$route.path == '/buyList' ? true : false
      }
    },
    methods: {
      title() {
        var title = this.$route.path == '/buyList' ? '我买入的' : '我卖出的'
        this.$store.commit('title', title)
      },
      fetchData(){
         this.$ajax.post('/ot/orders',{
           authcode:KTestAuthcode,
           tab: this.tab,
           pageNumber:this.pageNumber,
           pageSize: 10
         }).then( res => {
            if (res.data.isOk == true ) {
                this.list = res.data.page.list
            }
         })
      }
    }
  }
</script>
<style lang="less">
  .flex {
    -webkit-display: flex;
    display: flex;
  }
  .order-container {
    .flex;
    .profileView {
      .flex;
      padding: .5;
      img {
        width: 1.5rem;
        height: 1.5rem;
        border-radius: 50%;
      }
    }
  }
</style>
