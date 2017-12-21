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
          <img :src="item.interaction.imgUrls" alt="" :onerror="KDefaultImgs">
          <i>服务</i>
          <span>{{item.interaction.content}}</span>
          <b>￥{{item.price}}</b>
        </div>
        <div class="contact-totalMoney">
          <span>联系电话 :</span>
          <i>{{item.phone.length>0?item.phone:"暂无"}}</i>
          <b>合计: ￥{{item.price * item.number}}</b>
        </div>
        <div class="message">
          <span>留言 :</span>
          <i>{{item.message.length>0?item.message:"无"}}</i>
        </div>
        <div class="bottom"></div>
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
        KDefaultImg: this.$store.state.KDefaultImg,
        KDefaultImgs:''
      }
    },
    mounted() {
      this.title()
      this.fetchData()
      this.KDefaultImgs = "this.src = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAu4AAAF8CAIAAAAfOalIAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAA0xpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMDY3IDc5LjE1Nzc0NywgMjAxNS8wMy8zMC0yMzo0MDo0MiAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6N0VCQTIwN0FBQ0RDMTFFN0E0NUVGNkQ2NjVDMEZDQzciIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6NzhGQUI2NzhBQ0RCMTFFN0E0NUVGNkQ2NjVDMEZDQzciIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTUgKE1hY2ludG9zaCkiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0iYWRvYmU6ZG9jaWQ6cGhvdG9zaG9wOmNiNzQyZjUyLWY1NDUtMTE3YS1iNTcyLThkMmE3Y2RhMDVjNSIgc3RSZWY6ZG9jdW1lbnRJRD0iYWRvYmU6ZG9jaWQ6cGhvdG9zaG9wOmNiNzQyZjUyLWY1NDUtMTE3YS1iNTcyLThkMmE3Y2RhMDVjNSIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0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'"
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
<style lang="less" scoped>
  @import "../css/common";
  @lineGrayColor: #999;
  .order-container {
    .flex;
    font-size: .8rem;
    ul {
      width: 100%;
      height: 100%;
      overflow-x: hidden;
      li {
        padding: 0 .5rem;
      }
    }


    .profileView {
      .flex;
      align-items: center;
      position: relative;
      padding: .5rem 0 .5rem;
      /*background-color: blue;*/
      border-bottom: 1px solid #f4f4f4;
      img {
        width: 1.5rem;
        height: 1.5rem;
        border-radius: 50%;
        margin-left: .5rem;
      }
      span {
        margin: 0 .5rem;
        font-size: .8rem;

      }
      i {
        position: absolute;
        right: .5rem;
        top: 50%;
        transform: translateY(-50%);
        color: @lineGrayColor;
        font-size: .7rem;
      }

    }
    .content-descview {
      .flex;
      margin: .5rem;
      position: relative;
      img {
        width: 6rem;
        height: 4rem;
        /*background-color: red;*/
      }
      i {
        position: absolute;
        left: 0;
        top: 0;
        width: 2.4rem;
        height: 1.25rem;
        background-color: @linkColor;
        color: white;
        font-size: .7rem;
        line-height: 1.25rem;
      }
      span {
        margin: 0 .5rem;
        font-size: .75rem;
        max-width: 50%;
        .numberLines(2);
        line-height: 1rem;
        max-height: 2rem;
      }
      b {
        position: absolute;
        right: .5rem;
        top: 50%;
        transform: translateY(-50%);
      }
    }
    .contact-totalMoney {
      .flex;
      align-items: center;
      /*background-color: red;*/
      padding: 0 .5rem;
      font-size: .7rem;
      position: relative;
      i {
        color: @lineGrayColor;
        margin-left: .3rem;
      }
      b {
        position: absolute;
        right: .5rem;
        font-size: .8rem;
      }
    }
    .message {
      font-size: .7rem;
      .flex;
      padding: 0 .5rem;
      i {
        color: @lineGrayColor;
        margin-left: .3rem;
      }
    }
    .bottom {
      height: .5rem;
      margin-top: .7rem;
      background-color: @bgColor;
      width: 120%;
      transform: translateX(-10%);

    }
  }
</style>
