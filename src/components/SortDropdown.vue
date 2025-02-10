<template>
  <div class="relative inline-block text-left">
    <button
      @click="toggleDropdown"
      class="cursor-pointer px-4 py-2 bg-neutral-800 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-neutral-800"
    >
      {{ selectedItem.label }}
    </button>

    <div
      v-if="isOpen"
      class="absolute mt-2 w-48 bg-white border border-gray-200 rounded-lg shadow-lg z-50"
    >
      <ul class="py-1">
        <li
          v-for="(item, index) in items"
          :key="index"
          @click="selectItem(item)"
          class="px-4 py-2 text-gray-800 hover:bg-neutral-400 hover:text-white cursor-pointer"
        >
          {{ item.label }}
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isOpen: false,
      selectedItem: { label: 'Popularity Desc', value: 'popularity.desc' },
      items: [
        { label: 'Popularity Asc', value: 'popularity.asc' },
        { label: 'Popularity Desc', value: 'popularity.desc' },
        { label: 'Release Date Asc', value: 'primary_release_date.asc' },
        { label: 'Release Date Desc', value: 'primary_release_date.desc' },
        { label: 'Rating Asc', value: 'vote_average.asc' },
        { label: 'Rating Desc', value: 'vote_average.desc' },
      ],
    }
  },
  methods: {
    toggleDropdown() {
      this.isOpen = !this.isOpen
    },
    selectItem(item) {
      this.selectedItem = item
      this.isOpen = false
      this.$emit('update-sort', item.value)
    },
    closeDropdown(event) {
      if (!this.$el.contains(event.target)) {
        this.isOpen = false
      }
    },
  },
  mounted() {
    document.addEventListener('click', this.closeDropdown)
  },
  beforeUnmount() {
    document.removeEventListener('click', this.closeDropdown)
  },
}
</script>
