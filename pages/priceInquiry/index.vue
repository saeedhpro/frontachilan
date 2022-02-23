<template>
  <div>
    <main-header></main-header>
    <inquiry></inquiry>
    <main-footer></main-footer>
  </div>
</template>

<script>
import mainHeader from '@/components/header/mainHeader';
import inquiry from "~/components/price/inquiry";
import mainFooter from "~/components/footer/mainFooter";

export default {
  name: "index",

  components: {
    mainHeader,
    inquiry,
    mainFooter,

  }

}
</script>

<style scoped>

</style>
