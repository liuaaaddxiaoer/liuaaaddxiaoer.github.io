<template>
  <section class="collectionViewCell-contentView">
    <ul>
      <li v-for="(item,index) in itemData" :key="index">
        <div class="itemTop">
          <h5>{{item.group.name}}</h5>
          <img :src="item.owner.avatar" alt="社群创建者" :onerror="KDefaultImg">
        </div>
        <div class="itemBottom">
          <h3>刘小二</h3>
        </div>
      </li>
    </ul>
  </section>
</template>

<script>
  export default {
    data() {
      return {
        KDefaultImg: 'this.src = "'+require('../assets/group_avatar_default.png')+'"'
      };
    },
    props: {
      itemData: {
        type: Array
      }
    }
  };
</script>

<style scoped lang="less">
  @mainColor: #0abd15;
  @bgColor: #f5f5f5;
  @randowFirstColor: #f5fcec;
  @randowColors: @randowFirstColor,@mainColor;
  @imgWH : 2.5rem;
  .mixin(@a) when (@a =1) {
    background-color: @randowFirstColor;
  }
  .mixin(@a) when (@a = 2) {
    background-color: @mainColor;
  }
  .flex {
    -webkit-display: flex;
    display: flex;
  }

  .collectionViewCell-contentView {
    .flex;
    background-color: @bgColor;
    padding: .5rem 1rem;
    ul {
      /*background-color: red;*/
      .flex;
      flex-wrap: wrap;
      flex-direction: row;
      li {
        .flex;
        flex-direction: column;
        background-color: white;
        flex-basis: 8rem;
        height: 9rem;
        margin-bottom: .5rem;
        .itemTop {
          .mixin(1);
          flex: 1;
          position: relative;
          h5 {
            padding-top: 1rem;
            font-size: .7rem;
          }
          img {
            width: @imgWH;
            height: @imgWH;
            position: absolute;
            left: 50%;
            margin-left: -@imgWH/2;
            bottom: 0;
            margin-bottom: -@imgWH/2;
            border-radius: 50%;
          }
        }
        .itemBottom {
          flex: 1;
          position: relative;
          h3 {
            position: absolute;
            width: 100%;
            bottom: 1rem;
            font-size: .8rem;
            font-weight: 900;
          }
        }
      }
      li:nth-child(odd) {
        margin-right: .75rem;
      }
    }
  }
</style>
