var result
fetch('https://fr.openfoodfacts.org/api/v0/produit/3029330003533.json').then(
                    function(response){
                        response.json().then(function(data){result = data})
                        
                
                    
                    }
                )
var retour
fetch('https://github.com/openfoodfacts/cordova-app/blob/master/www/off.js').then(
                    function(response){
                        response.json().then(function(data){retour = data})
                        
                
                    
                    }
                )
