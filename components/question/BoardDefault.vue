<script setup lang="ts">
  // TODO(問題表示)
  import { Question } from '@/types/question';
  defineProps({
    question: {
      type: Object as () => Question,
      default: null,
    },
  });

  const myHeart = ref(false);
  const heartClick = () => {
    myHeart.value = !myHeart.value;
    console.log(myHeart); // eslint-disable-line no-console
  };
</script>

<template>
  <div
    class="rounded-md border-8 border-BoardBorder bg-BoardBG px-2 pt-2 text-white shadow-[0_3px_10px_rgb(0,0,0,0.5)]"
  >
    <div class="flex justify-between">
      <div class="text-gray-100">時間</div>
      <a href="javascript:void(0)">
        <img class="h-5" src="/images/three_dots.svg" />
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
          <img class="h-5" src="/images/balloon.svg" />
          <div>12</div>
        </div>
      </a>
      <a href="javascript:void(0)">
        <div class="flex space-x-2">
          <img class="h-5" src="/images/bulb.svg" />
          <div>22</div>
        </div>
      </a>
      <a href="javascript:void(0)" @click="heartClick">
        <div class="flex space-x-2">
          <transition name="bounce" mode="out-in">
            <img v-if="myHeart" class="h-5" src="/images/heart_white.svg" />
            <img v-else class="h-5" src="/images/heart_black.svg" />
          </transition>
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
<style>
  .bounce-enter-active {
    animation: bounce-in 0.5s;
  }
  .bounce-leave-active {
    animation: bounce-in 0.5s reverse;
  }
  @keyframes bounce-in {
    0% {
      transform: scale(0);
    }
    50% {
      transform: scale(1.25);
    }
    100% {
      transform: scale(1);
    }
  }
</style>
