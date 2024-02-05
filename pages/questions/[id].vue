<script setup lang="ts">
  import { Question } from '@/types/question';
  const isAnswerCorrent = ref();
  const hasAnswered = ref(false);
  const isShowAnswerImage = ref(false);
  const answerButtonClick = (isCorrect: Boolean) => {
    if (hasAnswered.value) {
      return;
    }
    hasAnswered.value = true;
    isAnswerCorrent.value = isCorrect;
    isShowAnswerImage.value = true;
  };
  const hideAnswerImage = () => {
    isShowAnswerImage.value = false;
  };
  const question: Question = testQuestion();
  // const answers: Array<Answer> = [
  //   { id: 1, name: '解答１', is_correct: true },
  //   { id: 2, name: '解答２', is_correct: false },
  //   { id: 3, name: '解答３', is_correct: false },
  // ];
</script>

<template>
  <div>
    <div>
      <div class="my-4 flex items-center justify-center">
        <QuestionBoardDefault class="w-4/5 md:w-1/3" :question="question" />
      </div>
    </div>
    <div class="mt-10">
      <div v-for="(answer, i) in question?.answers" :key="i">
        <ButtonDefaultThema
          class="my-2"
          :msg="answer?.name"
          @click="answerButtonClick(answer?.is_correct)"
        />
      </div>
    </div>
    <div>
      <nuxt-link :to="routePathList('question_list')">
        <ButtonDefaultThema class="my-2 mt-10" msg="一覧へ戻る" />
      </nuxt-link>
    </div>
    <transition v-if="isShowAnswerImage" @click="hideAnswerImage">
      <div
        class="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-40"
      >
        <img v-if="isAnswerCorrent == true" src="/images/solve_correct.png" />
        <img
          v-if="isAnswerCorrent == false"
          src="/images/solve_incorrect.png"
        />
      </div>
    </transition>
  </div>
</template>
