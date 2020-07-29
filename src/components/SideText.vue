<template>
  <div class="info">
    <div class="text">
      <p> Lorem ipsum dolor sit amet consectetur, adipisicing elit. Assumenda repudiandae commodi quo placeat eum, beatae facere recusandae, quod possimus asperiores deleniti! Alias voluptatum, perspiciatis minima exercitationem assumenda perferendis numquam nisi.</p>
      <h1></h1>
    </div>
  </div>
</template>

<script>

export default {
  name: 'SideText',
  components: {
  },
  props: {
    theme: String
  }
}
</script>

<style scoped>
.info {
  display: grid;
  width: 100%;
  height: 100%;
}

.text {
  margin: auto;
}

</style>