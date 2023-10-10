<script setup lang="ts">
  // TODO(問題表示)
  import { Question } from '@/types/question';
  defineProps({
    question: {
      type: Object as () => Question,
      default: null,
    },
  });
</script>
<template>
  <div
    class="rounded-md border-8 border-BoardBorder bg-BoardBG px-2 pt-2 text-white shadow-[0_3px_10px_rgb(0,0,0,0.5)]"
  >
    <div class="flex justify-between">
      <div class="text-gray-100">時間</div>
      <a href="javascript:void(0)">
        <div>・・・</div>
      </a>
    </div>
    <nuxt-link
      :to="routePathList('question_detail', 1)"
      class="inline-block w-full p-5"
    >
      <div class="mt-5">{{ question?.question_body }}</div>
    </nuxt-link>
    <nuxt-link
      :to="routePathList('question_detail', 1)"
      class="inline-block w-full p-5"
    >
      <div class="flex justify-end">二瓶より</div>
    </nuxt-link>
    <div class="flex justify-start space-x-10">
      <a href="javascript:void(0)">
        <div class="flex space-x-2">
          <div>吹き出し</div>
          <div>12</div>
        </div>
      </a>
      <a href="javascript:void(0)">
        <div class="flex space-x-2">
          <div>賢い</div>
          <div>22</div>
        </div>
      </a>
      <a href="javascript:void(0)">
        <div class="flex space-x-2">
          <div>ハート</div>
          <div>3</div>
        </div>
      </a>
    </div>
    <div class="flex justify-end space-x-2">
      <div class="h-2 w-5 rounded-l-3xl rounded-r-md bg-yellow-400"></div>
      <div class="h-2 w-6 rounded-l-3xl rounded-r-md bg-white"></div>
    </div>
  </div>
</template>
