<template>
  <w-list
      :items="categoryList"
      v-model="selection"
      color="pink"
      hover
      @click="searchByCategory()"
  >
  </w-list>
</template>
<script lang="ts">
import {defineComponent} from 'vue'
import {mapGetters, mapActions} from "vuex";
import {Categories} from "@/types";

export default defineComponent({
  name: "ProductsCategory",
  data: () => ({
      selection: 0,
  }),
  computed: {
    ...mapGetters(['getAllCategories']),
    categories(): Array<Categories> {
      return this.getAllCategories;
    },
    categoryList(): Array<{ label: string, value: number }> {
      const items = [{
        label:'Все Категории',
        value: 0
      }];

      const newItems = this.getAllCategories.map((e: Categories) => {
        let str = `<p style="display: flex;align-items: center"><img style="margin-right: 8px; border-radius:4px" src="${e.imageUrl}" alt="" width="60" > ${e.name}</p>`
        return {
          label: str,
          value: e.id
        }
      });

      return [...items,...newItems];
    }
  },
  methods: {
    ...mapActions(["fetchProducts"]),
    searchByCategory(): void {
      this.fetchProducts(this.selection);
    }
  }


})
</script>


<style scoped>

</style>
