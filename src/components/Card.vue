<template>
  <div>
    <div class="relative w-full h-[330px]">
      <img
        src="https://images.unsplash.com/photo-1738924349706-14d70715e236?q=80&w=1965&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        alt=""
        class="inset-0 w-full h-full object-cover"
      />
      <div class="absolute right-0 top-0 bg-[#1E232B]/80 px-2.5 py-1 text-white">7.0</div>
      <div
        class="absolute inset-0 bg-[#2E2E2E] opacity-0 hover:opacity-100 transition-all duration-300 delay-100 flex flex-col items-center justify-center gap-10 text-white fonts-semibold"
      >
        <div class="flex gap-2.5">
          <img alt="star logo" src="@/assets/icon-star.svg" width="32" height="32" />
          <div class="text-2xl">6.5</div>
        </div>
        <div class="text-lg">Action</div>
        <div
          class="font-semibold py-2 px-4 rounded-full bg-[#FF0000] hover:bg-red-400 text-white uppercase cursor-pointer"
        >
          view
        </div>
      </div>
    </div>
    <div class="mt-3 mb-1 font-semibold text-base">Wonder Woman 1984</div>
    <div>2020</div>
  </div>
</template>
