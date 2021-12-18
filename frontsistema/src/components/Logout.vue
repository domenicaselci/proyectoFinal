<template>
<div>
    <h1 class="display-1 text-center">Logout</h1>
</div>
</template>

<script>
import axios from "axios"
export default {
    //////
  name: 'Logout',
  data() {
      return {
          username: "",
          password: "",
      }
  },
  ///////
  methods: {
      logout() {
        axios({
              url: 'http://127.0.0.1:8000/auth/token/logout/',
              headers : {Authorization : "Token " + this.$store.getters.getToken},
              method: 'POST',
        }).then((response) => {
            this.$store.commit('unLogUser');
            console.log(response.data);
            this.$router.push('/');
        }).catch((error)=> {
            if (error.response) {
              // The request was made and the server responded with a status code
              // that falls out of the range of 2xx
              console.log(error.response.data);
              console.log(error.response.status);
              console.log(error.response.headers);
            } else if (error.request) {
              // The request was made but no response was received
              // `error.request` is an instance of XMLHttpRequest in the browser and an instance of
              // http.ClientRequest in node.js
              console.log(error.request);
            } else {
              // Something happened in setting up the request that triggered an Error
              console.log('Error', error.message);
            }
        });
      },
  },
  mounted() {
      this.logout();
      //
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->