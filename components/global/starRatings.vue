<template>
  <div class="flex">
<!--    <client-only>-->
<!--      <StarRating-->
<!--        @rating-selected="setRating"-->
<!--        :rating="rating ? Math.round(rating.avgStar) : 0"-->
<!--        :star-size="30"-->
<!--        text-class="customTextRating"-->
<!--      >-->
<!--      </StarRating>-->
<!--    </client-only>-->
  </div>
</template>

<script>
// import StarRating from 'vue-star-rating';

export default {
  name: "starRatings",

  components: {
    // StarRating
  },

  data() {
    return {
      rating: "No Rating Selected",
      currentRating: "No Rating",
      currentSelectedRating: "No Current Rating",
      boundRating: 3,
    }
  },

  methods: {
    setRating: function (rating) {
      this.rating = rating;
    },
    // setRating: function(rating) {
    //   this.rating = "You have Selected: " + rating + " stars";
    // },
    // showCurrentRating: function(rating) {
    //   this.currentRating = (rating === 0) ? this.currentSelectedRating : "Click to select " + rating + " stars"
    // },
    // setCurrentSelectedRating: function(rating) {
    //   this.currentSelectedRating = "You have Selected: " + rating + " stars";
    // }
  },

}
</script>

<style scoped>

</style>
