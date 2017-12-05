<template>
  <div class="me-container">
    <header>
      <div class="me-userInfo">
        <img :src="user.avatar" alt=""
             class="me-avatar" :onerror="defaultAvatarImg">
        <div class="me-realname-edit">
          <h3 class="me-realname">{{user.realname}}</h3>
          <span class="me-edit">查看或编辑个人资料</span>
        </div>
        <i class="me-arrow"/>
      </div>
      <div class="me-publishBalanceLike">
        <ul>
          <li><h3>{{user.totalPost}}</h3><span>发布</span></li>
          <li><h3>{{user.balance}}</h3><span>余额</span></li>
          <li><h3>{{user.totalMark}}</h3><span>收藏</span></li>
        </ul>
      </div>
    </header>
    <section>
      <div class="me-buyitem" @click="goToBuyList">
        <i class="me-buyitem-icon"></i>
        <span>我买入的</span>
      </div>
      <div class="me-sellitem" @click="goToSellList">
        <i class="me-sellitem-icon"></i>
        <span>我卖出的</span>
      </div>
    </section>
  </div>
</template>

<script>
  export default{
    name: 'Me',
    data(){
      return {
        user:{},
        defaultAvatarImg: 'this.src="'+require('../assets/1.png')+'"'
      }
    },

    created(){
        this.$ajax.post('ot/myInfo',{
          authcode: 'ad253f05d3bd32cd201e8037602475e2'
        }).then(res=>{
          if (res.data.isOk === true) {
            this.user = res.data.user
          }
        })
    },
    methods: {
      goToBuyList() {
          this.$router.push('./buyList')
      },
      goToSellList() {
          this.$router.push('./sellList')
      }
    }
  }
</script>

