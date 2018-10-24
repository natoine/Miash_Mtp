var result
    fetch('https://fr.openfoodfacts.org/api/v0/produit/3029330003533.json').then(
                    function(response){
                        response.json().then(function(data){result = data})
                        
                
                    }
                )