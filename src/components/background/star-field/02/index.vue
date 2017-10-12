<template>
  <canvas id="bg_starField_2"></canvas>
</template>

<script>
  export default {
      data() {
          return {
              title: 'star field background',
              requestId: 0 // 请求动画帧ID
          };
      },
      mounted() {
          let that = this;
          window.onresize = ()=> {
              window.cancelAnimationFrame(that.requestId);
              this.drawStarField();
          };
          this.drawStarField();
      },
      method: {

          /**
           * draw starField
           */
          drawStarField() {

          }
      }
  };
</script>

<style>

</style>
