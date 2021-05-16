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

		}else {
			tab[i].style.display='none';
		}
	}
}


function openTab(evt, section) {
	for(t of document.getElementsByClassName('tablink'))
	{
		t.className="tablink";
	}
	show(section);
	evt.target.className+=" active"
}
function start( section )
{
   document.getElementsByClassName("tablink")[0].click()
}


