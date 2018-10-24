var result
                fetch('https://nominatim.openstreetmap.org/search?q=paris&format=json').then(
                    function(response){
                    response.json().then(function(data){result = data})
                    }
                )