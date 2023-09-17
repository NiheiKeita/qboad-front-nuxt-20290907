<script setup language="ts">
  const handleClick = () => {
    return navigateTo({
      path: routePathList('register_complete'),
    });
  };
  const inputChange = () => {};
  const nameRef = ref('a');
  const emailRef = ref('s');
  const passwordRef = ref('f');
</script>

<template>
  <div>
    <div class="mt-10 flex items-center justify-center text-3xl font-bold">
      <p>新規登録</p>
      <p>{{ emailRef }}</p>
    </div>
    <div class="flex items-center justify-center">
      <div class="w-1/3">
        <div class="mt-5 flex items-center justify-center">
          <InputDefaultArea
            v-model="nameRef"
            display="名前"
            name="name"
            @change-emit="inputChange"
          />
        </div>
        <div class="mt-5 flex items-center justify-center">
          <InputDefaultArea
            v-model="emailRef"
            display="メールアドレス"
            name="email"
          />
        </div>
        <div class="mt-5 flex items-center justify-center">
          <InputDefaultArea
            v-model="passwordRef"
            display="パスワード"
            name="password"
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
