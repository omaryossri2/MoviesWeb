<template>
  <div class="movie">
    <img class="movie_image" alt="Jurassic World" :src="`https://image.tmdb.org/t/p/w500${image}`"/>
    <h1 class="movie_desc">{{name}}</h1>
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
    }
    .movie_image {
        object-fit: cover;
        align-content: center;
        width: 100%;
        /* width: 100%; */
    }
    .movie_desc {
        background-color: white;
        color: black;
        font-style: Bold;
        text-align: center;
        font-size: 1.2rem;
    }

</style>
