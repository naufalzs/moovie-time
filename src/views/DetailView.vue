<template>
  <div class="w-screen overflow-hidden">
    <div class="relative h-[412px]">
      <img
        :src="`https://image.tmdb.org/t/p/w1280/${data?.backdrop_path}`"
        :alt="`${data?.original_title}`"
        class="absolute inset-0 w-full h-full object-cover z-1"
      />
      <div class="absolute inset-0 w-full h-full bg-[#000]/50 z-2"></div>
      <Navbar />
      <div class="absolute bottom-0 w-full bg-[#000]/60 py-4 z-20 text-white">
        <div class="relative flex justify-end max-w-6xl mx-auto gap-8 pr-12">
          <div class="flex gap-3">
            <img alt="star logo" src="@/assets/icon-star.svg" width="32" height="32" />
            <div class="text-4xl font-semibold ml-1">{{ data?.vote_average?.toFixed(1) }}</div>
            <div class="text-sm font-medium uppercase">
              <div class="text-[#fff]/50">User Score</div>
              <div class="mt-[3px]">{{ data?.vote_count }} Votes</div>
            </div>
          </div>
          <div class="text-sm font-medium uppercase border-l-1 border-l-[#fff]/20 pl-8">
            <div class="text-[#fff]/50">Status</div>
            <div class="mt-[3px]">{{ data?.status }}</div>
          </div>
          <div class="text-sm font-medium uppercase border-l-1 border-l-[#fff]/20 pl-8">
            <div class="text-[#fff]/50">Language</div>
            <div class="mt-[3px]">{{ data?.spoken_languages?.[0]?.name }}</div>
          </div>
          <div class="text-sm font-medium uppercase border-l-1 border-l-[#fff]/20 pl-8">
            <div class="text-[#fff]/50">Budget</div>
            <div class="mt-[3px]">${{ data?.budget }}</div>
          </div>
          <div class="text-sm font-medium uppercase border-l-1 border-l-[#fff]/20 pl-8">
            <div class="text-[#fff]/50">Production</div>
            <div class="mt-[3px]">{{ data?.production_companies?.[0]?.name }}</div>
          </div>
          <div
            class="absolute w-[220px] h-[330px] z-22 left-0 top-0 -translate-y-1/2 -translate-x-8"
          >
            <img
              :src="`https://image.tmdb.org/t/p/w300/${data?.poster_path}`"
              :alt="`${data?.original_title}`"
              class="inset-0 w-full h-full object-cover"
            />
          </div>
          <div
            class="absolute left-28 top-0 -translate-y-[140px] translate-x-[100px] text-white font-medium"
          >
            <div class="text-lg">{{ data?.release_date?.split('-')[0] }}</div>
            <div class="font-semibold text-3xl mb-1">{{ data?.title }}</div>
            <div>{{ data?.genres?.[0]?.name }}</div>
          </div>

          <div
            class="absolute left-28 top-0 translate-y-[82px] translate-x-[100px] text-white font-medium"
          >
            <div class="text-[#FF0000] font-semibold">OVERVIEW</div>
            <div class="mt-2 text-black w-1/2">
              {{ data?.overview }}
            </div>
          </div>
        </div>
      </div>
    </div>
    <main>
      <section class="bg-white py-[60px]">
        <div class="relative max-w-7xl mx-auto px-4 lg:px-2 mt-[160px]">
          <div class="mb-6 text-[#FF0000] font-semibold">REVIEWS</div>
          <div class="grid grid-cols-2 gap-9">
            <card-review v-for="review in reviews" :data="review" :key="review.id" />
          </div>
        </div>
      </section>
      <section class="bg-[#1E232B] max-w-7xl mx-auto px-4 lg:px-2 py-[50px]">
        <div class="font-semibold mb-3">RECOMMENDATION MOVIES</div>
        <div class="grid grid-cols-5 gap-9">
          <Card v-for="movie in recommendedData" :data="movie" :key="movie.id" />
        </div>
      </section>
    </main>
  </div>
</template>

<script>
import Navbar from '../components/Navbar.vue'
import Card from '../components/Card.vue'
import CardReview from '../components/CardReview.vue'
import api from '../http/api'

export default {
  components: {
    Navbar,
    Card,
    CardReview,
  },
  props: {
    id: {
      type: String,
      required: true,
    },
  },
  data() {
    return {
      movies: [
        { title: 'Movie 1', year: 2023 },
        { title: 'Movie 2', year: 2022 },
        { title: 'Movie 3', year: 2021 },
        { title: 'Movie 4', year: 2020 },
        { title: 'Movie 5', year: 2019 },
      ],
      data: null,
      reviews: null,
      recommendedData: null,
    }
  },
  async mounted() {
    await this.fetchMovie()
    await this.fetchReviews()
    await this.fetchRecommendedMovie()
  },
  methods: {
    async fetchMovie() {
      try {
        const { data } = await api.get(`/movie/${this.id}?language=en-US`)
        this.data = data
      } catch (error) {
        console.error('Error fetching movie:', error)
      }
    },
    async fetchReviews() {
      try {
        const { data } = await api.get(`/movie/${this.id}/reviews?language=en-US`)
        this.reviews = data?.results || []
      } catch (error) {
        console.error('Error fetching movie:', error)
      }
    },
    async fetchRecommendedMovie() {
      try {
        const { data } = await api.get(`/movie/${this.id}/recommendations?language=en-US`)
        this.recommendedData = data?.results?.slice(0, 5) || []
      } catch (error) {
        console.error('Error fetching movie:', error)
      }
    },
  },
}
</script>
