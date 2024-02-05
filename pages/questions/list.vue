<script setup lang="ts">
  // TODO:問題一覧APIをたたく
  import { Question } from '@/types/question';

  const questions: Array<Question> = testQuestions();
</script>

<template>
  <div>
    <div
      v-for="(question, i) in questions"
      :key="i"
      class="my-4 flex items-center justify-center"
    >
      <QuestionBoardDefault class="w-4/5 md:w-1/3" :question="question" />
    </div>
  </div>
</template>
