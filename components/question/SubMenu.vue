<script setup lang="ts">
  import { Question } from '@/types/question';
  defineProps({
    question: {
      type: Object as () => Question,
      default: null,
    },
  });

  const showThreeDotsMenu = ref(false);
  const threeDotsClick = () => {
    showThreeDotsMenu.value = !showThreeDotsMenu.value;
  };
</script>
<template>
  <a href="javascript:void(0)" @click="threeDotsClick">
    <img class="h-5" src="/images/three_dots.svg" />
  </a>
  <transition name="slide-fade-up" mode="out-in">
    <div
      v-if="showThreeDotsMenu"
      class="absolute right-0 bg-white pb-3 pl-1 pr-3 pt-2"
    >
      <div class="flex">
        <div class="pr-2">
          <div
            v-for="i in 7"
            :key="i"
            class="mt-1 h-3 w-3 rounded-full bg-BoardBG"
          ></div>
        </div>
        <ul>
          <li>
            <div class="flex w-full justify-end">
              <a href="javascript:void(0)" @click="threeDotsClick">
                <img class="h-4" src="/images/cross.svg" />
              </a>
            </div>
          </li>
          <li class="mt-2 px-1">
            <a class="text-base text-black" href="#">マイリストに登録する</a>
          </li>
          <li class="h-[1px] w-full bg-cyan-500"></li>
          <li class="px-1">
            <a class="text-base text-black" href="#">フォローする</a>
          </li>
          <li class="h-[1px] w-full bg-cyan-500"></li>
          <li class="px-1">
            <a class="text-base text-black" href="#">ブロックする</a>
          </li>
          <li class="h-[1px] w-full bg-cyan-500"></li>
        </ul>
      </div>
    </div>
  </transition>
</template>
<style>
  .slide-fade-up-enter-active {
    transition: all 0.3s ease-out;
  }

  .slide-fade-up-leave-active {
    transition: all 0.3s cubic-bezier(1, 0.5, 0.8, 1);
  }

  .slide-fade-up-enter-from,
  .slide-fade-up-leave-to {
    transform: translateY(-20px);
    opacity: 0;
  }
</style>
