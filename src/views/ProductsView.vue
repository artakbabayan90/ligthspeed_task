<template>
  <div class="home">
    {{categories}}
    <img alt="Vue logo" src="../assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js + TypeScript App"/>
  </div>
</template>

<script lang="ts">
import {Options, Vue} from 'vue-class-component';
import {mapActions,mapGetters} from "vuex";
import HelloWorld from '@/components/HelloWorld.vue';

@Options({
  components: {
    HelloWorld,
  },
  data(): object {
    return {
      name: "string"
    }
  },
  computed: {
    ...mapGetters(['getAllCategories']),
    categories() {
      return this.getAllCategories;
    }
  },
  methods: {
    ...mapActions(["fetchCategories"])
  },

   mounted() {
      this.fetchCategories();
   }

})

export default class HomeView extends Vue {


}
</script>
