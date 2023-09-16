<script setup lang="ts">
  defineProps({
    display: {
      type: String,
      default: 'input_display',
    },
    name: {
      type: String,
      default: 'input_name',
    },
  });

  // console.log(props.name);
  // const emit = defineEmits(['click']);

  // const clickEvent = () => {
  //   console.log('ckick'); // eslint-disable-line no-console
  //   emit('click');
  // };
</script>

<template>
  <div class="w-full">
    <div class="flex items-center">
      <p>{{ display }}</p>
    </div>
    <InputDefaultThema class="mt-2" :name="name" />
  </div>
</template>
