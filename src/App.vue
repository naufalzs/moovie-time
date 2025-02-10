<script setup>
import { RouterView } from 'vue-router'
import Footer from './components/Footer.vue'
</script>

<template>
  <div class="min-h-screen bg-[#1E232B] text-neutral-200">
    <RouterView />
    <Footer />
  </div>
</template>
