//global variables
let countries; //will contain "fetched" data

/*fetch("https://restcountries.eu/rest/v2/all")
.then(function(res){
	//console.log(res.json());
	return res.json();
})
.then(function(data){
	//console.log(data);
	initialize(data);
})
.catch(function(err){
	console.log("Error:",err);
});
*/ 
fetch("https://restcountries.eu/rest/v2/all")
.then(res=> res.json())
.then(data => initialize(data))
.catch(err => console.log("Error:",err));

function initialize(countriesData){
	countries = countriesData;
	let options = "";
	for (let i = 0; i<countries.length ; i++){
		options += `<option value="` + countries[i].alpha3Code + `">` +countries[i].name + `</option>`;
	}
	document.getElementById("countries").innerHTML = options;
}
