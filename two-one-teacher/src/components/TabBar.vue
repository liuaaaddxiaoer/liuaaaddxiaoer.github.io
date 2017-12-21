<template>
  <div class="tabbar">
    <ul>
      <li>
        <div class="tabbar-item" @click="goGroup(1)">
          <i class="tabbar-item-group"></i>
          <span>社群</span>
        </div>
      </li>
      <li>
        <div class="tabbar-item" @click="goGroup(2)">
          <i class="tabbar-item-inter"></i>
          <span>互动</span>
        </div>
      </li>
      <li>
        <div class="tabbar-item" @click="goGroup(3)">
          <i class="tabbar-item-me"></i>
          <span>我</span>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
  export default {
    name: 'tabbar',
    data(){
      return {}
    },
    methods: {
      goGroup:function (index) {
        this.$emit('tabBarItemClick',index);
      }
    }
  }
</script>

<style lang="less" scoped>
  @tabbarH: 2.45rem;
  @bgColor: #fff;
  @normalColor: #666;
  .flex {
    -webkit-display: flex;
    display: flex;
  }

  .tabbar {
    position: fixed;
    border-top: 1px solid #eee;
    background-color: white;
    bottom: 0;
    left: 0;
    width: 100%;
    height: @tabbarH;
    z-index: 1000;
    ul {
      .flex;
      height: 100%;
      li {
        flex:1;
        /*background: yellow;*/
        .tabbar-item {
          .flex;
          width: 50px;
          height:100%;
          /*background: red;*/
          margin: 0 auto;
          text-align: center;
          flex-direction: column;
          align-items: center;
          font-size: .7rem;
          justify-content: space-around;
          color: @normalColor;
          i {
            width: 1rem;
            height: 1rem;
            margin-top: .2rem;
          }
          .tabbar-item-group {
            background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACkAAAAoCAYAAABjPNNTAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyhpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMDY3IDc5LjE1Nzc0NywgMjAxNS8wMy8zMC0yMzo0MDo0MiAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTUgKE1hY2ludG9zaCkiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6QTA4MEE3NkVBQ0JCMTFFN0E0NUVGNkQ2NjVDMEZDQzciIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6QTA4MEE3NkZBQ0JCMTFFN0E0NUVGNkQ2NjVDMEZDQzciPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDpBMDgwQTc2Q0FDQkIxMUU3QTQ1RUY2RDY2NUMwRkNDNyIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDpBMDgwQTc2REFDQkIxMUU3QTQ1RUY2RDY2NUMwRkNDNyIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/PuOJlaMAAAWYSURBVHjazFh7UFVFGN+zey5cuNCgYIAieGEKJyOF/pBifGAlCMbYw0pyjCBSURmHlNERBUbKsULyGSCNjYiplDMZIMhYmFoIde0GmGWXpwqkmMJ9yT3nbLvHZoLhvrn32jezs3vO7tnvd77d79vftwzGGIxHAhKniPXR/PK1/r4BW+WB0ybR52s91+41XWku3lqau9nc933VNyzqYBwBsn5P7ZGIsIg3jfWf/rH23NsFabGkie0FCcE4pbaoOoUCHBYMYOOfOSDoYrhYaJu+W/RM/LxtqTmF49ExxpKyBn+bJmh5vLE9dLJcnk1A7b9+cFRfVvA6sD00B7SoWgaie573s2Vezfz+8VvS+yMWycrQSwF+/iHinuyvHDPmUG+5WIdODZ0oK2HTyDd+9uiyC6S0Gr2jS+Jvat/iTwpIsDgHRoDRpnJl+gS+0/ME2kHAejoNpOdhNF3yK+zSx/MHuXD8KJYAoBhSin3J/kvHjE8JXC7WiqFfAB1rmIFl2lf4TfefE3q8DrAvOxykx9dojT5BUBqeEoIB+u/93p5isS4IzQUZQenAh/URC21vm7Zp1BhRyLfDUcJE7av8V55foP0Ocxz3szB7OFrYiWXGJ8mVbwbZIeuN9n3Y9QnI79hhXLmGbJ06dJxVMcuGNnLYlONYBCmtQu/eX8CXYAu7KNEvDqwNWgme9o4Un38euixasGbgjHkracVVKtUu41faBZIsx2P6hUKr4IvdgBMF3mKAZyVars7gKmwOQYYncZ2zAVIRJmEwPFsoIV7vZZPjSOvha4YZghy4SIYjBRkfhAutBkn+CHIhuGj8h6ZtwZCsHA34YVaB5ANxDC/Hk4GLhZtOjoZHwGJzIehFtU69xY11i+IBj5o1Crin51NweqDe6eASfBeCdVNXgSjvWQDyDO7u7e5rbG06mJK4InckyAJSttga5xwh5mJsbWNdQ3x0XCxdbmreLaaoFp2A/qkzZJHvC+L8pnQTgPOLju0+gPLy8uiZJd+sygUHCNXSC3qxNA8qgAEbwIIJc0GAuz+o6DvucJB7wz8GIdJgYE432X5P0OUepA5N/+Bvw91Rk0yQ+IDrMb8DNa8G/ufDHA6yf44KeCEvYE63RqfBVgYZBjwsYRhGDEE/WUO1nCHW0LzfOq9qWVIXkRJLqRb186N9Dxh2csBS41TLkXuSzDvXJwaY0/2doqHifx2Cqn+ouZD4bMKckcE8aVAzlOPhLp3FYY4lwZyxhmo5QkbSPCgwuON651/nlRcOr1ySnm2SqpE0IVa3jP+WUn6XOomB6P+M3aBexRVapGqon/kedTB9rvZk9iqx4xD4xiqCQag8z7Yz2UBwIUKiS9LClBPdf1jNJ/XxQrmkDXa5CqPbZahDN5hMm7NFiZJJgAN0pziZSpL0wa0JZhIrDtoMUrucv+J+EWbRZMkaunV61kly1LWLhbYpgbDoLGRu6Rl4WL2aK7M779Yl8fvcz8M8mn6ai3WVEeViYPZCMrHQ9pcRR8Q+kwBpSluDqtBNJm3clwP6OCFfWo/eg7cZzla6ZYrq0SUmqewhtoNZQpaZc8gNhm4Jv8vjFJwtUcIbI70+c+pqsc5pzxfpFmUztND29s6dYh9l3SO92E0B73meQCu0yXwqjSQOvQvSpPIKw0whyKMKrWevMneoS0V5zwSWbtXEMcRWkjZGT/Lr3e5nYbB6DVdudfy0xxvJPt1NsrpSwQcnwXnwKEDmfxbyEHuVsRkkUJ8ilrvpkqu/fwO+TpPOH++91ddtiW6pelR3yFFXbA9Ao5YceWZaI5faLn0QNiW01BzdalCcq/D+3Piiuexiv2ZX1bGo8MjXTdGttPfT5z1wGftAOuSOIiFr8RsEzIYWVett/TBJpUhRXlPe3Vu5bw8BOMcUQGvlHwEGAGqtzgZjZgImAAAAAElFTkSuQmCC) no-repeat ;
            background-size: 100% 100%;
          }
          .tabbar-item-inter {
            background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACQAAAAkCAYAAADhAJiYAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyhpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMDY3IDc5LjE1Nzc0NywgMjAxNS8wMy8zMC0yMzo0MDo0MiAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTUgKE1hY2ludG9zaCkiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6N0NDNzg5MDNBQ0JCMTFFN0E0NUVGNkQ2NjVDMEZDQzciIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6N0NDNzg5MDRBQ0JCMTFFN0E0NUVGNkQ2NjVDMEZDQzciPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDo3Q0M3ODkwMUFDQkIxMUU3QTQ1RUY2RDY2NUMwRkNDNyIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDo3Q0M3ODkwMkFDQkIxMUU3QTQ1RUY2RDY2NUMwRkNDNyIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/PhIBT34AAAO0SURBVHjazJhrSFRBFMePV13T3dWydNVI81Gr5opF4gOVHqL5LRIUrETDjNI+5JegFyV9EIIii8KgJ+qHAoWC0AQ3H2hFD0rxEaaW4hN8YKJu6nbObRQT1ztX18eBHzN798zMnztzz8wZCzu9M8g0TyQWiUD8EA9Ezf4bQX4ijUg1Uoq0yencglOQJZKAZCJh1I6zfyNSi9xFniNTUg0Ejk6jkXqkEAmXIQaYbzhrW8/6WrKgDUgeUob4wvLNl/WVx/qWJcgJqUTSwfyWzvp24hVEjlVIMKycBbMxnKQE2SGvEC2svGnZWHaLCbqNhMDqWQgbc0FB9AWkwepb2tyvT5hT5sLa2R0W62YFJbKou1bmywLvrKAMWHvLnBHkyaLpWhttSV4k6BDPdhDjeBB+hH8Tobq5/ZmGWNpc87FyVMqbOnZRaMR6j6EXvGsCzerPrIDe0C6579ZC1v4qy9+fBG3j8TzTnAW9hj7omuiG083nzO7PzIOmbAIrClgfZhBgfZmVwI6d68UGSVAHl2dUJ4zu6wWFYM3du8pSKbbpjWzlbdJJghp4PNvH28UySBXILchf+e+g2THeydvks8CyA0l7M6AXywTNEW5BiZp4sSwfrORt8lFgqYpRyvNpdwFMGafghGsy6FTSoStA5Q+prsfFNk+683kFlZIgmuAaKc+G0SZ42PUMbAQFFOkKIFAVYNKX/ivWFYq+1Ibactg7CvCW1ilK+jGGxEu10A9VQIj9XnHAZJck2GLtCMOTwzCE0GLfrQ6ELPezkLvzBmy0doCKwWpIa8rAtzTNI+gi8nUmUbRkeZNkukMD53hnw0m3FBAsFg5j0yjgMU7T+ZbLMDY9ziOGXqEOmZybuUazvInL/JRacY3EOO6H7bYeYJj+A7/GO8QFTGtm/jT52HpBttclOLApanahX2m9Di1jYkiIQ0oWSqUfIanmjnY77HygYs9rcLBy+O85TXd83bEXtcMfEkxlHXRqe29uQdc8L4hiygbKxWMIQXV6VhJUrJC6bJhJFM2Wm/VEtIDaSi0KobMRGZ2V6MyE9lv5VqNeLHPtR2iiP63kpmU0EfpM7fZ9SCTywByD64eqxNHvaW+CRuEMW23c4L721uwmwHv7QbHpFB2PkeZl6KluHG0+jOVQ7OZoaA2vg+9hX4Dq9IzFH1n3Q2XsmJvELp+MnEL62Rcbld2W8xLLUKSIHXdGWD0U10/TUm7Q5l/pxbErPQqk7og9yxqGkS6aJeQqnVrkdv5XgAEAoIYdARhIZPkAAAAASUVORK5CYII=) no-repeat;
            background-size: 100% 100%;
          }
          .tabbar-item-me {
            background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAkCAYAAACe0YppAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyhpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMDY3IDc5LjE1Nzc0NywgMjAxNS8wMy8zMC0yMzo0MDo0MiAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTUgKE1hY2ludG9zaCkiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6N0JCOTEyMDhBQ0JCMTFFN0E0NUVGNkQ2NjVDMEZDQzciIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6N0JCOTEyMDlBQ0JCMTFFN0E0NUVGNkQ2NjVDMEZDQzciPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDo4QjQ3NTRGRkFDOTIxMUU3QTQ1RUY2RDY2NUMwRkNDNyIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDo4QjQ3NTUwMEFDOTIxMUU3QTQ1RUY2RDY2NUMwRkNDNyIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/PukLgzAAAANQSURBVHjavJhdSBRRFMfHcS2l1pA+jBYkU6St7KmIkkLqoXKjIqo1RNGXHhKpLOjjpbeyj4ci+lCDgoiCogdrkwwKKleCHmT7MOqhFlyKwqVWC/py+x/4b8zOrrN311kP/Jhx5s7533P23nvuNae4Zo6maAvBVrAKuMF08BsMghB4DG598oVeqTjLURBeBo6C1YodfAgOowPPrBrpFu9ywTHgp2gEtINNYC6YDKaC+XzWzjbS1j/b42oDuelGPAncBBvBX3CSnYiYGyKy//cQKpRowX52vAtsQ5tfqhF3UjQMasChZKJJOhEBB/lNmD4uqaa6CTSAEbAG9GhpGsR7+K34qEcmmlIJO8EJ3u8C/VqGBvF++hA7DnGnlXA9mAF6wVVtnAZx8fEUzKTvMYW38Hpes88umnwnCEsqqoGMwLs2Ct+hz2pjuo3CFZwCb1RGcBrpFl8D9F2RTLiI18+a/fbFpBEn/JPX/CwI55s04oQHeS3NgnCpSSNO+ANXGxcos0sRA6qMPsPUSBCOAp9h9bLLGnn1YaBFx5rHF3jdDUpsiFYWjhaT76TCfYxayt05qV7jEJVvO8A0RtuXqkg0g69gAziTiThF5dvN9NWsUp2CwAOGmabroCAN0QJ+00IfHkQbVK3HsuvYy3sv91MuBVEX23r5aB9E/ar1uIo1uNPoE2xXCFjaFBv+7kBnHoAqq62Pk79LbCqNMGXXwBMwOsZabI5aglkJ6sAODlSxyzJb0H7YKCwp6gaVXNZkf3UafFMoAlaplxG9h1sn2Ry+AOvxTUiE81j4l4LX7GUgjeqjMuAWM3sLwHOwQufoE9F33KwH7F6o0bkAfYvGEtHUDUuapGRIy5JBfIgaYg06wxd7pGXfYhpu3VCkSyZAOKYR1jmaxY5MgHBMo9vBqePlaP7I40fUTjWu3aeo8QO06Rxp8uAPaAX3QLmNouX02UqNOgy0tw6+72JhuALWcT7fBmdZKkfTFJOAlnOqyn46j9ls5PEm4bRYxCOMTDGHYYd4nx0Y4PZFdqLf+X4KmMWjq5uCa3l60BilBHQAouFUx1TZnO0EtXSYiUkHb0ihgOD7TP4jsIgVq5Jzfh4zU8gTQoQE+RPJetwLsZdWTv8JMADhhfxqNILnSwAAAABJRU5ErkJggg==) no-repeat;
            background-size: 100% 100%;
          }
        }
        span {
          margin-bottom: .2rem;
        }
      }
    }
  }
</style>
