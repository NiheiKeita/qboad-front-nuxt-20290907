<script setup lang="ts">
  defineProps({
    name: {
      type: String,
      default: 'input_name',
    },
  });
  // const emit = defineEmits(['click']);

  // const clickEvent = () => {
  //   console.log('ckick'); // eslint-disable-line no-console
  //   emit('click');
  // };
</script>

<template>
  <div class="flex items-center">
    <input
      class="w-full rounded-md border border-gray-400 p-2 outline-blue-200 focus:outline focus:outline-4"
      type="text"
      :name="name"
    />
  </div>
</template>
