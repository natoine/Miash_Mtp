let countries; //will contain "fetched" data
const countriesList = document.getElementById("countries");

fetch("https://restcountries.eu/rest/v2/all")
	.then(res=> res.json())
	.then(data => initialize(data))
	.catch(err => console.log("Error:",err));

function initialize(countriesData){
	countries = countriesData;
	let options = "";
	countries.forEach(country => $('#countries').append(new Option(country.name, country.alpha3Code)));

    $(document).ready(function(){
        $('#countries').formSelect();
    });
}