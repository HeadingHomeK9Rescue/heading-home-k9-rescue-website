function newImage(arg) {

	if (document.images) {

		rslt = new Image();

		rslt.src = arg;

		return rslt;

	}

}



function changeImages() {

	if (document.images && (preloadFlag == true)) {

		for (var i=0; i<changeImages.arguments.length; i+=2) {

			document[changeImages.arguments[i]].src = changeImages.arguments[i+1];

		}

	}

}



var preloadFlag = false;

function preloadImages() {

	if (document.images) {

		btn_donate_over = newImage("images/btn_donate_over.jpg");

		preloadFlag = true;

	}

}



function openWindow(theURL,winName,features)

	{

	window.open(theURL,winName,features).focus();

	}



function closeWindow()

	{

	window.close();

	}

	

function date()

	{

	this.length = date.arguments.length

	for (var i = 0; i < this.length; i++)

	this[i+1] = date.arguments[i]

	}

var lastupdated = new Date(document.lastModified);

var yearModified = lastupdated.getYear();

if (yearModified<2000)

	{

	yearModified+=1900;

	}



function getDateModified()

	{

	document.write((lastupdated.getMonth()+1)+"-");

	document.write(lastupdated.getDate()+"-"+yearModified);

	}

	

function randomLogo()

	{

	logo_num=Math.ceil(Math.random()*6);

	if (logo_num<1)

		{

		logo_num=1;

		}

	else if (logo_num>6)

		{

		logo_num=6;

		}

	document.writeln('<div><a href="index.html"><img src="images/logogoomba2.jpg" width="135" height="120" alt="Logo" border="0" /></a></div>');

	}



function openEnlarged(imageLoc,imageWidth,imageHeight,altText)

	{

	newWindow = window.open('','newWindow','menubar=no,scrollbars=yes,resizable=no,width=440,height=530');

	newWindow.focus();

	newWindow.document.writeln ('<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "DTD/xhtml1-transitional.dtd">');

	newWindow.document.writeln ('<html xmlns="http://www.w3.org/1999/xhtml" xml:lang="en" lang="en">');

	newWindow.document.writeln ('<head>');

	newWindow.document.writeln ('<title>Enlarged Image of '+altText+'</title>');

	newWindow.document.writeln ('<meta name="title" content="Homeward Bound Dog Rescue: Minnesota" />');

	newWindow.document.writeln ('<meta http-equiv="Content-Type" content="text/html; charset=iso-8859-1" />');

	newWindow.document.writeln ('<link href="styles.css" rel="stylesheet" />');

	newWindow.document.writeln ('<style type="text/css">body {background-image:none; background-color:#e6e7d9;}</style>');

	newWindow.document.writeln ('<script language="javascript" type="text/javascript">function closeWindow(){window.close();}</scr' + 'ipt\>');

	newWindow.document.writeln ('</head>');

	newWindow.document.writeln ('<body bgcolor="#e6e7d9">');

	newWindow.document.writeln ('<div align="center" style="padding-top:8px;"><table cellpadding="2" cellspacing="0" border="0">');

	newWindow.document.writeln ('	<tr>');

	newWindow.document.writeln ('		<td valign="top" bgcolor="#000000"><div align="center"><img name="enlarge" src="images/'+imageLoc+'.jpg" width="'+imageWidth+'" height="'+imageHeight+'" alt="Enlarged Image of '+altText+'" border="0" hspace="0" vspace="0"></div>');

	newWindow.document.writeln ('		<div class="whitecaption" align="center"><strong>Enlarged Image of '+altText+'</strong></div></td>');

	newWindow.document.writeln ('	</tr>');

	newWindow.document.writeln ('</table></div>');

	newWindow.document.writeln ('<p align="center"><a href="#" onclick="closeWindow(); return false;" onkeypress="closeWindow(); return false;">Close Window</a>&nbsp;&nbsp;</p>');

	newWindow.document.writeln ('</body>');

	newWindow.document.writeln ('</html>');

	newWindow.document.close();

	}

	

function openGeneralInfo(textToUse)

	{

	newWindow = window.open('','newWindow','menubar=no,scrollbars=yes,resizable=no,width=440,height=530');

	newWindow.focus();

	newWindow.document.writeln ('<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "DTD/xhtml1-transitional.dtd">');

	newWindow.document.writeln ('<html xmlns="http://www.w3.org/1999/xhtml" xml:lang="en" lang="en">');

	newWindow.document.writeln ('<head>');

	newWindow.document.writeln ('<title>General Info</title>');

	newWindow.document.writeln ('<meta name="title" content="Homeward Bound Dog Rescue: Minnesota" />');

	newWindow.document.writeln ('<meta http-equiv="Content-Type" content="text/html; charset=iso-8859-1" />');

	newWindow.document.writeln ('<link href="styles.css" rel="stylesheet" />');

	newWindow.document.writeln ('<style type="text/css">body {background-image:none; background-color:#e6e7d9;}</style>');

	newWindow.document.writeln ('<script language="javascript" type="text/javascript">function closeWindow(){window.close();} function updateParentUrl(url_location){window.opener.location.href=url_location;}</scr' + 'ipt\>');

	newWindow.document.writeln ('</head>');

	newWindow.document.writeln ('<body bgcolor="#e6e7d9">');

	newWindow.document.writeln ('<div style="padding:8px;">');

	newWindow.document.writeln ('	<div class="small">'+textToUse+'</div>');

	newWindow.document.writeln ('	<p align="center"><a href="#" onclick="closeWindow(); return false;" onkeypress="closeWindow(); return false;">Close Window</a>&nbsp;&nbsp;</p>');

	newWindow.document.writeln ('</div>');

	newWindow.document.writeln ('</body>');

	newWindow.document.writeln ('</html>');

	newWindow.document.close();

	}



function donateButton()

	{

	window.open('https://www.paypal.com/cgi-bin/webscr&cmd=_s-xclick&hosted_button_id=3VQFNZGP5F4EE');

	}