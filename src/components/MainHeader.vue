<template>
  <w-toolbar shadow class="mt6 py1">
    <w-icon color="light-blue-dark3" size="2.5em">wi-wave</w-icon>
    <router-link to="/">
      <div class="title3 mr3">Lightspeed</div>
    </router-link>

    <div class="spacer"></div>
    <router-link to="/card" v-if="$route.name !== 'card'">
      <w-badge style="margin-right:20px">
        <template #badge>{{ cardItems?.length }}</template>
        <w-button color="primary">
          <w-icon class="mr1">mdi mdi-basket</w-icon>
        </w-button>
      </w-badge>
    </router-link>
  </w-toolbar>
</template>

<script lang="ts">
import {defineComponent} from 'vue'
import {Product} from "@/types";

export default defineComponent({
  name: "MainHeader",
  computed:{
    cardItems(): Array<Product> {
      const cardItems = localStorage.cardItems?JSON.parse(localStorage.cardItems):[];
      return cardItems;
    }
  }
})

</script>


<style scoped>

</style>
