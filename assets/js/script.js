function convertirCelsius(){
	var celsius = parseInt(document.getElementById('celsius').value);
  	var fahrenheit = ((celsius * 1.8) + 32);
  	document.getElementById('fahrenheit').value = fahrenheit;
}

