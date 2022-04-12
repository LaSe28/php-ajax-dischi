new Vue({
  el: '#app',
  data: { 
    arrDischi : [],
  },
  created() {
    axios.get('http://localhost:8888/php-ajax-dischi/api.php')
    .then(res => this.arrDischi = res.data)
  }

})