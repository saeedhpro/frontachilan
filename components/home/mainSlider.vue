<template>
  <div class=" bg-[#F7F8FA]">
    <vueper-slides
      :rtl="true"
      ref="vueperslides1"
      :touchable="false"
      fade
      :bullets="false"
      @slide="$refs.vueperslides2.goToSlide($event.currentSlide.index, { emit: false })"
      fixed-height="400px">
      <vueper-slide
        v-for="(slide, i) in slides"
        :key="i"
        :image="slide.image">
      </vueper-slide>
    </vueper-slides>

    <vueper-slides
      :rtl="true"
      class="no-shadow thumbnails"
      ref="vueperslides2"
      @slide="$refs.vueperslides1.goToSlide($event.currentSlide.index, { emit: false })"
      :visible-slides="slides.length"
      fixed-height="75px"
      :touchable="false"
      :bullets="false"
      :gap="2.5"
      :arrows="false">
      <vueper-slide
        v-for="(slide, i) in slides"
        :key="i"
        :image="slide.image"
        :content="slide.title"
        @click.native="$refs.vueperslides2.goToSlide(i)">
      </vueper-slide>

    </vueper-slides>
  </div>
</template>

<script>

import {VueperSlides, VueperSlide} from 'vueperslides'
import 'vueperslides/dist/vueperslides.css'

export default {
  components: {VueperSlides, VueperSlide},

  data: () => ({
    slides: [
      {image: require('@/static/images/doors/door1.png') , title:"rgfetye"},
      {image: require('@/static/images/doors/door2.png'), title:"rgfetywsewqee"},
      {image: require('@/static/images/doors/door3.png'), title:"rgfewrdeetye"}
    ]
  }),

  methods: {}
}
</script>

<style scoped>

.thumbnails {
  margin: auto;
  max-width: 300px;
}

.thumbnails .vueperslide {
  box-sizing: border-box;
  border: 1px solid #fff;
  transition: 0.3s ease-in-out;
  opacity: 0.7;
  cursor: pointer;
}

.thumbnails .vueperslide--active {
  box-shadow: 0 0 6px rgba(0, 0, 0, 0.5);
  opacity: 1;
  border-color: #000;
}
</style>
