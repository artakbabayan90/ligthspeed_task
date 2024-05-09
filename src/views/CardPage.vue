<template>
  <div id="app">
    <main-header></main-header>
    <w-list v-if="cardItems.length" :items="items" hover style="width: 70%;margin: auto">
      <template #item="{ item }">
        <w-flex align-center justify-space-between>
          <w-image
              class="mr5"
              :src="item.img"
              :width="100"
              :height="100">
          </w-image>
          {{ item.name }}
          <p>
            count {{ item.count }}
          </p>
          <p>
            price {{ item.price * item.count }} $
          </p>
          <w-icon style="cursor: pointer" md @click="removeItems(item)">{{ item.icon }}</w-icon>
        </w-flex>
      </template>
    </w-list>
    <w-flex v-if="cardItems.length" style="width: 70%;margin: auto">
      <w-button @click="dialog2.show = true" class="grow">Pay {{ totalPrice }} $</w-button>
    </w-flex>
    <div v-else style="width: 70%;margin: auto">
      Card is empty
    </div>
    <w-dialog
        v-model="dialog1.show"
        :width="600"
        :title="removingProdName">
      <p>Do you want to remove this product?</p>
      <w-button
          class="mt6"
          @click="removeItemConfirm"
      >
        Remove
      </w-button>

      <template #actions>
        <div class="spacer"/>
        <w-button
            @click="dialog1.show = false"
            bg-color="error">
          Close
        </w-button>
      </template>
    </w-dialog>
    <w-dialog
        v-model="dialog2.show"
        title="Terms and conditions"
        persistent
        :width="550">
      Your order has been successfully registered
      <template #actions>
        <div class="spacer"/>

        <w-button
            @click="placeOrder"
            bg-color="success">
          Home
        </w-button>
      </template>
    </w-dialog>
  </div>
</template>

<script lang="ts">
import {defineComponent} from 'vue'
import MainHeader from "@/components/MainHeader.vue";
import {Product} from "@/types";

export default defineComponent({
  name: "CardPage",
  components: {MainHeader},
  data: () => {
    return {
      totalPrice: 0,
      dialog1: {show: false},
      dialog2: {show: false},
      removingProdName: '',
      removingItemId: 0,
    }
  },
  computed: {
    cardItems(): Array<Product> {
      const cardItems = localStorage.cardItems ? JSON.parse(localStorage.cardItems) : [];
      return cardItems;
    },
    items(): Array<object> {
      const newItems = this.cardItems.map((e: Product) => {

        this.totalPrice += e.count ? (e.count * e.price) : e.price;

        return {
          id: e.id,
          name: e.name,
          img: e.thumbnailUrl,
          value: e.id,
          icon: 'mdi mdi-close',
          count: e.count ? e.count : 1,
          price: e.price
        }
      });

      return newItems;
    }
  },
  methods: {
    removeItems(item: Product): void {
      this.dialog1.show = true;
      this.removingProdName = item.name;
      this.removingItemId = item.id;
    },

    removeItemConfirm: function (): void {
      const newcardItems = this.cardItems.filter((e: Product) => e.id !== this.removingItemId);
      localStorage.cardItems = JSON.stringify(newcardItems);
      this.dialog1.show = false;
      window.location.reload()
    },

    placeOrder(){
      localStorage.cardItems = JSON.stringify([]);
      this.dialog2.show = false;
      this.$router.push('/')
    }
  }
})
</script>


<style scoped>

</style>
