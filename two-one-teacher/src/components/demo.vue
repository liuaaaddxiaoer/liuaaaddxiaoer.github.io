<template>
  <div class="manager">
    <h2>酒店客房管理系统</h2>
    <div class="section">
      <div class="left">
        <div>
          <span>用户名:</span>
          <input type="text" class="user">
        </div>
        <div>
          <span>密码:</span>
          <input type="text" class="pass">
        </div>
        <div class="right"><span>登录</span></div>
      </div>

    </div>

  </div>
</template>
<script>
  export default {
    data(){
      return {}
    }
  }
</script>
<style lang="less">
  .flex{
    -webkit-display:flex;
    display: flex;
  }
  .manager {
    background-color: #eee;
    height: 100%;

    h2 {
      padding-top:1rem;
    }
    .section {
      .flex;
      flex:1;
      background-color: white;
      margin: 2rem;
      padding: 1rem;
      justify-content: center;
      align-items: center;

      .left {
        .flex;
        flex-direction: column;
        flex: 1;
        div {
          margin-bottom: 1rem;
          .flex;
          span {
            width: 4rem;
            margin-right: .5rem;
          }
          input {
            flex: 1;
            border: 1px solid gray;
            margin-right: 1rem;
          }
        }
      }
      .right {
        .flex;
        /*width:1rem;*/
        border: 1px solid gray;
        /*width: 5rem;/*/
        width: 90%;
        text-align: center;
        height: 100%;
        span{
          flex: 1;
        }
      }
    }
  }
</style>
