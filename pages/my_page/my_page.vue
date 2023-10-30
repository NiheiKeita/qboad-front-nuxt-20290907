<script setup language="ts">
  // TODO(問題表示)

  const questions = [
    {
      id: 1,
      name: '解答１',
      question_title: 'question_title',
      question_body: 'question_body',
    },
    {
      id: 1,
      name: '解答１',
      question_title: 'question_title',
      question_body: 'question_body',
    },
    {
      id: 1,
      name: '解答１',
      question_title: 'question_title',
      question_body: 'question_body',
    },
  ];
  const select = ref('post');
  const profileEditClick = () => {};
  const createQuestionClick = () => {};
  const tabClick = (tabName) => {
    console.log(tabName);
    select.value = tabName;
  };
</script>

<template>
  <div class="md:mx-[20%]">
    <div class="my-4 flex items-center justify-center">マイページ</div>
    <div class="my-4 flex items-center justify-center">フォロワーとか</div>
    <div class="my-4 flex items-center justify-center">ID</div>
    <div class="my-4 flex items-center justify-evenly">
      <ButtonDefaultThema
        msg="プロフィールを編集する"
        @click="profileEditClick"
      />
      <ButtonDefaultThema msg="投稿する" @click="createQuestionClick" />
    </div>
    <div class="my-4 flex items-center justify-center">
      <div class="flex h-10 w-full">
        <ButtonTabDefault
          msg="投稿"
          :select="select == 'post'"
          @click="tabClick('post')"
        />
        <ButtonTabDefault
          msg="履歴"
          :select="select == 'history'"
          @click="tabClick('history')"
        />
        <ButtonTabDefault
          msg="マイリスト"
          :select="select == 'mylist'"
          @click="tabClick('mylist')"
        />
        <ButtonTabDefault
          msg="保存"
          :select="select == 'save'"
          @click="tabClick('save')"
        />
      </div>
    </div>
    <div>
      <div
        v-for="(question, i) in questions"
        :key="i"
        class="my-4 flex items-center justify-center"
      >
        <QuestionBoardDefault class="w-4/5 md:w-1/2" :question="question" />
      </div>
    </div>
  </div>
</template>
