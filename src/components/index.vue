<template>
  <div>
    <matrixComponent class="bg-demo"></matrixComponent>
    <!--<bubbly theme="theme0"></bubbly>-->
    <!--<p>For senola</p>-->
    <!--<paper-plane></paper-plane>-->
    <!--<starField></starField>-->

  </div>
</template>

<script>
  import matrixComponent from 'components/background/matrix/index';
  import paperPlane from 'components/background/paper-plane/index';
  import starField from 'components/background/star-field/01/index';
  import bubbly from 'components/background/bubbly/index';

  export default {
      name: 'components-list',
      data() {
          return {
              msg: 'Welcome to Your Vue.js App'
          };
      },
      components: {
          matrixComponent,
          paperPlane,
          starField,
          bubbly
      }
  };
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .bg-demo {
    position: absolute;
  }
  p {
    position: relative;
    text-align: center;
    padding-top: 200px;
    font-size: 40px;
    color: #fff;
    z-index: 5;
  }
</style>
