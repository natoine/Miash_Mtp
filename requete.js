


var app_id = "6b803eba" ; 
var app_id2= "55a662da";
var app_key2= "0e75550f965b62fd0210a44797a8e156" ;
var app_key = "79b5efc1599e7d80343c1669e67bcd30" ;
var url ='https://api.edamam.com/search?q=Pasta&app_id='+app_id+'&app_key='+app_key;
var url2= 'https://api.edamam.com/api/food-database/parser?ingr=pasta&app_id='+app_id2+'&app_key='+app_key2;
    fetch(url2).then( function(response){
                        return response.json();}).then(function(results){
                               
                                console.log(results);
                                
                            
                        }                   
                        )
                        
                    
                    
                    
                
