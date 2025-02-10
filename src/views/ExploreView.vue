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
              <input
                type="text"
                placeholder="Find movie"
                class="cursor-pointer grow px-3 focus:outline-none bg-transparent text-white"
              />
            </div>
            <hr />
            <div class="px-4.5 py-[20px] font-semibold">Genres</div>
            <hr />
            <div class="px-4.5 py-[20px] text-sm font-normal">
              <div v-for="genre in genres" :key="genre.value">
                <label class="cursor-pointer flex justify-between items-center mb-2"
                  >{{ genre.label }}
                  <div class="relative">
                    <input
                      type="checkbox"
                      :value="genre.value"
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
              <Card v-for="(movie, index) in movies" :key="index" />
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

export default {
  components: {
    Navbar,
    Card,
  },
  data() {
    return {
      movies: [
        { title: 'Movie 1', year: 2023 },
        { title: 'Movie 2', year: 2022 },
        { title: 'Movie 3', year: 2021 },
        { title: 'Movie 4', year: 2020 },
        { title: 'Movie 5', year: 2019 },
        { title: 'Movie 6', year: 2018 },
        { title: 'Movie 7', year: 2017 },
        { title: 'Movie 8', year: 2016 },
        { title: 'Movie 9', year: 2017 },
        { title: 'Movie 10', year: 2016 },
        { title: 'Movie 11', year: 2016 },
        { title: 'Movie 12', year: 2016 },
      ],
      selectedGenres: ['action'], // Default selected
      genres: [
        { label: 'Action', value: 'action' },
        { label: 'Adventure', value: 'adventure' },
        { label: 'Animation', value: 'animation' },
        { label: 'Comedy', value: 'comedy' },
        { label: 'Crime', value: 'crime' },
        { label: 'Documentary', value: 'documentary' },
        { label: 'Drama', value: 'drama' },
        { label: 'Family', value: 'family' },
        { label: 'Fantasy', value: 'fantasy' },
        { label: 'History', value: 'history' },
        { label: 'Horror', value: 'horror' },
      ],
    }
  },
}
</script>
