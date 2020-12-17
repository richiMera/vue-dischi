var app = new Vue({

  el: "#root",
  data: {

    discs: [],
    genres: [],
    selected: "",
    genreValue: "",
    

  },

  methods: {
    chooseGenre: function() {

    }
  },
  mounted: function() {
    var self = this;
    axios
    .get("https://flynn.boolean.careers/exercises/api/array/music")
    .then(function (result) {

      self.discs = result.data.response
      console.log(result.data.response);

      result.data.response.forEach(
        (element) => {
          if(!self.genres.includes(element.genre))
          self.genres.push(element.genre)
      });
      console.log(self.genres);

    });

  }
});
