<template>
  <div id="app">
    <img src="./assets/logo.png">
    <Hello />
    <tabs :currentIndex="currentIndex" @changTab="changeTabHandler">
      <tab tabName="tab1" index="1">
        <div>内容1</div>
      </tab>
      <tab tabName="tab2" index="2">
        <div>内容2</div>
      </tab>
      <tab tabName="tab3" index="3">
        <h3>内容3</h3>
      </tab>
    </tabs>
  </div>
</template>

<script>

export default {
  name: 'App',
  data(){
    return{
      currentIndex:"1"
    }
  },
  components: {
  },
  methods:{
    changeTabHandler(index){
      this.currentIndex = index;
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
