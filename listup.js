var ListUp = {
          seowooFood: function() {
              var i = 0;
              while (i < seowoo_food.length) {
                  document.write('<input type="checkbox" />' + seowoo_food[i] + '<input type="checkbox" /><br/>');
                  i = i + 1
              }
          },
          seowooClothe: function(){
              var i = 0;
              while (i < seowoo_clothe.length) {
                  document.write('<input type="checkbox" />' + seowoo_clothe[i] + '<input type="checkbox" /><br/>');
                  i = i + 1
              }
          },
        
        seowooElse: function(){
                  var i = 0;
                  while (i < seowoo_else.length) {
                      document.write('<input type="checkbox" />' + seowoo_else[i] + '<input type="checkbox" /><br/>');
                      i = i + 1
                  }
              }

          }