<template>
  <div>
    <div class="relative w-full h-[330px]">
      <img
        :src="`https://image.tmdb.org/t/p/w300/${updatedData?.poster_path}`"
        alt=""
        class="inset-0 w-full h-full object-cover"
      />
      <div class="absolute right-0 top-0 bg-[#1E232B]/80 px-2.5 py-1 text-white font-bold">
        {{ updatedData?.vote_average?.toFixed(1) }}
      </div>
      <div
        class="absolute inset-0 bg-[#2E2E2E] opacity-0 hover:opacity-100 transition-all duration-300 delay-100 flex flex-col items-center justify-center gap-10 text-white fonts-semibold"
      >
        <div class="flex gap-2.5">
          <img alt="star logo" src="@/assets/icon-star.svg" width="32" height="32" />
          <div class="text-2xl">{{ updatedData?.vote_average?.toFixed(1) }}</div>
        </div>
        <div class="text-lg">Action</div>
        <div
          class="font-semibold py-2 px-4 rounded-full bg-[#FF0000] hover:bg-red-400 text-white uppercase cursor-pointer"
        >
          view
        </div>
      </div>
    </div>

    <div class="mt-3 mb-1 font-semibold text-base">{{ updatedData?.original_title }}</div>
    <div>{{ updatedData?.release_date?.split('-')[0] }}</div>
  </div>
</template>

<script>
export default {
  props: {
    data: {
      type: Object,
      required: true,
    },
  },
  computed: {
    updatedData() {
      return { ...this.data }
    },
  },
}
</script>
