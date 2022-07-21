<template> 
    <div v-if="movie">

        <h1 class="name"> {{ movie.original_title }}</h1>
        <h2 class="year"> {{ movie.release_date }}</h2>
        <h3 id="genre" v-for="genre in movie.genres" :key="genre.id" >{{ genre.name }}</h3>
        <img class="image" alt="Jurassic World" :src="`https://image.tmdb.org/t/p/w500${movie.poster_path}`"/>
        <h4 class="overview">{{ movie.overview }}</h4>

    </div>
</template>


<script>
import axios from 'axios'
export default {
    name: 'DetailsPage',
    components: {
  },
  data(){
    return{
        movie: null,

    }

  },
  mounted(){
    this.fetchData(this.$route.params.id)
  },
  methods:{
    fetchData(movieId) {
      axios.get(`https://api.themoviedb.org/3/movie/${movieId}`,{ params: { api_key: "acea91d2bff1c53e6604e4985b6989e2" }, })
      .then((response) => {
          this.movie = response.data
        })
    }
   }
}
</script>


<style>

</style>