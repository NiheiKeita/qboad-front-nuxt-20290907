<template>
  <div>
    <p class="bg-transparent">LP</p>
    <button @click="handleClick">Coupon Get</button>
    <div>
      <img src="/images/icon_web.png" alt="Nuxt3 Icon" />
    </div>
    <TopCoupon v-if="show" />
    <div>Count:{{ count }}</div>
    <button @click="() => inc()">increase</button>
    <button @click="() => dec()">decrease</button>
  </div>
</template>

<script setup language="ts">
  const show = ref(false);

  const handleClick = () => {
    console.log('nihei'); // eslint-disable-line no-console
    show.value = true;
  };
  const { count, inc, dec } = useCounter(100);
</script>
