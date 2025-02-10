<template>
  <div class="bg-[#F9F9F9] rounded-[14px] p-6 shadow-md">
    <div class="flex justify-between">
      <div class="flex items-center gap-4">
        <img
          :src="`https://image.tmdb.org/t/p/w200/${data?.author_details?.avatar_path}`"
          :alt="`${data?.author_details?.username}`"
          class="rounded-full w-12 h-12 bg-[#1E232B]/20"
        />
        <div>
          <div class="mt-1 font-bold text-black">{{ data?.author_details?.username }}.</div>
          <div class="text-[#666666]">December 18, 2020</div>
        </div>
      </div>
      <div class="bg-[#C4C4C4]/20 py-1 px-3 rounded-[7px] flex items-start gap-[6px]">
        <img alt="star logo" src="@/assets/icon-star.svg" width="16" height="16" class="mt-1" />
        <div class="text-4xl font-semibold text-black">
          {{ data?.author_details?.rating?.toFixed(1) }}
        </div>
      </div>
    </div>
    <div class="mt-6 italic text-black" :class="{ 'line-clamp-4': isClamp }">
      {{ data?.content }}
    </div>
    <div class="text-red-400 underline cursor-pointer" @click="toggleClamp">
      {{ isClamp ? 'read the rest.' : 'show less' }}
    </div>
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
  data() {
    return {
      isClamp: true,
    }
  },
  methods: {
    toggleClamp() {
      this.isClamp = !this.isClamp
    },
  },
}
</script>
