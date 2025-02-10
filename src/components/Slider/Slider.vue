<template>
  <section class="bg-[#1E232B] py-12 overflow-hidden">
    <swiper
      :slides-per-view="'2.5'"
      :space-between="10"
      :centeredSlides="true"
      :loop="false"
      :pagination="{ clickable: true }"
      class="w-full px-6"
    >
      <!-- :pagination="pagination" -->
      <swiper-slide v-for="(movie, index) in updatedSliderItems" :key="index" class="w-[600px]">
        <div class="w-full h-[360px] overflow-hidden flex justify-center items-center">
          <div
            class="relative text-white w-[520px] h-[320px] bg-black shadow-lg px-5 py-7 text-base float-right"
          >
            <router-link
              :to="`/detail/${movie?.id}`"
              class="absolute -top-5 -left-[22px] w-[246px] h-[360px]"
            >
              <img
                :src="`https://image.tmdb.org/t/p/w300/${movie?.poster_path}`"
                :alt="`${movie?.original_title}`"
                class="inset-0 w-full h-full object-cover"
              />
            </router-link>
            <div class="w-[250px] float-right">
              <div class="flex gap-1">
                <img alt="star logo" src="@/assets/icon-star.svg" width="16" height="16" />

                <p class="font-bold">{{ movie?.vote_average?.toFixed(1) }}</p>
              </div>
              <div class="mt-1 flex flex-col gap-3">
                <h3 class="text-3xl font-medium">{{ movie?.original_title }}</h3>
                <p class="">
                  {{ movie?.release_date?.split('-')[0] }} • {{ movie?.genres?.[0]?.name }}
                </p>
                <p class="text-xs line-clamp-5">{{ movie?.overview }}</p>
              </div>
            </div>
          </div>
        </div>
      </swiper-slide>
    </swiper>
  </section>
</template>

<script>
import { Pagination, Scrollbar, Autoplay } from 'swiper/modules'

import SwiperCore from 'swiper'
SwiperCore.use([Autoplay])

import { Swiper, SwiperSlide } from 'swiper/vue'
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/scrollbar'

import 'swiper/swiper-bundle.css'

import './slider.css'

export default {
  components: {
    Swiper,
    SwiperSlide,
  },
  props: {
    sliderItems: {
      type: Array,
      default: () => [],
    },
  },
  data() {
    const movies = [
      {
        title: 'News of the World',
        year: '2021',
        genre: 'Drama',
        rating: '7.2',
        image: 'https://image.tmdb.org/t/p/w500/path_to_image1.jpg',
        description:
          'When the crew of a space junk collector ship called The Victory discovers a humanoid robot named Dorothy thats known to be a weapon of mass destruction, they get involved in a risky business deal which puts their lives at stake.',
      },
      {
        title: 'Space Sweepers',
        year: '2021',
        genre: 'Sci-Fi',
        rating: '7.3',
        image: 'https://image.tmdb.org/t/p/w500/path_to_image2.jpg',
        description: 'A space junk collector crew discovers a humanoid robot...',
      },
      {
        title: 'To All the Boys',
        year: '2021',
        genre: 'Romance',
        rating: '8.1',
        image: 'https://image.tmdb.org/t/p/w500/path_to_image3.jpg',
        description: 'Senior year of high school takes center stage...',
      },
      {
        title: 'News of the World',
        year: '2021',
        genre: 'Drama',
        rating: '7.2',
        image: 'https://image.tmdb.org/t/p/w500/path_to_image1.jpg',
        description:
          'When the crew of a space junk collector ship called The Victory discovers a humanoid robot named Dorothy thats known to be a weapon of mass destruction, they get involved in a risky business deal which puts their lives at stake.',
      },
      {
        title: 'Space Sweepers',
        year: '2021',
        genre: 'Sci-Fi',
        rating: '7.3',
        image: 'https://image.tmdb.org/t/p/w500/path_to_image2.jpg',
        description: 'A space junk collector crew discovers a humanoid robot...',
      },
      {
        title: 'To All the Boys',
        year: '2021',
        genre: 'Romance',
        rating: '8.1',
        image: 'https://image.tmdb.org/t/p/w500/path_to_image3.jpg',
        description: 'Senior year of high school takes center stage...',
      },
      {
        title: 'News of the World',
        year: '2021',
        genre: 'Drama',
        rating: '7.2',
        image: 'https://image.tmdb.org/t/p/w500/path_to_image1.jpg',
        description:
          'When the crew of a space junk collector ship called The Victory discovers a humanoid robot named Dorothy thats known to be a weapon of mass destruction, they get involved in a risky business deal which puts their lives at stake.',
      },
      {
        title: 'Space Sweepers',
        year: '2021',
        genre: 'Sci-Fi',
        rating: '7.3',
        image: 'https://image.tmdb.org/t/p/w500/path_to_image2.jpg',
        description: 'A space junk collector crew discovers a humanoid robot...',
      },
      {
        title: 'To All the Boys',
        year: '2021',
        genre: 'Romance',
        rating: '8.1',
        image: 'https://image.tmdb.org/t/p/w500/path_to_image3.jpg',
        description: 'Senior year of high school takes center stage...',
      },
    ]

    return {
      movies,
      pagination: {
        clickable: false,
        renderBullet: function (index, className) {
          return '<span class="' + className + '">' + (index + 1) + '</span>'
        },
      },
      modules: [Pagination],
    }
  },
  computed: {
    updatedSliderItems() {
      return [...this.sliderItems]
    },
  },
}
</script>
