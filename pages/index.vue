<script setup language="ts">
  // const { count, inc, dec } = useCounter(100);
  // const route = routePathList();
  // const show = ref(false);
  // const navigate = () => {
  //   return navigateTo({
  //     path: '/about',
  //   });
  // };
  const handleClick = () => {
    console.log('nihei'); // eslint-disable-line no-console
    // show.value = true;

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
    <!-- <button @click="handleClick">Coupon Get</button> -->
    <!-- <div>
      <img src="/images/icon_web.png" alt="Nuxt3 Icon" />
    </div> -->
    <!-- <TopCoupon v-if="show" />
    <div>Count:{{ count }}</div>
    <button @click="() => inc()">increase</button>
    <button @click="() => dec()">decrease</button> -->
  </div>
</template>
