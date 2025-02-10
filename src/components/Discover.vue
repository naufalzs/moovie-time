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
            <input type="radio" :value="option.value" v-model="discoverOption" class="hidden" />
            <div
              :class="discoverOption === option.value ? 'bg-[#FF0000] ' : 'bg-[#21252B] '"
              class="font-semibold py-2 px-4 rounded-full flex items-center justify-center transition"
            >
              {{ option.label }}
            </div>
          </label>
        </div>
      </div>
      <div class="mt-10 w-fit grid grid-cols-5 gap-6">
        <Card v-for="(movie, index) in movies" :key="index" />
      </div>
    </div>
  </section>
</template>

<script>
import Card from './Card.vue'

export default {
  components: {
    Card,
  },
  data() {
    return {
      discoverOption: 'popularity',
      options: [
        { label: 'Popularity', value: 'popularity' },
        { label: 'Release Date', value: 'releaseDate' },
      ],
      movies: [
        { title: 'Movie 1', year: 2023 },
        { title: 'Movie 2', year: 2022 },
        { title: 'Movie 3', year: 2021 },
        { title: 'Movie 4', year: 2020 },
        { title: 'Movie 5', year: 2019 },
        { title: 'Movie 6', year: 2018 },
        { title: 'Movie 7', year: 2017 },
        { title: 'Movie 8', year: 2016 },
        { title: 'Movie 7', year: 2017 },
        { title: 'Movie 8', year: 2016 },
      ],
    }
  },
}
</script>
