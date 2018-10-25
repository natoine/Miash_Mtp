<<<<<<< HEAD
var result ; 
var app_id = "6b803eba" ; 
var app_key = "79b5efc1599e7d80343c1669e67bcd30" ;
var url ='https://api.edamam.com/search?q=chicken&app_id='+app_id+'&app_key='+app_key;
    fetch(url).then(
=======
var result
fetch('https://fr.openfoodfacts.org/api/v0/produit/3029330003533.json').then(
>>>>>>> fb3029a6bc1323316b987931bdd2a2286393682c
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
