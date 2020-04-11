(function(){
  $(document).ready(function(){
      $.ajax({
          url: "http://www.json-generator.com/api/json/get/caNuCQTxHC?indent=2",
          type: "GET",
          dataType: "json"

      })
      .done(function(data){
          console.log(data);
          var persona= data
          $("#nombre").val(data.name);
          $("#direccion").val(data.adress);
          $("#telefono").val(data.phone);



      })


  });
 
})();