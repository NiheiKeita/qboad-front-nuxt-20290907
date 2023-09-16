<script setup language="ts"></script>

<template>
  <div>
    <div class="mt-10 flex items-center justify-center text-3xl font-bold">
      <p>新規登録</p>
    </div>
    <div class="flex items-center justify-center">
      <div class="w-1/3">
        <div class="mt-5 flex items-center justify-center">
          <InputDefaultArea display="名前" name="name" @click="handleClick" />
        </div>
        <div class="mt-5 flex items-center justify-center">
          <InputDefaultArea
            display="メールアドレス"
            name="email"
            @click="handleClick"
          />
        </div>
        <div class="mt-5 flex items-center justify-center">
          <InputDefaultArea
            display="パスワード"
            name="password"
            @click="handleClick"
          />
        </div>
        <ButtonDefaultThema
          class="my-2 mt-10"
          msg="登録する"
          @click="handleClick"
        />
      </div>
    </div>
  </div>
</template>
