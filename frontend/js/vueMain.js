 var vm = new Vue({
     el: "#main",
     data: {
         enterNum: 5,
     },
     mounted: function() {
         axios.get('/api/pjson')
             .then(function(response) {
                 if (response.data.status) {
                     vm.enterNum = response.data.enterNum;
                 }
             })
             .catch(function(error) {
                 console.log(error);
             });

     },
     methods: {
        

     }
 });
