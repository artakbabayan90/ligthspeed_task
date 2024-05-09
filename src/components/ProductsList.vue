<template>
  <w-grid columns="3" class="wrapper">
    <procuct-item class="card" v-for="product in products" :product="product" :key="product.id"></procuct-item>
  </w-grid>
</template>
<script lang="ts">
import {defineComponent} from 'vue'
import {mapGetters} from "vuex";
import {Product} from "@/types";
import ProcuctItem from './ProcuctItem.vue';

export default defineComponent({
  name: "ProductsList",
  components:{
    ProcuctItem,
  },
  computed: {
    ...mapGetters(['getAllProducts']),
    products(): Array<Product> {
      return this.getAllProducts;
    },
  },

})
</script>


<style scoped>
.card{
  margin: 20px;
}
</style>
