<template>
  <w-card :image="product.thumbnailUrl">
    <h3>{{ product.name }}</h3>
    <div v-if="$route.params.id" v-html="product.description">
    </div>
    <strong>Цена: </strong>
    <span class="translation-chunk" style="line-height: 1.6em; background-color: initial;">
     {{ product.price }} $
    </span>
    <template #actions>
      <div class="spacer"></div>
      <w-button v-if="$route.params.id" @click="addToCard">Add To Card</w-button>

      <router-link v-else :to="`/product/${product.id}`">
        <w-button>Buy</w-button>
      </router-link>
    </template>
  </w-card>
</template>

<script lang="ts">
import {defineComponent} from 'vue';
import {Product} from "@/types";

export default defineComponent({
  name: "ProcuctItem",
  props: {
    product: {
      type: Object,
      required: true
    }
  },
  methods: {
    addToCard(): void {
      let exist = false;
      const cardItems = localStorage.cardItems ? JSON.parse(localStorage.cardItems) : [];
      cardItems.forEach((item:Product) => {
        if (item.id === this.product.id) {
          exist = true;
          item.count = item.count?item.count++:2;
        }
      })
      if (!exist) {
        cardItems.push(this.product);
      }
      localStorage.cardItems = JSON.stringify(cardItems);
      this.$router.push('/');
    }
  }
})
</script>


<style scoped>

</style>
