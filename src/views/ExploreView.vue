<template>
  <div class="bg-[#292E36]">
    <Navbar />
  </div>
  <main>
    <section class="relative pb-[115px]">
      <div class="absolute top-0 w-full bg-[#292E36] h-[330px] z-0"></div>
      <div class="pt-[90px] relative max-w-7xl mx-auto px-4 lg:px-2">
        <div class="mb-3 w-[112px] h-[6px] bg-[#E74C3C] z-10"></div>
        <div class="flex justify-between items-center">
          <h2 class="font-semibold text-3xl">Movies</h2>
        </div>
        <div class="mt-[60px] flex items-start gap-7">
          <div
            class="shrink-0 w-[240px] bg-gradient-to-b from-[#0E1723] to-[#1E232A] rounded-lg text-base"
          >
            <div class="px-4.5 py-[20px] font-semibold">Sort Result By</div>
            <hr />
            <div class="px-4.5 py-[20px]">
              <dropdown @update-sort="updateSortOrder" />
            </div>
            <hr />
            <div class="px-4.5 py-[20px] font-semibold">Genres</div>
            <hr />
            <div class="px-4.5 py-[20px] text-sm font-normal">
              <div v-for="genre in genres" :key="genre.id">
                <label class="cursor-pointer flex justify-between items-center mb-2"
                  >{{ genre.name }}
                  <div class="relative">
                    <input
                      type="checkbox"
                      :value="genre.id"
                      v-model="selectedGenres"
                      class="w-3.5 h-3.5 cursor-pointer appearance-none peer checked:bg-[#E74C3C] bg-white rounded-sm focus:ring-[1px] ring-[#fff]/50"
                    />
                    <div class="absolute w-3.5 h-3.5 top-0.5 left-0 hidden peer-checked:block">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      >
                        <polyline points="20 6 9 17 4 12"></polyline>
                      </svg>
                    </div>
                  </div>
                </label>
              </div>
            </div>
          </div>
          <div class="flex flex-col items-center">
            <div class="w-fit grid grid-cols-4 gap-6">
              <Card v-for="(movie, index) in movies" :data="movie" :key="index" />
            </div>
            <div
              class="cursor-pointer bg-[#FF0000] hover:bg-red-400 mt-16 w-fit font-semibold py-2 px-10 rounded-full flex items-center justify-center transition"
            >
              Load More
            </div>
          </div>
        </div>
      </div>
    </section>
  </main>
</template>

<script>
import Navbar from '../components/Navbar.vue'
import Card from '../components/Card.vue'
import Dropdown from '../components/SortDropdown.vue'
import api from '../http/api'

export default {
  components: {
    Navbar,
    Card,
    Dropdown,
  },
  data() {
    return {
      movies: [],
      selectedGenres: [],
      genres: [],
      selectedSortBy: 'popularity.desc',
    }
  },
  mounted() {
    this.fetchGenres()
    this.fetchMovies()
  },
  methods: {
    async fetchMovies() {
      try {
        const genreQuery = this.selectedGenres.length
          ? `&with_genres=${this.selectedGenres.join(',')}`
          : ''

        const sortQuery = `&sort_by=${this.selectedSortBy}`

        const { data } = await api.get(
          `discover/movie?include_adult=false&include_video=false&language=en-US&page=1&${sortQuery}${genreQuery}`,
        )
        this.movies = data?.results || []
      } catch (error) {
        console.error('Error fetching movies:', error)
      }
    },
    async fetchGenres() {
      try {
        const { data } = await api.get(`/genre/movie/list?language=en`)
        this.genres = data?.genres || []
      } catch (error) {
        console.error('Error fetching movies:', error)
      }
    },
    updateSortOrder(value) {
      this.selectedSortBy = value
      this.fetchMovies()
    },
  },
  watch: {
    selectedGenres() {
      this.fetchMovies()
    },
  },
}
</script>
