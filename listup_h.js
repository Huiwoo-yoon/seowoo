var ListUp = {
          hhClothe: function() {
              var i = 0;
              while (i < hh_clothe.length) {
                  document.write('<input type="checkbox" />' + hh_clothe[i] + '<input type="checkbox" /><br/>');
                  i = i + 1
              }
          },
          hhElse: function(){
              var i = 0;
              while (i < hh_else.length) {
                  document.write('<input type="checkbox" />' + hh_else[i] + '<input type="checkbox" /><br/>');
                  i = i + 1
              }
          }
          }