<template>
  <div class="MoviesPage">
    <h1 class="web_title">Movie Website</h1>
    <div class="movies_grid">
      <movie-card class="movie-card" @click.native="ShowDescription(movie.id)" :name="movie.original_title" :date="movie.release_date" v-for="movie in movies" :image="movie.poster_path" :key="movie.id"/>    
    </div>
    <div ref="bottomObserver"></div>
  </div>
</template>

<script>
import MovieCard from './MovieCard.vue'
import axios from 'axios'
export default {
  name: 'MoviesPage',
  components: {
    MovieCard
  },
  data(){
    return {
      movies: [],
      pageNumber: 1,
      observer: null
    };
  },
  mounted() {
    this.InitPosts()
  },
  methods:{
    fetchData(pageNumber) {
      axios.get('https://api.themoviedb.org/3/discover/movie',{ params: { api_key: "acea91d2bff1c53e6604e4985b6989e2", page: pageNumber }, })
      .then((response) => {
          this.movies = [...this.movies, ...response.data.results ]
        })
    },
    ShowDetails(){
      return
    },
    InitPosts(){
      this.observer = new IntersectionObserver((entries) => {
        if (entries[0] && entries[0].isIntersecting) {
          this.fetchData(this.pageNumber);
          this.pageNumber++;
        }
        });

      this.observer.observe(this.$refs.bottomObserver);
    },
    ShowDescription(id){
      this.$router.push({ name: 'DetailsPage', params: {id: id} })
    }
  }
}
</script>

<style scoped>
.MoviesPage{
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
.Movie {
  border: 1px #cccccc solid;
  padding: 4px;
  margin: auto;
}

.MovieDescription {
  background-color: black;
  color: white;
  font-style: italic;
  padding: 2px;
  text-align: center;
}

.movie-card {
  width: 100%;
}
.movies_grid{
  display: grid;
  gap: 0.5rem;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  padding-block: 2rem;
  margin-inline:auto;
  width:100%;
}
</style>
