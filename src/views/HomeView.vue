<template>
  <div class="bg-[#292E36]">
    <Navbar />
  </div>
  <main>
    <Slider :slider-items="topRatedMovie" />
    <Discover />
  </main>
</template>

<script setup>
import Navbar from '../components/Navbar.vue'
import Slider from '../components/Slider/Slider.vue'
import Discover from '../components/Discover.vue'

import api from '../http/api'
import { onMounted, ref } from 'vue'

const topRatedMovie = ref([])

onMounted(async () => {
  try {
    const { data: topRatedData } = await api.get('/movie/top_rated?language=en-US&page=1')
    topRatedMovie.value = topRatedData?.results?.slice(0, 4) || []
  } catch (error) {
    console.error('Error fetching movies:', error)
  }
})
</script>
