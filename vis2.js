var vg_1 = "Bubble_chart_GDP_CO2.json";

vegaEmbed("#bubble_chart", vg_1).then(function(result) {
// Access the Vega view instance
 //https://vega.github.io/vega/docs/api/view/) as result.view

    }) .catch(console.error);
    var vg_2="chloropeth.json";
vegaEmbed("#world_map", vg_2).then(function(result) {
      // Access the Vega view instance
       //https://vega.github.io/vega/docs/api/view/) as result.view
      
          }) .catch(console.error);
          var vg_3="World_Energy_trend.json"
          vegaEmbed("#pie_chart", vg_3).then(function(result) {
            // Access the Vega view instance
             //https://vega.github.io/vega/docs/api/view/) as result.view
            
                }) .catch(console.error);
                var vg_4="Top_20_countries.json"
                vegaEmbed("#work_chart", vg_4).then(function(result) {
                  // Access the Vega view instance
                   //https://vega.github.io/vega/docs/api/view/) as result.view
                  
                      }) .catch(console.error);
                      var vg_5="pie-chart.json"
                      vegaEmbed("#small_multiples", vg_5).then(function(result) {
                        // Access the Vega view instance
                         //https://vega.github.io/vega/docs/api/view/) as result.view
                        
                            }) .catch(console.error);
      

