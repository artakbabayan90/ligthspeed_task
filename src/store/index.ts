import { createStore } from 'vuex';
import categories from "@/store/modules/categories";
import products from "@/store/modules/products";


export default createStore({
  modules: {
    categories,
    products
  }
})
