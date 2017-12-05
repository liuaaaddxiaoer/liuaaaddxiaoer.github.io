<template>
  <div class="createGroupContainer">
    <section>
      <div>
        <h5>主题</h5>
        <input v-model="userInputTexts.theme" type="text" placeholder="请输入社群主题" ref="focusInput">
        <span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;主题创建之后不可修改</span>
      </div>
      <div>

        <h5>类型</h5>
        <input v-model="userInputTexts.type" type="text" placeholder="请输入社群主题">
      </div>
      <div>

        <h5>入社费用</h5>
        <input v-model="userInputTexts.money" type="text" placeholder="请输入社群主题">
      </div>
      <div class="maxInputTip">

        <h5>社群介绍</h5>
        <textarea v-model="userInputTexts.desc" type="text" maxlength="1000" placeholder="请介绍您的社群来欢迎社员加入吧！社员会特别关心加入权益，核心社员，规则规范，社群起始时间等">
        </textarea>
        <i>{{this.descTip}}</i>
      </div>

      <button :disabled="isDisabled" @click="createGroupClick" ref="createBtn">创建</button>
    </section>
  </div>
</template>

<script>
  export default {
    name: 'CreateGroup',
    data(){
      return {
          // 主要是为了watch所以搞了个对象
        userInputTexts: {
          theme: '',
          type:'',
          money:'',
          desc:'',
        },
        isDisabled:true,

      }
    },
    computed:{
      descTip: function () {
        return "("+this.userInputTexts.desc.length+"/1000)"
      }
    },
    mounted() {
      // 主题变为第一响应者
      this.$refs.focusInput.focus()
      // 监听是否可以点击
      this.$watch('userInputTexts',function () {
       this.isDisabled = (this.userInputTexts.theme.length&&this.userInputTexts.type.length&&this.userInputTexts.money.length&&this.userInputTexts.desc.length)? ((this.$refs.createBtn.style.color = 'white'),false):((this.$refs.createBtn.style.color = 'gray'),false)
      },{
          deep:true
      })
    },

    watch: {

    },

    methods: {
       // 返回pop
      back: function () {
        this.$router.back()
      },
      // 创建社群
      createGroupClick: function () {
        this.$ajax.post('ot/createGroup',{
          authcode:'e9a1bcb22163f6bf6697966fcf8f1172',
          name:this.userInputTexts.theme,
          price:this.userInputTexts.money,
          desc:this.userInputTexts.desc,
          tagId:1
        }).then(res=>{
            if (res.data.isOk === true) {
                //去往社群中心
            }else {
                //提示错误

            }
        })
      }
    },

  }
</script>

<style scoped lang="less">
  @lineColor: #f5f5f5;
  @normaColor: #333;
  @grayColor: #989898;
  @mainColor: #0abd15;
  .flex {
    -webkit-display: flex;
    display: flex;
  }

  .createGroupContainer {
    padding: .5rem;
    .flex;
    flex-direction: column;
    height: 100%;
    background-color: white;
    section {
      .flex;
      text-align: left;
      /*margin-top: 2.2rem;*/
      flex-direction: column;
      div {
        .flex;
        flex-direction: column;
        justify-content: center;
        /*background: red;*/
        margin-bottom: 1px;
        padding-bottom: .7rem;
        h5 {
          color: @normaColor;
          font-size: .8rem;
          font-weight: normal;
        }
        input, textarea {
          box-sizing: border-box;
          padding-left: .5rem;
          height: 2rem;
          margin-top: .4rem;
          width: 100%;
          border: 1px solid @lineColor;
        }

        textarea {
          padding-top: .5rem;
          text-indent: 1ch;
          height: 5rem;
          resize: none;
        }
        span {
          color: @grayColor;
          font-size: .6rem;
          background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAADNklEQVRYR8WXXW4aMRDHZ4g2r0lPUHKCkhMETtD0BG1PEHjAVp5KniI7D+QGJScoOUHICUpP0OQE4Tlhd6r/yl4ZAmtvaFVLCAn88ZsP/2fM9J8HNzl/PB4fLpfLEyLqiEibiPDBeGDmByKaD4fD2yZ7JgFcXV11i6I4Y+ZTt/k9vkVkxsyHDuiQmT8Q0YKIpnmeX5yfnwOqdtQCXF5etlut1tgdjEMnWZZNB4MBDnk1MH9vb68rIn3AiMj1/v7+xbb52GArgLW2Q0R3IvLYarX6w+FwFrMm/N9a+4WIRkT0RERflVLzTes3ArjF30XkRmuNjd40kDPPz88I03si6m2CeAXgLP+56+EhsTFmwswf8zw/Xs+LFQAQv7y8/BaR210sX3dX4AnJsqwX5sQKgCPtZlnWqUscHABPicg3XEGt9SAWIweBW3GttUZulKMCcBkM6z9praexDa212AyxxXUcaK2vY2uMMSNmPsuy7MgbWAE469tKqW5sI+eBxgAuxHNcTw8cAiyYua+UmiQC4JqORGQeujS21loLT50opY6rEEDpROQuz/OjFPWKHVL3//pZpQcQGyI61VrDqn8+rLXCzD2IWwXAzN3U+Lt8KRMQdYCIfqWu9fkjIhOErgSw1kJm50qpfqr5xhjo/djNv28IMEMhWwHwP6QC+Fj+LQBkZqeJFbsAGGNQmKaVB5xAJOcArN4FAEnoBc8n4Skz/8iy7F1Mgn2IfNFqGoJg3TGqYwngFOopVYYDCGkK4JIXgle2c5USWmunIrJoUgXhyjcAzJl55m9cBRDEtHRN7Da8JQd8oxMq7ko5dnogSqleDCDUARF5KIqiF5NxVFB33asuax0AqoZuqLa8OiVcIGQOtM3M+Iy29Y5YA7kviqITgm5qyUCHfjCpL4h5yiltuafX/3DNxqbUWfjZdbNJ5XkbiCu/Z9v22tqW+xin9PabDvdvCnTDdX1G7cPEGAOBgkwf4Hu5XN7EEs0djFcUCtsj4l53q6JPM9dMYjNUvwNUTWYue8bwaVYUBZ5maOeQyDh4lNJdRQFC98IjsAgZLyIdB4QpOLB8nOL5lqIjft9GACkZ33TOH4toGj/q4NRxAAAAAElFTkSuQmCC) no-repeat;
          background-size: contain;
          margin-top: .4rem;
        }
      }
      .maxInputTip {
        position: relative;
        i {
          position: absolute;
          right: .5rem;
          bottom: 1rem;
          font-size: 0.7rem;
          color: @grayColor;
        }
      }
      button {
        background-color: @mainColor;
        height: 2.2rem;
        border: none;
        border-radius: 5px;
        margin: .5rem;
        color: gray;
        font-size: .9rem;
        outline: none;
        -webkit-tap-highlight-color: transparent;
      }
    }
  }


</style>
