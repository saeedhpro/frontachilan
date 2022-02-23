<template>
<div class="h-20 p-5  shadow-lg flex justify-between">
  <nuxt-link to="/admin/Order">لیست سفارشات</nuxt-link>
  <nuxt-link to="/admin/FrequentlyAskedQuestions">سوالات متداول</nuxt-link>
  <nuxt-link to="/admin/Blog">مقالات</nuxt-link>
  <nuxt-link to="/admin/ContactUs">تماس باما</nuxt-link>
  <nuxt-link to="/admin/Products">محصولات</nuxt-link>
  <nuxt-link to="/admin/Grouping">دسته بندی</nuxt-link>
  <nuxt-link to="/admin/Comments">نظرات کاربران</nuxt-link>
  <nuxt-link to="/admin/NewsLetters">خبرنامه</nuxt-link>
  <nuxt-link to="/admin/SMSSettings">تنظیمات پیامک</nuxt-link>
  <button>خروج</button>
</div>
</template>

<script>
export default {
  name: "Header"
}
</script>

<style scoped>

</style>
