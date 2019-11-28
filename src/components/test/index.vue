<template>
  <div class="lalala">
    test4.0.34
    <!-- <video :src="link" controls="controls"/>
    <img :src="img" alt="">
    <img src="./asset/icon_wechat_kf.png" alt=""> -->
  </div>
</template>
<script>
export default {
  name: "test",
  data () {
    return {
      link: require('./asset/movie.ogv'),
      img: require('./asset/icon_wechat_kf.png'),
    }
  }
};
</script>
<style scoped lang="scss">
.lalala {
  color: red;
}
</style>
