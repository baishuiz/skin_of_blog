;(function(){
	document.body.innerHTML = '';
	document.body.style.display="block";

	var ptag = document.createElement('p');
	ptag.style.cursor = 'default';
	ptag.style.fontSize = '8em';
	ptag.style.textShadow = '2px 3px 7px #333';
	ptag.style.marginTop = '-60px';
	ptag.style.position = 'absolute';
	ptag.style.top = '50%';
	ptag.style.left = 0 ;
	ptag.style.width = '100%';
	ptag.style.textAlign = 'center';

	ptag.innerHTML = 'To be continue...';
	document.body.appendChild(ptag);
	
})();