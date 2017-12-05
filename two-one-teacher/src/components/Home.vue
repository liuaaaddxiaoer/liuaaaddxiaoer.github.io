<template>
  <div class="home-container">
    <header class="home-navBar">
      <div class="home-input-container">
        <i></i>
        <input type="text" placeholder="搜索社群或内容">
      </div>
      <span class="home-create-group" @click="createGroup">+创建</span>
    </header>
    <section class="home-content">
      <div class="mygroup">
        <div class="mygroup-header">
          <h3>我的社群</h3>
          <h3 @click="myGroup">查看更多</h3>
        </div>
        <ul>
          <li v-for="item in myGroups" @click="goToGroupCenter">
            <div class="mygroup-li-top">
              <h3>{{item.group.name}}</h3>
              <img :src="item.owner.avatar" alt="">
            </div>
            <div class="mygroup-li-bottom">
              <h3>{{item.owner.realname}}</h3>
            </div>

          </li>

        </ul>
      </div>
      <div class="mygroup">
        <div class="mygroup-header">
          <h3>推荐社群</h3>
          <h3></h3>
        </div>
        <ul>
          <li v-for="item in recommendGroups">
            <div class="mygroup-li-top">
              <h3>{{item.group.name}}</h3>
              <img :src="item.owner.avatar" alt="">
            </div>
            <div class="mygroup-li-bottom">
              <h3>{{item.owner.realname}}</h3>
            </div>

          </li>

        </ul>
      </div>
    </section>

  </div>
</template>

<script>
  export default {
    name: 'Home',
    data() {
      return {
        myGroups: [], //我的社群
        recommendGroups: [], //推荐社群
      }
    },
    created() {
      // 请求数据
      this.$ajax.post('/ot/main', {
        authcode: 'ad253f05d3bd32cd201e8037602475e2'
      }).then(res => {
        this.myGroups = res.data.myGroups
        this.recommendGroups = res.data.recommendGroups
      })
    },
    methods: {
      goToGroupCenter: function () {
//        alert(1)
//        this.$router.push('/myGroup')
      },
      createGroup: function () {
        this.$router.push('CreateGroup')
      },
      myGroup: function () {
        this.$router.push('/myGroup')
      }
    },

  }
</script>

