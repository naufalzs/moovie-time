<template>
  <nav class="relative bg-[#fff]/5 w-full z-50 py-4">
    <div class="mx-auto w-full max-w-7xl flex items-center justify-between px-4 lg:px-2 gap-10">
      <div class="flex grow items-center gap-8">
        <router-link :to="`/`">
          <img alt="MoovieTime logo" src="@/assets/moovie-time-logo.svg" width="112" height="31" />
        </router-link>
        <label
          class="relative w-full bg-[#24282F] px-3 py-[6px] rounded-[4px] focus-within:ring-1 focus-within:ring-gray-600 flex gap-3 justify-between"
        >
          <div class="grow flex gap-3">
            <img alt="movie icon" src="@/assets/icon-movie.svg" width="20" height="16" />
            <input
              type="text"
              placeholder="Find movie"
              class="cursor-pointer grow px-3 focus:outline-none bg-transparent text-white"
            />
          </div>
          <img alt="search icon" src="@/assets/icon-search.svg" width="16" height="16" />
        </label>
      </div>
      <ul class="flex items-center gap-9">
        <li class="cursor-pointer flex gap-3 uppercase hover:text-white">
          <img alt="categories icon" src="@/assets/icon-categories.svg" width="20" height="16" />
          Categories
        </li>
        <router-link :to="`/explore`">
          <li class="cursor-pointer uppercase hover:text-white">Movies</li>
        </router-link>
        <li class="cursor-not-allowed uppercase hover:text-white">TV Shows</li>
        <li class="cursor-not-allowed uppercase hover:text-white">Login</li>
      </ul>
    </div>
  </nav>
</template>
