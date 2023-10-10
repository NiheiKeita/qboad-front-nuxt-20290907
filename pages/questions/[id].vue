<script setup language="ts">
  // TODO(問題表示)
  const answerButtonClick = (isCorrect) => {
    // TODO(解答正誤処理)
    console.log(isCorrect);
  };
  const question = {
    id: 1,
    name: '解答１',
    question_title: 'question_title',
    question_body: 'question_body',
  };
  const ansers = [
    { id: 1, name: '解答１', is_correct: 1 },
    { id: 2, name: '解答２', is_correct: 0 },
    { id: 3, name: '解答３', is_correct: 0 },
  ];
</script>

<template>
  <div>
    <div>くいず詳細</div>
    <div>
      <div class="my-4 flex items-center justify-center">
        <QuestionBoardDefault class="w-4/5 md:w-1/3" :question="question" />
      </div>
    </div>
    <div class="mt-10">
      <div v-for="(anser, i) in ansers" :key="i">
        <ButtonDefaultThema
          class="my-2"
          :msg="anser.name"
          @click="answerButtonClick(anser.is_correct)"
        />
      </div>
    </div>
    <div>
      <nuxt-link :to="routePathList('question_list')">
        <ButtonDefaultThema
          class="my-2 mt-10"
          msg="一覧へ戻る"
          @click="registerButtonClick"
      /></nuxt-link>
    </div>
  </div>
</template>