<style scoped lang="less">
  @mainColor: #0abd15;
  @bgColor: #f5f5f5;
  @inputColor: #a1a1a1;
  @hederHeight: 2rem;
  @normalColor: #000;
  @grayColor: #ccc;
  @normalFontSize: .8rem;
  @grayFontSize: .7rem;
  @tabbarH: 2.45rem;
  @randowFirstColor: #e8f4fa;
  .flex {
    -webkit-display: flex;
    display: flex;
  }

  .home-container {
    .flex;
    flex-direction: column;
    margin-bottom: @tabbarH;
    .home-navBar {
      .flex;
      /*background-color: red;*/
      height: 3rem;
      /*position: absolute;*/
      /*left: 0;*/
      /*top: 0;*/
      width: 100%;
      i {
        background: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyhpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMDY3IDc5LjE1Nzc0NywgMjAxNS8wMy8zMC0yMzo0MDo0MiAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTUgKE1hY2ludG9zaCkiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6QjVCNTBCMTRBQ0M3MTFFN0E0NUVGNkQ2NjVDMEZDQzciIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6QjVCNTBCMTVBQ0M3MTFFN0E0NUVGNkQ2NjVDMEZDQzciPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDpCNUI1MEIxMkFDQzcxMUU3QTQ1RUY2RDY2NUMwRkNDNyIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDpCNUI1MEIxM0FDQzcxMUU3QTQ1RUY2RDY2NUMwRkNDNyIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/PmbKoTsAAAKISURBVHjavJfPSxVRFMfnpYWaoUZk0aJ8WUEQhQWCirSoINqJGyGDwEUt6g9oJy1sEVGb16aV0KpNkJkQLUIDIdAnbQKhMrMfUv7ql0U1fS6cgcN17psZZ/TAB85c7pzznbkz556b833fi7A8dEIbNEA9bIM5mIIxeAwP4KeX1IwAB03wEP758ewL9EJ1iZgrCBusgJvw10pgridhGIZgHD6HCJmBU6sVsBVGrIDPoRtqQwLk4Ahch6/qnj9wKamAKhhVQebgrCSJ8zQ74Z4l/mISAf3qxjewL8laKq6oOL+hJY6A0+qmBTi0yuQBBRXvJWwsJcC84qK6oTNlckOZtZw9pQS0qYnDGSQP0HGLrnkbKAUdqiwUvOxsBMbFPyxFbIUZAa1BTYJBL1sbUn6rS8Be8WdhMWMBk8rf7xJQK/47L3ubVn6NS8Cy+BVrIKBS+csuAe/F3y3XWdoe5c+4BEyIXw1NGQtoV/6ES4D+UrszTF4HZ8RfglFXP1CjdrLvsCujQtSnCtHtqL3gmpo8KKU0TfJm+KU2pHyUgC3wVokopEjeCLMq1tW423GLUu3L9rw5YfJ2+GDtLZuSdEQd8soCm5KdrDwicV4E6zbOtGx1UaJzIV3xCbgL29XYJxiAovzPP6Q7Nv/5cfndytR80yGfk3l9cMNVB1zK6kOeKI59hPPSY1TCgIy/goa4XbHmANySTtdlpgF9Bhekr/Tk23lizZuWeJFL4LJGOAg71B7yWvb8pZAi9AiarXGzlCfhRZyDSVrMr/3UcYA5FncJ0lIlhxjbFqRlW3MBntSB+yEivsHRJN9AGiuHfuiyxsfW4w3oVv2O9RYW11NAcAa5LCeveej6L8AAwSxWmJYKHHgAAAAASUVORK5CYII=") no-repeat;
        background-size: .8rem .8rem;
        flex-basis: .8rem;
        height: .8rem;
        margin-left: .5rem;
      }
      input {
        margin-left: .5rem;
        /*background-color: blue;*/
        align-self: stretch;
        font-size: .7rem;
        color: @inputColor;
        flex: 1;
      }

      .home-input-container {
        .flex;
        flex: 1;
        border-radius: 5px;
        background-color: @bgColor;
        margin: .5rem 1rem .5rem;
        align-items: center;
      }
      .home-create-group {
        flex-basis: 3rem;
        margin-right: 10px;
        /*background-color: yellow;*/
        align-self: center;
        color: @mainColor;
        font-size: 0.8rem;
        font-weight: 700;
      }
    }

    .home-content {
      flex: 1;
      flex-direction: column;
      background-color: @bgColor;
      .mygroup {
        .flex;
        margin: 0rem 1rem;
        flex-direction: column;
        /*background-color: yellow;*/
        .mygroup-header {
          .flex;
          justify-content: space-between;
          align-items: center;
          flex-basis: @hederHeight;
          /*background-color: blue;*/
          h3:nth-child(2) {
            color: @grayColor;
            font-size: @grayFontSize;
          }
          h3:nth-child(1) {
            color: @normalColor;
            font-size: @normalFontSize;
          }
        }
        ul {
          .flex;
          flex: 1;
          flex-wrap: wrap;
          li {
            .flex;
            flex-direction: column;
            height: 9rem;
            background-color: deeppink;
            /*margin-right: 10px;*/
            /*flex-basis: 8.12rem;*/
            width: 48.5%;
            div {
              font-size: .7rem;
            }
            div:nth-child(1) {
              position: relative;
              background-color: @randowFirstColor;
              flex: 1.2;

              h3 {
                /*background-color: yellow;*/
                position: absolute;
                top: 20%;
                left: 50%;
                width: 100%;
                margin-left: -50%;
                white-space: nowrap;
                overflow: hidden;
                text-overflow: ellipsis;
              }
              img {
                /*background-color: yellow;*/
                height: 2.5rem;
                width: 2.5rem;
                position: absolute;
                left: 0;
                top: 0;
                bottom: 0;
                right: 0;
                margin: 3.5rem auto;
                border-radius: 50%;
                z-index: 10;
              }
            }

            div:nth-child(2) {
              background-color: white;
              flex: 1;
              position: relative;
              h3 {
                position: absolute;
                left: 50%;
                width: 100%;
                margin-left: -50%;
                top: 50%;

              }
            }
          }
          li:nth-child(even) {
            margin-left: .5rem;
            margin-bottom: .5rem;
          }
        }
      }
    }
  }

</style>
