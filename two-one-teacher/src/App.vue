<template>
  <div id="app">
    <div v-show="navigationBarShow" class="header">
      <NavigationBar :title="title" @back="back"></NavigationBar>
    </div>
    <transition mode="out-in">
      <router-view/>
    </transition>
    <div v-show="push==''" class="tabbar">
      <Tabbar @tabBarItemClick="tabBaritemclick"></Tabbar>
    </div>
  </div>
</template>

<script>
  import Tabbar from './components/TabBar.vue'
  import NavigationBar from './components/NavigationBar.vue'
  export default {
    name: 'app',
    data(){
      return {
        push: '',
        pop: '',
//        navigationBarShow: true, // 是否显示导航栏
        title: '首页'
      }
    },
    computed: {
      navigationBarShow: function () {
        return !(this.$route.fullPath === '/home'
        || this.$route.fullPath === '/interaction'
        || this.$route.fullPath === '/me')
      }
    },
    watch: {
      '$route': function (to, from) {
        this.push = (this.$route.fullPath === '/home'
        || this.$route.fullPath === '/interaction'
        || this.$route.fullPath === '/me') ? '' : 'animated fadeOutLeft';
        this.pop = (this.$route.fullPath === '/home'
        || this.$route.fullPath === '/interaction'
        || this.$route.fullPath === '/me') ? '' : 'animated fadeInRight';
      },

    },

    methods: {
      tabBaritemclick: function (index) {
        switch (index) {
          case 1:
            this.$router.push('/home')
            break
          case 2:
            this.$router.push('/interaction')
            break
          case 3:
            this.$router.push('/me')
            break
        }
      },
      back: function () {
        this.$router.go(-1)
      }
    },
    components: {
      Tabbar,
      NavigationBar
    }
  }
</script>

<style lang="less">
  @import './css/reset.css';
  @import "assets/css/animate.css";

  #app {
    height: 100%;
    .header{
      margin-bottom: 44px;
    }

  }
</style>
