function start(){
    var api_id='24f9c415';
    var api_key='3ff60336a3e742b67643d7943f993434';
    var url='http://api.yummly.com/v1/api/recipes?_app_id='+api_id+'&_app_key='+api_key+'q=onion';
    console.log('dsv');
    fetch(url)
    .then(function(response) {
        response.json().then(function(data){
    //resulteb page: ${text}`
        console.log(data);
  });

    
    
    
    
    
});
};