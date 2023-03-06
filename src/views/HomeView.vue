<template>
  <v-main>
    <v-container fluid>



    
  <header>
    <h1>𝑷𝒓𝒐𝒅𝒖𝒄𝒕</h1>
  </header>
  <section class="employee-content">
    
  <!--
    <AsD/>   -->
    
    <ListProduct />
  
  </section>
</v-container>
  </v-main>

</template>

<script>
import ListProduct from '../components/ListProduct.vue'
//import AsD from '../components/AsD.vue'

export default {
  name: 'HomeView',
  components: {
    ListProduct,
  //  AsD
  },
  methods:{
    typeManage(type){
      console.log(type)
    },
  }
}
</script>



<style scoped>
* {
  box-sizing: border-box;
}
body {
  margin: 0;
}
header {
  margin: 3rem;

  
  padding: 1rem;
  background-color: rgb(255, 255, 255);
  color: rgb(180, 177, 31);
  text-align: center;
}
.employee-content {

  margin: 3rem;
  border-radius: 10px;
  text-align: center;
}
.employee-content h2 {
  font-size: 1.5rem;
  border-bottom: 4px solid #000000;
  font-weight: bold;
  color: purple;
  margin: 0 0 0.5rem 0;
}


</style>



