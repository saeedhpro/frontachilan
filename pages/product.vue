<template>
  <div>
    <main-header></main-header>
    <bread-crumbs></bread-crumbs>
    <product-category></product-category>
    <main-footer></main-footer>
  </div>
</template>

<script>
import mainHeader from '@/components/header/mainHeader';
import breadCrumbs from "~/components/breadCrumbs";
import productCategory from "~/components/product/productCategory";
import mainFooter from "~/components/footer/mainFooter";
export default {
  components:{
    mainHeader,
    breadCrumbs,
    productCategory,
    mainFooter,
  },
  name: "products"
}
</script>

<style scoped>

</style>
