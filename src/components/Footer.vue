<template>
  <footer class="bg-[#15191F] text-[#929292] w-full py-[65px]">
    <div class="max-w-7xl w-full mx-auto px-4 lg:px-2 flex justify-between items-center">
      <div>© 2021 MoovieTime. All rights reserved.</div>
      <router-link :to="`/`">
        <img
          alt="MoovieTime logo footer"
          src="@/assets/moovie-time-logo-gray.svg"
          width="88"
          height="24"
        />
      </router-link>
      <div>Made with Vue Framework</div>
    </div>
  </footer>
</template>
