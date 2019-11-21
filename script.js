function myFunction() {
  var demo = document.getElementById("demo").value;
  var n = demo.length;
  document.getElementById("resultat").innerHTML = n;



  var nospace = document.getElementById('demo').value;             
	nospace = nospace.replace(/[ ]/g,"").length;             
	document.getElementById('resultat').innerHTML = nospace;
}

