<template>
  <div class="relative h-[412px]">
    <img
      src="https://images.unsplash.com/photo-1738924349706-14d70715e236?q=80&w=1965&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
      alt=""
      class="absolute inset-0 w-full h-full object-cover z-1"
    />
    <div class="absolute inset-0 w-full h-full bg-[#000]/50 z-2"></div>
    <Navbar />
    <div class="absolute bottom-0 w-full bg-[#000]/60 py-4 z-20 text-white">
      <div class="relative flex justify-end max-w-6xl mx-auto gap-8 pr-12">
        <div class="flex gap-3">
          <img alt="star logo" src="@/assets/icon-star.svg" width="32" height="32" />
          <div class="text-4xl font-semibold ml-1">7.0</div>
          <div class="text-sm font-medium uppercase">
            <div class="text-[#fff]/50">User Score</div>
            <div class="mt-[3px]">3621 Votes</div>
          </div>
        </div>
        <div class="text-sm font-medium uppercase border-l-1 border-l-[#fff]/20 pl-8">
          <div class="text-[#fff]/50">Status</div>
          <div class="mt-[3px]">Released</div>
        </div>
        <div class="text-sm font-medium uppercase border-l-1 border-l-[#fff]/20 pl-8">
          <div class="text-[#fff]/50">Language</div>
          <div class="mt-[3px]">English</div>
        </div>
        <div class="text-sm font-medium uppercase border-l-1 border-l-[#fff]/20 pl-8">
          <div class="text-[#fff]/50">Budget</div>
          <div class="mt-[3px]">$200,000,000.00</div>
        </div>
        <div class="text-sm font-medium uppercase border-l-1 border-l-[#fff]/20 pl-8">
          <div class="text-[#fff]/50">Production</div>
          <div class="mt-[3px]">DC Entertainment</div>
        </div>
        <div
          class="absolute w-[220px] h-[330px] z-22 left-0 top-0 -translate-y-1/2 -translate-x-12"
        >
          <img
            src="https://images.unsplash.com/photo-1738924349706-14d70715e236?q=80&w=1965&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt=""
            class="inset-0 w-full h-full object-cover"
          />
        </div>
        <div
          class="absolute left-28 top-0 -translate-y-[140px] translate-x-[100px] text-white font-medium"
        >
          <div class="text-lg">2020</div>
          <div class="font-semibold text-3xl mb-1">Wonder Woman 1984</div>
          <div>Fantasy, Action, Adventure</div>
        </div>

        <div
          class="absolute left-28 top-0 translate-y-[82px] translate-x-[100px] text-white font-medium"
        >
          <div class="text-[#FF0000] font-semibold">OVERVIEW</div>
          <div class="mt-2 text-black w-1/2">
            Wonder Woman comes into conflict with the Soviet Union during the Cold War in the 1980s
            and finds a formidable foe by the name of the Cheetah.
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
          <card-review />
          <card-review />
        </div>
      </div>
    </section>
    <section class="bg-[#1E232B] max-w-7xl mx-auto px-4 lg:px-2 py-[50px]">
      <div class="font-semibold mb-3">RECOMMENDATION MOVIES</div>
      <div class="grid grid-cols-5 gap-9">
        <Card v-for="(movie, index) in movies" :key="index" />
      </div>
    </section>
  </main>
</template>

<script>
import Navbar from '../components/Navbar.vue'
import Card from '../components/Card.vue'
import CardReview from '../components/CardReview.vue'

export default {
  components: {
    Navbar,
    Card,
    CardReview,
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
    }
  },
}
</script>
