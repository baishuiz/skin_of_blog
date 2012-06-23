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


/* 云 */
    
    var cloud = document.createElement('img');
    cloud.src = 'http://pic.yupoo.com/baishuiz_v/C3TLk3Pb/R1vT1.png';
    cloud.style.display = 'absolute';
    document.body.appendChild(cloud);

})();