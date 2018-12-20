let countries; //will contain "fetched" data
const countriesList = document.getElementById("countries");
var identifier;
var capital;

fetch("https://restcountries.eu/rest/v2/all")
	.then(res=> res.json())
	.then(data => initialize(data))
	//.then(
	.catch(err => console.log("Error:",err));

function initialize(countriesData){
	countries = countriesData;
	let options = "";
	countries.forEach(country => $('#countries').append(new Option(country.name, country.capital)));

    $(document).ready(function(){
        $('#countries').formSelect();
    });

}

var id_select = document.getElementById("countries");
var id_select = document.getElementById("informations");


function pull_info(id){
	capital = id;
	var vraiNom;
	var continent;
	var monnaie;
	var langue;
	for ( var i = 0 ; i < countries.length ; i++){
		
		if (countries[i].capital == capital){
			
			vraiNom = countries[i].nativeName;
			continent = countries[i].region;
			monnaie = '';
			countries[i].currencies.forEach(function(i){
				monnaie += i.code + ' ' +i.symbol+"\n";
			});
			langue = '';
			countries[i].languages.forEach(function(i){
				langue += i.name+"\n";
			});
			
			if (document.getElementById('capital').childNodes.length == 3){
				
				
				var tr_capital = document.getElementById('capital');
				var td_capital = document.createElement('td');
				var td_content_capital = document.createTextNode(capital);
				td_capital.appendChild(td_content_capital);
				tr_capital.appendChild(td_capital);
				
				var tr_VN = document.getElementById('nativeName');
				var td_VN = document.createElement('td');
				var td_content_VN = document.createTextNode(vraiNom);
				td_VN.appendChild(td_content_VN);
				tr_VN.appendChild(td_VN);
				
				var tr_currencie = document.getElementById('currencies');
				var td_currencie = document.createElement('td');
				var td_content_currencie = document.createTextNode(monnaie);
				td_currencie.appendChild(td_content_currencie);
				tr_currencie.appendChild(td_currencie);
				
				var tr_continent = document.getElementById('region');
				var td_continent = document.createElement('td');
				var td_content_continent = document.createTextNode(continent);
				td_continent.appendChild(td_content_continent);
				tr_continent.appendChild(td_continent);
				
				var tr_langue = document.getElementById('languages');
				var td_langue = document.createElement('td');
				var td_content_langue = document.createTextNode(langue);
				td_langue.appendChild(td_content_langue);
				tr_langue.appendChild(td_langue);
			} else {
				var tr_capital = document.getElementById('capital');
				var next_capital = tr_capital.lastChild;
				next_capital.innerHTML = capital;
				
				var tr_VN = document.getElementById('nativeName');
				var next_VN = tr_VN.lastChild;
				next_VN.innerHTML = vraiNom;
				
				var tr_currencie = document.getElementById('currencies');
				var next_currencie = tr_currencie.lastChild;
				next_currencie.innerHTML = monnaie;
				
				var tr_continent = document.getElementById('region');
				var next_continent = tr_continent.lastChild;
				next_continent.innerHTML = continent;
				
				var tr_langue = document.getElementById('languages');
				var next_langue = tr_langue.lastChild;
				next_langue.innerHTML = langue;
			}
		}
	}
}
