<template>
  <div>
    <Header/>
    <div class="my-10 min-h-screen">
      <nuxt/>
    </div>
  </div>
</template>
<script>
import Header from "~/components/admin/Header";
    export default {
        name: "admin",
        components: {Header},    }
</script>
