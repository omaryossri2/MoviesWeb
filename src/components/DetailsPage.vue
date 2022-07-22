<template> 
    <div class="details-page" v-if="movie">

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
.detailspage{
   font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
  width:100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  gap: 0.1rem;
}
.overview{
  display: flex;
  flex-wrap: wrap;
  text-align: center;
  width: 100%;
}
.image{
  object-fit: cover;
  align-content: center;
  width: 100%;
}
</style>