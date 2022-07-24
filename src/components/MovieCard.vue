<template>
  <div class="movie">
    <img class="movie_image" alt="Jurassic World" :src="`https://image.tmdb.org/t/p/w500${image}`"/>
    <h1  v-line-clamp:20="2" class="movie_desc">{{name}}</h1>
    <h2 class="movie_desc">{{ date }}</h2>
  </div>
</template>

<script>

export default {
  name: 'MovieCard',
  props: ["name","date","image"],
  components: {
  }
}
</script>

<style scoped>
    .movie{
      cursor : pointer;
      border: 2px solid white;
      border-radius: 0.2rem;
      background-color: #fff;
    }
    .movie_image {

        object-fit: cover;
        align-content: center;
        width: 100%;
        /* width: 100%; */
    }
    .movie_desc {

        color: black;
        font-style: Bold;
        text-align: center;
        font-size: 1.2rem;
        word-break: break-word !important;
    }

</style>
