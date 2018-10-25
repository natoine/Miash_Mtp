var result ; 
var app_id = "6b803eba" ; 
var app_key = "79b5efc1599e7d80343c1669e67bcd30" ;
var url ='https://api.edamam.com/search?q=chicken&app_id='+app_id+'&app_key='+app_key;
    fetch(url).then(
                    function(response){
                        response.json().then(function(data){result = data})
                        
                
                    }
                )