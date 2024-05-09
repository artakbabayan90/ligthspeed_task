<template>
  <div id="app">
    <main-header></main-header>
    <w-flex grow>
      <ProcuctItem style="width: 70%;margin: auto" :product="product"></ProcuctItem>
    </w-flex>
  </div>
</template>

<script lang="ts">
import {defineComponent} from 'vue'
import ProcuctItem from "@/components/ProcuctItem.vue";
import {mapActions, mapGetters} from "vuex";
import {Product} from "@/types";
import MainHeader from "@/components/MainHeader.vue";

export default defineComponent({
  name: "ProductView",
  components: {MainHeader, ProcuctItem},
  computed: {
    ...mapGetters(['getProduct']),
    product(): Product {
      return this.getProduct;
    }
  },
  methods: {
    ...mapActions(['fetchProduct'])
  },
  mounted() {
    this.fetchProduct(this.$route.params.id);
  }
})
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
