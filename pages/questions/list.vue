<script setup language="ts">
  const items = ref([{ message: 'Foo' }, { message: 'Bar' }]);
  // TODO(問題表示)
</script>

<template>
  <div>
    <div
      v-for="(item, key) in items"
      :key="key"
      class="my-4 flex items-center justify-center"
    >
      <QuestionBoardDefault class="w-1/3" />
    </div>
  </div>
</template>
