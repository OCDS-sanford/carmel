function log ( p )
{
	console.log(p);
}

var shown="";
function show ( section )
{
	tab= document.getElementsByClassName("tabcontent");
	for(i=0;i<tab.length;i++)
	{
		if ( tab[i].id== section )
		{
			tab[i].style.display='block';
			tab[i].className+=" active " ;

		}else {
			tab[i].replace(" active ", "") ;
			tab[i].style.display='none';
		}
	}
}


function openTab(evt, section) {
log("opeTab");
  show(section);
}


log("Loaded scrip01.js");