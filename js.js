var result
<<<<<<< HEAD
<<<<<<< HEAD
fetch('https://nominatim.openstreetmap.org/search?q=paris&format=json').then(
        function(response){
            response.json().then(function(data){result = data})
        }
    )
=======
=======
>>>>>>> 5268b0dbfe9f9450e8cb925e9bb4b0944aa915d2
    fetch('https://fr.openfoodfacts.org/api/v0/produit/3029330003533.json').then(
                    function(response){
                        response.json().then(function(data){result = data})
                        
                
                    }
                )
>>>>>>> 5268b0dbfe9f9450e8cb925e9bb4b0944aa915d2
