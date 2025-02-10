<template>
  <section class="bg-[#1E232B] py-12 overflow-hidden">
    <swiper
      :slides-per-view="'2.5'"
      :space-between="10"
      :centeredSlides="true"
      :loop="true"
      :pagination="{ clickable: true }"
      class="w-full px-6"
    >
      <!-- :pagination="pagination" -->
      <swiper-slide v-for="(movie, index) in movies" :key="index" class="w-[600px]">
        <div class="w-full h-[360px] overflow-hidden flex justify-center items-center">
          <div
            class="relative text-white w-[520px] h-[320px] bg-black shadow-lg px-5 py-7 text-base float-right"
          >
            <div class="absolute -top-5 -left-[22px] w-[246px] h-[360px]">
              <img
                src="https://images.unsplash.com/photo-1738924349706-14d70715e236?q=80&w=1965&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt=""
                class="inset-0 w-full h-full object-cover"
              />
            </div>
            <div class="w-[250px] float-right">
              <div class="flex gap-1">
                <img alt="star logo" src="@/assets/icon-star.svg" width="16" height="16" />

                <p class="font-bold">{{ movie.rating }}</p>
              </div>
              <div class="mt-1 flex flex-col gap-3">
                <h3 class="text-3xl font-medium">{{ movie.title }}</h3>
                <p class="">{{ movie.year }} • {{ movie.genre }}</p>
                <p class="text-xs">{{ movie.description }}</p>
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
  setup() {
    const onSwiper = (swiper) => {
      console.log(swiper)
    }
    const onSlideChange = () => {
      console.log('slide change')
    }
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
      onSwiper,
      onSlideChange,
      pagination: {
        clickable: false,
        renderBullet: function (index, className) {
          return '<span class="' + className + '">' + (index + 1) + '</span>'
        },
      },
      modules: [Pagination],
    }
  },
}
</script>

<style scoped>
/* Custom Swiper Styles */
/* .swiper-pagination-bullet {
  background: gray;
  opacity: 0.5;
  transition: all 0.3s;
}

.swiper-pagination-bullet-active {
  background: #e74c3c;
  opacity: 1;
}

.swiper-button-prev,
.swiper-button-next {
  color: white;
} */
</style>
