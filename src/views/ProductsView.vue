<template>
  <div id="app">
    <main-header></main-header>
    <w-flex grow>
      <aside>
        <products-category></products-category>
      </aside>
      <main class="grow">
        <products-list></products-list>
      </main>
    </w-flex>
  </div>
</template>

<script lang="ts">
import {Options, Vue} from 'vue-class-component';
import {mapActions} from "vuex";
import ProductsCategory from "@/components/ProductsCategory.vue";
import ProductsList from "@/components/ProductsList.vue";
import MainHeader from "@/components/MainHeader.vue";

@Options({
  components: {
    MainHeader,
    ProductsCategory,
    ProductsList
  },
  methods: {
    ...mapActions(["fetchProducts", "fetchCategories"])
  },

  mounted() {
    this.fetchProducts();
    this.fetchCategories();
  }

})

export default class HomeView extends Vue {


}
</script>
<style scoped>
header, footer, aside, main {
  margin: 4px;
  padding: 12px;
  text-transform: uppercase;
  color: #666;
  border: 1px solid rgba(0, 0, 0, 0.07);
}

header, footer {
  background-color: #e9f8fe;
  min-height: 60px;
}

aside {
  background-color: #fef2ff;
}

main {
  background-color: #efffed;
}
</style>
