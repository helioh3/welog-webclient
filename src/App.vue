<template>
  <div class="bg-gray-200">
	  
      <vue-snotify></vue-snotify>
      <preloader-panel></preloader-panel>
      <router-view></router-view>
  </div>
</template>

<script>


export default {
  
}

</script>

<style lang="scss">
  @import url('https://fonts.googleapis.com/css2?family=Nunito:wght@300;400;700&display=swap');
  @import "assets/sass/app.scss";
  @import '~vue-snotify/styles/material';
 
  
</style>