<style scoped lang="less">
  @grayColor: #989898;
  @lineColor: #f5f5f5;
  .flex {
    -webkit-display: flex;
    display: flex;
  }

  .me-container {
    .flex;
    height: 100%;
    background:@lineColor;
    flex-direction: column;
    header {
      .flex;
      background-color: white;
      position: relative;
      flex-direction: column;
      .me-userInfo {
        .flex;
        align-items: center;
        margin: 1rem;
        /*background-color: red;*/
        .me-avatar {
          width: 3rem;
          height: 3rem;
          /*background-color: red;*/
          border-radius: 50%;
          margin-right: .5rem;
        }
        .me-realname-edit {
          flex: 1;
          text-align: left;
          .me-realname {
            max-width: 12rem;
            overflow: hidden;
            text-overflow: ellipsis;
            display: -webkit-box;
            -webkit-box-orient: vertical;
            -webkit-line-clamp: 2;
            font-size: .9rem;
          }
          .me-edit {
            color: @grayColor;
            font-size: .65rem;
          }
        }
        .me-arrow {
          width: 2rem;
          height: 1rem;
          position: absolute;
          right: .5rem;
          background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABMAAAAjCAYAAAB2KjFhAAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAABmJLR0QAAAAAAAD5Q7t/AAAACXBIWXMAAAsSAAALEgHS3X78AAACHElEQVRIx6XWy27UMBSA4X+S6QUVWsqlmJJ2qCrEDi+DxAP0DQAVKE8HAgQIwZYXMLuD2g4VLXSQsrBYsYTSGRZxGBMmTZxaipScOJ9O4vjYnVTrq8B9YBt4b0RGtGwRcA9YAO4AG6nWndNgB971bWCjLRYnSu0Di8AVF0sSpWYyaw+CsczaUaLUHnARWHLxlUSp6VAwBnDgJ+DSacC4OPHAy+4owKnM2i9BWAlc8sDVRKluEzAuBzxQudcuwDiz9msQ5oF9YNkNDEAvUSo6CYyrbpTAC03ASsyBw0SpXeBaCexk1h4GYR7YBxLynxvgeqIUZbAWK2W4CpyvAhthHrgD9ErgKLN2EISVMuyRVxqAtUSpYWbtoFW5SbWeAR4CK174Q1BmXobHblDWgXMurKI2mGuzwJx3/b0Vlmq9ADwG5l3oJ/AuGEu1nnfQogc9MSJZEJZqfRbYYjwbfgFPjcg3yNeAptCcy6ioJEcOGhR9GmEO2mJc4wro0O9Xi6VanwEeMV5wjoBnRuS/yhHVQLMOUi70G3huRCauC1EDaNmFjh20X/VMVAFNA5vkdayAXhiRzye9STQBmgIekJebAnppRPbqvm80AdokrwoAQ+CVEenXQf9gqdZd8t3QWgnabQL9xVKtY/Ld0LoHvTYiO00hgCjVOgLuAjc86I0R2Q6BisxuATc96K0R+RgKAXQBSz5hf5DvHGtHrar9ATS44aR1o4hFAAAAAElFTkSuQmCC) no-repeat 50%;
          /*background: red;*/
          background-size: contain;
        }

      }
      .me-publishBalanceLike {
        border-top: 1px solid @lineColor;
        ul{
          .flex;
          li{
            flex: 1;
            padding: .6rem;
            h3 {
              text-align: center;
              font-size: .9rem;
              /*background-color: red;*/
            }
            span {
              font-size: .7rem;
              color: @grayColor;
              /*background-color: blue;*/
            }
          }
        }
      }
    }
    section {
      .flex;
      /*background-color: red;*/
      font-size: .8rem;
      margin-top: .5rem;
      flex-direction: column;
      .me-buyitem {
        .flex;
        padding: 0.85rem;
        align-items: center;
        background-color: white;
        .me-buyitem-icon {
          width: 1rem;
          height: 1rem;
          margin-right: .5rem;
          background: url(data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBzdGFuZGFsb25lPSJubyI/PjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+PHN2ZyB0PSIxNTA5NzEzNTI5ODgxIiBjbGFzcz0iaWNvbiIgc3R5bGU9IiIgdmlld0JveD0iMCAwIDEwNDcgMTAyNCIgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHAtaWQ9IjMzOTAiIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB3aWR0aD0iMzIuNzE4NzUiIGhlaWdodD0iMzIiPjxkZWZzPjxzdHlsZSB0eXBlPSJ0ZXh0L2NzcyI+PC9zdHlsZT48L2RlZnM+PHBhdGggZD0iTTcwNS4xODczNzkgNTU0Ljc1MmMtMTMuMzEyLTEzLjMxMi0zNC44MTYtMTMuMzEyLTQ4LjEyOCAwbC05OS40NTYgOTkuNDU2VjMzMy4xODRjMC0xOC44MTYtMTUuMjMyLTM0LjA0OC0zNC4wNDgtMzQuMDQ4LTE4LjgxNiAwLTM0LjA0OCAxNS4yMzItMzQuMDQ4IDM0LjA0OHYzMjEuMTUybC05OS40NTYtOTkuNDU2Yy0xMy4zMTItMTMuMzEyLTM0LjgxNi0xMy4zMTItNDguMTI4IDAtMTMuMzEyIDEzLjMxMi0xMy4zMTIgMzQuODE2IDAgNDguMTI4bDE1Ny41NjggMTU3LjU2OGMwLjM4NCAwLjM4NCAwLjc2OCAwLjc2OCAxLjI4IDEuMTUyIDAuMjU2IDAuMTI4IDAuMzg0IDAuMzg0IDAuNjQgMC41MTIgMC4yNTYgMC4xMjggMC4zODQgMC4zODQgMC42NCAwLjUxMiAwLjI1NiAwLjI1NiAwLjUxMiAwLjM4NCAwLjc2OCAwLjY0IDAuMTI4IDAuMTI4IDAuMzg0IDAuMjU2IDAuNTEyIDAuMzg0IDAuMjU2IDAuMjU2IDAuNjQgMC4zODQgMC44OTYgMC42NCAwLjEyOCAwLjEyOCAwLjI1NiAwLjI1NiAwLjUxMiAwLjM4NCAwLjEyOCAwIDAuMTI4IDAuMTI4IDAuMjU2IDAuMTI4IDAuMjU2IDAuMTI4IDAuNTEyIDAuMjU2IDAuNzY4IDAuNTEyIDAuMTI4IDAuMTI4IDAuMjU2IDAuMjU2IDAuNTEyIDAuMjU2IDAuMjU2IDAuMTI4IDAuNjQgMC4zODQgMC44OTYgMC41MTIgMC4xMjggMC4xMjggMC4zODQgMC4yNTYgMC41MTIgMC4yNTYgMC4yNTYgMC4xMjggMC42NCAwLjI1NiAwLjg5NiAwLjUxMiAwLjI1NiAwLjEyOCAwLjM4NCAwLjI1NiAwLjY0IDAuMjU2bDAuNzY4IDAuMzg0YzAuMjU2IDAuMTI4IDAuNTEyIDAuMjU2IDAuNzY4IDAuMjU2IDAuMTI4IDAgMC4xMjggMC4xMjggMC4yNTYgMC4xMjggMC4xMjggMC4xMjggMC4zODQgMC4xMjggMC41MTIgMC4yNTYgMC4yNTYgMC4xMjggMC41MTIgMC4yNTYgMC44OTYgMC4yNTYgMC4yNTYgMC4xMjggMC4zODQgMC4xMjggMC42NCAwLjI1NnMwLjY0IDAuMjU2IDAuODk2IDAuMjU2YzAuMTI4IDAgMC4zODQgMC4xMjggMC42NCAwLjEyOCAwLjM4NCAwLjEyOCAwLjY0IDAuMjU2IDEuMDI0IDAuMjU2IDAuMTI4IDAgMC4zODQgMC4xMjggMC41MTIgMC4xMjggMC4zODQgMC4xMjggMC43NjggMC4xMjggMS4wMjQgMC4yNTZoMC4xMjhjMC4xMjggMCAwLjI1NiAwIDAuNTEyIDAuMTI4IDAuMzg0IDAgMC43NjggMC4xMjggMS4wMjQgMC4xMjggMC4yNTYgMCAwLjM4NCAwIDAuNjQgMC4xMjggMC4zODQgMCAwLjY0IDAuMTI4IDEuMDI0IDAuMTI4SDUyNi4yNDMzNzljMC4yNTYgMCAwLjUxMiAwIDAuODk2LTAuMTI4IDAuMzg0IDAgMC42NC0wLjEyOCAxLjAyNC0wLjEyOCAwLjI1NiAwIDAuMzg0IDAgMC42NC0wLjEyOCAwLjM4NCAwIDAuNzY4LTAuMTI4IDEuMDI0LTAuMTI4IDAuMTI4IDAgMC4zODQgMCAwLjUxMi0wLjEyOCAwLjM4NC0wLjEyOCAwLjc2OC0wLjEyOCAxLjAyNC0wLjI1NiAwLjEyOCAwIDAuMjU2IDAgMC4zODQtMC4xMjhoMC4xMjhjMC4zODQtMC4xMjggMC42NC0wLjEyOCAxLjAyNC0wLjI1NiAwLjI1NiAwIDAuMzg0LTAuMTI4IDAuNjQtMC4xMjggMC4zODQtMC4xMjggMC42NC0wLjI1NiAwLjg5Ni0wLjI1NiAwLjI1Ni0wLjEyOCAwLjM4NC0wLjEyOCAwLjY0LTAuMjU2czAuNTEyLTAuMjU2IDAuODk2LTAuMjU2YzAuMjU2LTAuMTI4IDAuNTEyLTAuMTI4IDAuNzY4LTAuMjU2IDAuMjU2LTAuMTI4IDAuNTEyLTAuMjU2IDAuNzY4LTAuMjU2bDAuNzY4LTAuMzg0YzAuMjU2LTAuMTI4IDAuMzg0LTAuMjU2IDAuNjQtMC4yNTYgMC4yNTYtMC4xMjggMC42NC0wLjI1NiAwLjg5Ni0wLjUxMiAwLjEyOC0wLjEyOCAwLjM4NC0wLjI1NiAwLjUxMi0wLjI1NiAwLjI1Ni0wLjEyOCAwLjY0LTAuMzg0IDAuODk2LTAuNTEyIDAuMTI4LTAuMTI4IDAuMjU2LTAuMjU2IDAuNTEyLTAuMjU2IDAuMjU2LTAuMjU2IDAuNjQtMC4zODQgMC44OTYtMC42NCAwLjEyOC0wLjEyOCAwLjI1Ni0wLjI1NiAwLjUxMi0wLjM4NCAwLjI1Ni0wLjI1NiAwLjY0LTAuMzg0IDAuODk2LTAuNjQgMC4xMjgtMC4xMjggMC4zODQtMC4yNTYgMC41MTItMC4zODQgMC4yNTYtMC4yNTYgMC41MTItMC4zODQgMC43NjgtMC42NCAwLjI1Ni0wLjEyOCAwLjM4NC0wLjM4NCAwLjY0LTAuNTEyIDAuMjU2LTAuMTI4IDAuMzg0LTAuMzg0IDAuNjQtMC41MTIgMC4zODQtMC4zODQgMC43NjgtMC43NjggMS4yOC0xLjE1Mkw3MDUuMTg3Mzc5IDYwMi44OGMxMy4zMTItMTMuMzEyIDEzLjMxMi0zNC44MTYgMC00OC4xMjh6IiBwLWlkPSIzMzkxIiBmaWxsPSIjMTYxYzE5Ij48L3BhdGg+PHBhdGggZD0iTTEwNDcuMDc1Mzc5IDUzMy41MDRDMTA0NC4wMDMzNzkgMjMyLjk2IDgyNC4wOTkzNzkgMjQuNTc2IDUyMy4wNDMzNzkgMTAuNDk2IDIzOS4zOTUzNzkgMTEuMDA4LTcuMjYwNjIxIDI1Mi4yODggMC4xNjMzNzkgNTM2LjA2NGM1LjYzMiAyMTIuNzM2IDExNC41NiAzODcuODQgMjg5LjQwOCA0NzAuOTEyIDE3LjkyIDguNTc2IDM5LjI5NiAwLjEyOCA0Ni44NDgtMTguMzA0IDYuNzg0LTE2LjY0LTAuMzg0LTM1LjQ1Ni0xNi4yNTYtNDMuNzc2LTE0NS45Mi03NS43NzYtMjUzLjgyNC0yMzYuMDMyLTI1My4wNTYtNDEwLjg4IDAuNTEyLTI0My45NjggMjExLjk2OC00NTQuNCA0NTUuNDI0LTQ1NS40MjQgMjQ1LjUwNC0xLjE1MiA0NTkuMTM2IDIxNS42OCA0NTkuMTM2IDQ1OC40OTYgMCAxNzEuMjY0LTEwNy45MDQgMzM0Ljk3Ni0yNTYuNTEyIDQxMC40OTYtMTYuMjU2IDguMzItMjMuNDI0IDI3LjY0OC0xNi4yNTYgNDQuNDE2bDAuMTI4IDAuMzg0YzcuNjggMTcuOTIgMjguNjcyIDI1Ljk4NCA0Ni4zMzYgMTcuNzkyQzkzMS44NzUzNzkgOTI4LjM4NCAxMDQ5LjM3OTM3OSA3NTAuNDY0IDEwNDcuMDc1Mzc5IDUzMy41MDR6IiBwLWlkPSIzMzkyIiBmaWxsPSIjMTYxYzE5Ij48L3BhdGg+PC9zdmc+) no-repeat;
          background-size: 100% 100%;
        }
      }
      .me-sellitem {
        .flex;
        border-top: 1px solid @lineColor;
        padding: .85rem;
        align-items: center;
        background-color: white;
        .me-sellitem-icon {
          width: 1rem;
          height: 1rem;
          margin-right: .5rem;
          background: url(data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBzdGFuZGFsb25lPSJubyI/PjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+PHN2ZyB0PSIxNTA5NzEzNTI5ODgxIiBjbGFzcz0iaWNvbiIgc3R5bGU9IiIgdmlld0JveD0iMCAwIDEwNDcgMTAyNCIgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHAtaWQ9IjMzOTAiIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB3aWR0aD0iMzIuNzE4NzUiIGhlaWdodD0iMzIiPjxkZWZzPjxzdHlsZSB0eXBlPSJ0ZXh0L2NzcyI+PC9zdHlsZT48L2RlZnM+PHBhdGggZD0iTTcwNS4xODczNzkgNTU0Ljc1MmMtMTMuMzEyLTEzLjMxMi0zNC44MTYtMTMuMzEyLTQ4LjEyOCAwbC05OS40NTYgOTkuNDU2VjMzMy4xODRjMC0xOC44MTYtMTUuMjMyLTM0LjA0OC0zNC4wNDgtMzQuMDQ4LTE4LjgxNiAwLTM0LjA0OCAxNS4yMzItMzQuMDQ4IDM0LjA0OHYzMjEuMTUybC05OS40NTYtOTkuNDU2Yy0xMy4zMTItMTMuMzEyLTM0LjgxNi0xMy4zMTItNDguMTI4IDAtMTMuMzEyIDEzLjMxMi0xMy4zMTIgMzQuODE2IDAgNDguMTI4bDE1Ny41NjggMTU3LjU2OGMwLjM4NCAwLjM4NCAwLjc2OCAwLjc2OCAxLjI4IDEuMTUyIDAuMjU2IDAuMTI4IDAuMzg0IDAuMzg0IDAuNjQgMC41MTIgMC4yNTYgMC4xMjggMC4zODQgMC4zODQgMC42NCAwLjUxMiAwLjI1NiAwLjI1NiAwLjUxMiAwLjM4NCAwLjc2OCAwLjY0IDAuMTI4IDAuMTI4IDAuMzg0IDAuMjU2IDAuNTEyIDAuMzg0IDAuMjU2IDAuMjU2IDAuNjQgMC4zODQgMC44OTYgMC42NCAwLjEyOCAwLjEyOCAwLjI1NiAwLjI1NiAwLjUxMiAwLjM4NCAwLjEyOCAwIDAuMTI4IDAuMTI4IDAuMjU2IDAuMTI4IDAuMjU2IDAuMTI4IDAuNTEyIDAuMjU2IDAuNzY4IDAuNTEyIDAuMTI4IDAuMTI4IDAuMjU2IDAuMjU2IDAuNTEyIDAuMjU2IDAuMjU2IDAuMTI4IDAuNjQgMC4zODQgMC44OTYgMC41MTIgMC4xMjggMC4xMjggMC4zODQgMC4yNTYgMC41MTIgMC4yNTYgMC4yNTYgMC4xMjggMC42NCAwLjI1NiAwLjg5NiAwLjUxMiAwLjI1NiAwLjEyOCAwLjM4NCAwLjI1NiAwLjY0IDAuMjU2bDAuNzY4IDAuMzg0YzAuMjU2IDAuMTI4IDAuNTEyIDAuMjU2IDAuNzY4IDAuMjU2IDAuMTI4IDAgMC4xMjggMC4xMjggMC4yNTYgMC4xMjggMC4xMjggMC4xMjggMC4zODQgMC4xMjggMC41MTIgMC4yNTYgMC4yNTYgMC4xMjggMC41MTIgMC4yNTYgMC44OTYgMC4yNTYgMC4yNTYgMC4xMjggMC4zODQgMC4xMjggMC42NCAwLjI1NnMwLjY0IDAuMjU2IDAuODk2IDAuMjU2YzAuMTI4IDAgMC4zODQgMC4xMjggMC42NCAwLjEyOCAwLjM4NCAwLjEyOCAwLjY0IDAuMjU2IDEuMDI0IDAuMjU2IDAuMTI4IDAgMC4zODQgMC4xMjggMC41MTIgMC4xMjggMC4zODQgMC4xMjggMC43NjggMC4xMjggMS4wMjQgMC4yNTZoMC4xMjhjMC4xMjggMCAwLjI1NiAwIDAuNTEyIDAuMTI4IDAuMzg0IDAgMC43NjggMC4xMjggMS4wMjQgMC4xMjggMC4yNTYgMCAwLjM4NCAwIDAuNjQgMC4xMjggMC4zODQgMCAwLjY0IDAuMTI4IDEuMDI0IDAuMTI4SDUyNi4yNDMzNzljMC4yNTYgMCAwLjUxMiAwIDAuODk2LTAuMTI4IDAuMzg0IDAgMC42NC0wLjEyOCAxLjAyNC0wLjEyOCAwLjI1NiAwIDAuMzg0IDAgMC42NC0wLjEyOCAwLjM4NCAwIDAuNzY4LTAuMTI4IDEuMDI0LTAuMTI4IDAuMTI4IDAgMC4zODQgMCAwLjUxMi0wLjEyOCAwLjM4NC0wLjEyOCAwLjc2OC0wLjEyOCAxLjAyNC0wLjI1NiAwLjEyOCAwIDAuMjU2IDAgMC4zODQtMC4xMjhoMC4xMjhjMC4zODQtMC4xMjggMC42NC0wLjEyOCAxLjAyNC0wLjI1NiAwLjI1NiAwIDAuMzg0LTAuMTI4IDAuNjQtMC4xMjggMC4zODQtMC4xMjggMC42NC0wLjI1NiAwLjg5Ni0wLjI1NiAwLjI1Ni0wLjEyOCAwLjM4NC0wLjEyOCAwLjY0LTAuMjU2czAuNTEyLTAuMjU2IDAuODk2LTAuMjU2YzAuMjU2LTAuMTI4IDAuNTEyLTAuMTI4IDAuNzY4LTAuMjU2IDAuMjU2LTAuMTI4IDAuNTEyLTAuMjU2IDAuNzY4LTAuMjU2bDAuNzY4LTAuMzg0YzAuMjU2LTAuMTI4IDAuMzg0LTAuMjU2IDAuNjQtMC4yNTYgMC4yNTYtMC4xMjggMC42NC0wLjI1NiAwLjg5Ni0wLjUxMiAwLjEyOC0wLjEyOCAwLjM4NC0wLjI1NiAwLjUxMi0wLjI1NiAwLjI1Ni0wLjEyOCAwLjY0LTAuMzg0IDAuODk2LTAuNTEyIDAuMTI4LTAuMTI4IDAuMjU2LTAuMjU2IDAuNTEyLTAuMjU2IDAuMjU2LTAuMjU2IDAuNjQtMC4zODQgMC44OTYtMC42NCAwLjEyOC0wLjEyOCAwLjI1Ni0wLjI1NiAwLjUxMi0wLjM4NCAwLjI1Ni0wLjI1NiAwLjY0LTAuMzg0IDAuODk2LTAuNjQgMC4xMjgtMC4xMjggMC4zODQtMC4yNTYgMC41MTItMC4zODQgMC4yNTYtMC4yNTYgMC41MTItMC4zODQgMC43NjgtMC42NCAwLjI1Ni0wLjEyOCAwLjM4NC0wLjM4NCAwLjY0LTAuNTEyIDAuMjU2LTAuMTI4IDAuMzg0LTAuMzg0IDAuNjQtMC41MTIgMC4zODQtMC4zODQgMC43NjgtMC43NjggMS4yOC0xLjE1Mkw3MDUuMTg3Mzc5IDYwMi44OGMxMy4zMTItMTMuMzEyIDEzLjMxMi0zNC44MTYgMC00OC4xMjh6IiBwLWlkPSIzMzkxIiBmaWxsPSIjMTYxYzE5Ij48L3BhdGg+PHBhdGggZD0iTTEwNDcuMDc1Mzc5IDUzMy41MDRDMTA0NC4wMDMzNzkgMjMyLjk2IDgyNC4wOTkzNzkgMjQuNTc2IDUyMy4wNDMzNzkgMTAuNDk2IDIzOS4zOTUzNzkgMTEuMDA4LTcuMjYwNjIxIDI1Mi4yODggMC4xNjMzNzkgNTM2LjA2NGM1LjYzMiAyMTIuNzM2IDExNC41NiAzODcuODQgMjg5LjQwOCA0NzAuOTEyIDE3LjkyIDguNTc2IDM5LjI5NiAwLjEyOCA0Ni44NDgtMTguMzA0IDYuNzg0LTE2LjY0LTAuMzg0LTM1LjQ1Ni0xNi4yNTYtNDMuNzc2LTE0NS45Mi03NS43NzYtMjUzLjgyNC0yMzYuMDMyLTI1My4wNTYtNDEwLjg4IDAuNTEyLTI0My45NjggMjExLjk2OC00NTQuNCA0NTUuNDI0LTQ1NS40MjQgMjQ1LjUwNC0xLjE1MiA0NTkuMTM2IDIxNS42OCA0NTkuMTM2IDQ1OC40OTYgMCAxNzEuMjY0LTEwNy45MDQgMzM0Ljk3Ni0yNTYuNTEyIDQxMC40OTYtMTYuMjU2IDguMzItMjMuNDI0IDI3LjY0OC0xNi4yNTYgNDQuNDE2bDAuMTI4IDAuMzg0YzcuNjggMTcuOTIgMjguNjcyIDI1Ljk4NCA0Ni4zMzYgMTcuNzkyQzkzMS44NzUzNzkgOTI4LjM4NCAxMDQ5LjM3OTM3OSA3NTAuNDY0IDEwNDcuMDc1Mzc5IDUzMy41MDR6IiBwLWlkPSIzMzkyIiBmaWxsPSIjMTYxYzE5Ij48L3BhdGg+PC9zdmc+) no-repeat;
          background-size: 100% 100%;
        }
      }

    }
  }

</style>
