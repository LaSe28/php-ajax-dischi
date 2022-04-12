new Vue({
  el: '#app',
  data: { 
    arrDischi : [],
    arrGen: null

  },
  methods: {
    changedValue () {
      let genValue = document.querySelector('#gen').value

      this.arrGen = []
      this.arrDischi.forEach(element => {
        if(element.genre.toLowerCase() === genValue.toLowerCase()){
          this.arrGen.push(element)
          console.log(this.arrGen)
        } else if (genValue === 'all'){
          this.arrGen.push(element)
        }
      });
    }
  },
  created() {
    axios.get('http://localhost:8888/php-ajax-dischi/api.php')
    .then(res => this.arrDischi = res.data);
  }

})