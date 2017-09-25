<template>
  <div>
    <matrixComponent class="bg-demo"></matrixComponent>
      <p>For senola</p>
  </div>
</template>

<script>
  import matrixComponent from 'components/background/matrix/matrix';
  export default {
      name: 'components-list',
      data() {
          return {
              msg: 'Welcome to Your Vue.js App'
          };
      },
      components: {
          matrixComponent
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
  }
</style>
