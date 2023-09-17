<script setup language="ts">
  // TODO(問題表示)
</script>

<template>
  <div>
    <div>くいず詳細</div>
    <div>
      <div class="my-4 flex items-center justify-center">
        <QuestionBoardDefault class="w-1/3" />
      </div>
    </div>
    <div class="mt-10">
      <ButtonDefaultThema
        class="my-2"
        msg="解答１"
        @click="registerButtonClick"
      />
      <ButtonDefaultThema
        class="my-2"
        msg="解答２"
        @click="registerButtonClick"
      />
      <ButtonDefaultThema
        class="my-2"
        msg="解答３"
        @click="registerButtonClick"
      />
    </div>
    <div>
      <ButtonDefaultThema
        class="my-2 mt-10"
        msg="一覧へ戻る"
        @click="registerButtonClick"
      />
    </div>
  </div>
</template>
