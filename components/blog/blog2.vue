<template>
  <div class="bg-[#F7F8FA]">

    <div class="mx-auto px-5 max-w-7xl">
      <!-- BreadCrumbs -->
      <div class="px-4 py-2.5 flex text-sm text-[#100D14] rounded items-center bg-[#F0F0F5]">

        <nuxt-link to="" class="px-1">مقالات</nuxt-link>

        <svg class="font-bold text-[#100D14]" fill="black" width="10px" height="10px" viewBox="0 0 32 32"
             xmlns="http://www.w3.org/2000/svg">
          <path d="M 26 6 L 6 15.21875 L 6 16.78125 L 26 26 L 26 23.84375 L 9.46875 16 L 26 8.15625 Z"/>
        </svg>

        <nuxt-link to="" class="px-1">تیتر مقاله</nuxt-link>

      </div>

      <div class="">

        <img class="py-6 mx-auto block" src="@/static/images/blog/blog2.1.png">

        <h2 class="font-bold text-3xl text-[#282828]">تیتر مقاله لورم ایپسوم متن ساختگی</h2>

      </div>



    </div>

  </div>
</template>

<script>
export default {
  name: "blog2"
}
</script>

<style scoped>

</style>
