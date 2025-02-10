<template>
  <section class="relative pb-[115px]">
    <div class="absolute top-0 w-full bg-[#292E36] h-[330px] z-0"></div>
    <div class="pt-[90px] relative max-w-7xl mx-auto px-4 lg:px-2">
      <div class="mb-3 w-[112px] h-[6px] bg-[#E74C3C] z-10"></div>
      <div class="flex justify-between items-center">
        <h2 class="font-semibold text-2xl">Discover Movies</h2>
        <div class="flex gap-5">
          <label
            v-for="option in options"
            :key="option.value"
            class="flex items-center gap-2 cursor-pointer"
          >
            <input type="radio" :value="option.value" v-model="selectedDiscover" class="hidden" />
            <div
              :class="selectedDiscover === option.value ? 'bg-[#FF0000] ' : 'bg-[#21252B] '"
              class="font-semibold py-2 px-4 rounded-full flex items-center justify-center transition"
            >
              {{ option.label }}
            </div>
          </label>
        </div>
      </div>
      <div class="mt-10 w-fit mx-auto grid grid-cols-5 gap-6">
        <Card v-for="(movie, index) in discoverMovie" :data="movie" :key="index" />
      </div>
    </div>
  </section>
</template>

<script>
import Card from './Card.vue'
import api from '../http/api'

export default {
  components: {
    Card,
  },
  data() {
    return {
      selectedDiscover: 'popularity',
      options: [
        { label: 'Popularity', value: 'popularity' },
        { label: 'Release Date', value: 'releaseDate' },
      ],
      discoverMovie: [],
    }
  },
  mounted() {
    this.fetchMovies()
  },
  methods: {
    async fetchMovies() {
      try {
        let endpoint = this.selectedDiscover === 'popularity' ? '/movie/popular' : '/movie/upcoming'

        const { data } = await api.get(`${endpoint}?language=en-US&page=1`)
        this.discoverMovie = data?.results?.slice(0, 10) || []
      } catch (error) {
        console.error('Error fetching movies:', error)
      }
    },
  },
  watch: {
    selectedDiscover() {
      this.fetchMovies()
    },
  },
}
</script>
