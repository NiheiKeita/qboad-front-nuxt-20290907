<script setup lang="ts">
  defineProps({
    msg: {
      type: String,
      default: 'button',
    },
  });
  const emit = defineEmits(['click']);

  const clickEvent = () => {
    emit('click');
  };
</script>

<template>
  <div class="flex items-center justify-center">
    <a href="javascript:void(0)" @click="clickEvent">
      <div
        class="min-w-[200px] rounded-lg border border-ThemaColorComplementary bg-ThemaColor hover:bg-ThemaColorHover"
      >
        <p class="mx-10 my-2 flex justify-center text-lg text-white">
          {{ msg }}
        </p>
      </div>
    </a>
  </div>
</template>
