<script setup language="ts">
  const handleClick = () => {
    console.log('nihei'); // eslint-disable-line no-console
    return navigateTo({
      path: routePathList('register_input'),
    });
  };
</script>

<template>
  <div>
    <div class="justify-center">
      <ButtonDefaultThema class="my-2" msg="新規登録" @click="handleClick" />
      <ButtonDefaultThema class="my-2" msg="ログイン" />
    </div>
  </div>
</template>
