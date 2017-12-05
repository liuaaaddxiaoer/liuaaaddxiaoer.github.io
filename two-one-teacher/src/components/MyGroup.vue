<template>
  <HomeItemCell :itemData="myGroup"></HomeItemCell>
</template>

<script>
  import HomeItemCell from './HomeItemCell.vue'
  export default {
    data(){
      return {
        datas: []
      }
    },
    computed: {
        myGroup: function () {
          return this.datas["myGroup"]
        }
    },
    mounted(){
       this.$store.commit("title",'我的社群')

      this.$ajax.post('/ot/myGroup', {
        authcode: KTestAuthcode
      }).then(res => {
          if (res.data["isOk"] == true) {
              this.datas = res.data
          }
      })
    },
    components: {
      HomeItemCell
    }
  }

</script>
