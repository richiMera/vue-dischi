var app = new Vue({

  el: "#root",
  data: {

    discs: [],
    genres: [],
    selected: "",
    genreValue: "",


  },

  methods: {
    orderForYears: function ( a, b ) {
    
      if ( a.year < b.year ){
        return -1;
      }
      if ( a.year > b.year ){
        return 1;
      }
      return 0;
    }

  },
  mounted: function() {
    var self = this;
    axios
    .get("https://flynn.boolean.careers/exercises/api/array/music")
    .then(function (result) {

      self.discs = result.data.response;
      self.discs.sort(self.orderForYears)
      console.log(self.discs);

      result.data.response.forEach(
        (element) => {
          if(!self.genres.includes(element.genre))
          self.genres.push(element.genre)
      });
      self.genres.sort();


    });

  }
});
