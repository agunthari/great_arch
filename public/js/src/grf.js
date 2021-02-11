var isIE4, isNS4, isNS6;
isIE4Plus = document.all;
isNS4 = document.layers;
isNS6 = ( document.getElementById && !document.all );

var rollover = new Array();

var popup;

function preloadImages() {
	if (document.images) {
		var dirPrefix = "";
		var i = 0;
		var updir = preloadImages.arguments[0];
		var imgFiles = preloadImages.arguments;
	
		var dirPrefix = "";
		for ( i=0; i<updir; i++ ) {
			dirPrefix = dirPrefix + "../../";
		}
	
		var names = new Array();
		with (document) for (var j=1; j<imgFiles.length; j++) {
			up = imgFiles[j] + "_up";
			over = imgFiles[j] + "_over";

			rollover[up] = new Image();
			rollover[up].src = dirPrefix + "/images/" + up + ".gif";

			rollover[over] = new Image();
			rollover[over].src = dirPrefix + "/images/" + over + ".gif";
							
		}  //end for		
	}  // end if
}  // end preloadImages


function select(imgName,lyrName) {
	if (isNS4 && select.arguments[1] && document.images) {
		imgSelect = imgName + "_over";
		document.layers[lyrName].document[imgName].src = rollover[imgSelect].src;
	} else if (document.images) {
		imgSelect = imgName + "_over";
		document[imgName].src = rollover[imgSelect].src;
	}
}


function deselect(imgName,lyrName) {
	if (isNS4 && deselect.arguments[1] && document.images) {
		imgDeselect = imgName + "_up";
		document.layers[lyrName].document[imgName].src = rollover[imgDeselect].src;
	} else if (document.images) {
		imgDeselect = imgName + "_up";
		document[imgName].src = rollover[imgDeselect].src;
	}
}


function MM_findObj(n, d) { //v4.01
  var p,i,x;  if(!d) d=document; if((p=n.indexOf("?"))>0&&parent.frames.length) {
    d=parent.frames[n.substring(p+1)].document; n=n.substring(0,p);}
  if(!(x=d[n])&&d.all) x=d.all[n]; for (i=0;!x&&i<d.forms.length;i++) x=d.forms[i][n];
  for(i=0;!x&&d.layers&&i<d.layers.length;i++) x=MM_findObj(n,d.layers[i].document);
  if(!x && d.getElementById) x=d.getElementById(n); return x;
}

function MM_showHideLayers() { //v3.0
  var i,p,v,obj,args=MM_showHideLayers.arguments;
  for (i=0; i<(args.length-2); i+=3) if ((obj=MM_findObj(args[i]))!=null) { v=args[i+2];
    if (obj.style) { obj=obj.style; v=(v=='show')?'visible':(v='hide')?'hidden':v; }
    obj.visibility=v; }
}

// Alec added these, check if modifying

function popClose() {
	// close popup if it already exists
	if (window.opener) {
		self.close();
		} else if (window['pop_up']) {
			if (!window['pop_up'].closed) window['pop_up'].close();
		}
	}

function popUp(URL) {
	popClose();
	var opts = "width=640,height=470,scrollbars=1,location=0,menubar=0,resizable=1,dependent=1";
	popup = window.open(URL,"pop_up",opts,"1");
	}

function popSend(URL) {
	if (window.opener) {
		// we are in the popup, send opener where we want to, then close
		opener.location = URL;
		popClose();
		} else {
		// we are in the main window, close popup then go to URL
		popClose();
		self.location = URL;
		}
	}
	
function afficheMenuItem( id ){
	//alert(document.getElementById(id).nodeValue);
	//alert(document.getElementById(id).getClass());
	itemNode = document.getElementById(id);
	par = itemNode.parentNode;
	//alert(itemNode.getAttribute("type") + " id== " + itemNode.getAttribute("id"));
	//alert("nodename " + par.nodeName + "parent = " + par.getAttribute("type") + " id == " + par.getAttribute("id"));


	if( itemNode.getAttribute( "type") == "article"){
		chapitre = par;
		partie = par.parentNode; //remonte jusqu'a partie
		cacheChapitre( chapitre );
		cacheArticle();
	}else if( itemNode.getAttribute( "type") == "chapitre") {
		partie = par; 
		cachePartie( partie );

	}
	//alert("partie = " + partie.getAttribute("type") + " id == " + partie.getAttribute("id"));

	childList = par.childNodes;
	for( x = 0; x < childList.length; x++ ){
		if( childList[x].nodeName == "DIV"){
			idChapitre = childList[x].getAttribute("id");
			if( idChapitre == id ){
				//alert( id + " == " + childList[x].style.display + " node id =  " + childList[x].getAttribute("id")  + " " + childList[x].getAttribute("type"));
				//alert(childList[x].getAttribute("selected"));
				if( childList[x].getAttribute("selected") == "non"){
					childList[x].style.display = "none";
					childList[x].setAttribute("selected", "oui");
				}
				if(childList[x].style.display == "block") childList[x].style.display = "none";
				else childList[x].style.display = "block";
				//childList[x].style.display = "block";
				
					//childList[x].style.display == "block";
				fichierNodes = childList[x].childNodes;
				fichierNodes[0].style.display ="block";

						//alert(fichierNodes[0].nodeName + x);


				if(childList[x].getAttribute("type") == "article"){

					afficheArticle( childList[x]);
					//alert("test");
					//alert( childList[x].getAttribute("type") + "nodename = "+ childList[x].nodeName);
					
				}
			} else childList[x].style.display = "none";		
		
		}		
	
	}

	//if( itemNode.style.display == "block") itemNode.style.display = "none";
	//else itemNode.style.display = "block";
	//document.getElementById(id).style.display="block";

}

function cacheChapitre( chapitre ) {
	divList = document.getElementsByTagName( "DIV");
	for( k = 0; k < divList.length; k++ ){
		unChapitre = divList[k];
	
		if( unChapitre.getAttribute("type") == "chapitre" && chapitre.getAttribute("id") != unChapitre.getAttribute("id") ) {
			//alert( "ssss == " + unChapitre.getAttribute("id"));
			unChapitre.style.display = "none";
		}
	}

}

function cachePartie( partie ) {
	divList = document.getElementsByTagName( "DIV");
	//alert("partie id =========== "+ partie.getAttribute("id") + partie.style.display );

	for( k = 0; k < divList.length; k++ ){
		unPartie = divList[k];
		if( unPartie.getAttribute("type") == "partie" && partie.getAttribute("id") != unPartie.getAttribute("id") ) {

			childList = unPartie.childNodes;
			for( x = 0; x < childList.length; x++ ) {
				if( childList[x].nodeName == "DIV") childList[x].style.display = "none";

			}

		}
	}

}

function cacheArticle(){
	divList = document.getElementsByTagName( "DIV");
	for( k = 0; k < divList.length; k++ ){
		unArticle = divList[k];
	
		if( unArticle.getAttribute("type") == "article") {
			childList = unArticle.childNodes;
			for( x = 0; x < childList.length; x++ ) {
				childList[x].style.display = "none";
			}

		}
	}
}

function afficheTouteArticle(){

	divList = document.getElementsByTagName( "DIV");
	for( k = 0; k < divList.length; k++ ){
		unArticle = divList[k];
	
		if( unArticle.getAttribute("type") == "article") {
			childList = unArticle.childNodes;
			for( x = 0; x < childList.length; x++ ) {
				childList[x].style.display = "block";
			}

		}
	}
}

function cacheFichier(){
	divList = document.getElementsByTagName( "TABLE");
	for( k = 0; k < divList.length; k++ ){
		unArticle = divList[k];
	
		if( unArticle.getAttribute("type") == "fichier") {
			childList = unArticle.childNodes;

			for( x = 0; x < childList.length; x++ ) {
				childList[x].style.display = "none";
			}

		}
	}
}

function afficheArticle( chapitre) {
	chapitre.style.display = "block";
	childList = chapitre.childNodes;
	for( x = 0; x < childList.length; x++ ) {
		//alert( childList[x].getAttribute("type") + "nodename = "+ childList[x].nodeName);
		childList[x].style.display = "block";
	}
	

}

function inverse(type,id) {
	//alert( type);
	prefixPlus = type + "plus";
	prefixMoins = type + "moins";

	moins = document.getElementById(prefixMoins+ id);
	plus = document.getElementById(prefixPlus+ id);
	
	if( type == "partie")cacheArticle(); //cache les articles des autres parties
	
	if( plus.style.display == "none" ) {
		plus.style.display = "block";
		cacheArticle(); //niveau chapitre
	
	} else {
		plus.style.display = "none";
	}

	if( moins.style.display == "none" ) moins.style.display = "block";
	else moins.style.display = "none";		
	
	k=0;
	isAllDone = false;
	//alert("id == " + id);
	while( !isAllDone ){
		if( k != id ){
			moins = document.getElementById(prefixMoins+ k);
			if( moins != null){
				plus = document.getElementById(prefixPlus + k);
				moins.style.display = "none";
				plus.style.display = "block";
				
			} else isAllDone = true;
		}
		
		if( type == "partie" && k == id ) {
		//alert('partie ' + id );
			
		
			chapitrePrefixMoins = "chapitremoins";
			chapitrePrefixPlus  = "chapitreplus";
			p = 0;
			isAllChapitreDone = false;
			while( !isAllChapitreDone ){
			//alert("ferme les chap");
				moinsChapitre = document.getElementById(chapitrePrefixMoins+ p);
				if( moinsChapitre != null ){
					plusChapitre = document.getElementById(chapitrePrefixPlus + p );
					moinsChapitre.style.display = "none";
					plusChapitre.style.display = "block";
					
				} else isAllChapitreDone = true;			
				p = p + 1;	
			}

		} 

		k = k + 1;	
		//alert("k=== "+ k);
	}

}

function addBookmark(title,url) {
	if (window.sidebar) { 
		window.sidebar.addPanel(title, url,""); 
	} else if( document.all ) {
		window.external.AddFavorite( url, title);
	} else if( window.opera && window.print ) {
		return true;
	}
}

	//pour l'optimisation de la moteur de la recherche
	// validation du formulaire
$(document).ready(function() { 	
	//$('.site_header_bt_valider').click(function() {
	//pour corriger le problÃ¨me de interface.js
	$.curCSS = function (element, attrib, val) {
	    $(element).css(attrib, val);
	};			
	$('#simple_recherche').submit(function() {
		//alert($.trim($('#site_header_recherche').val()));
		if($.trim($('#site_header_recherche').val()) == '' || $.trim($('#site_header_recherche').val()) == "Rechercher ..." ){
			alert('Veuillez renseigner le champ de recherche' );
			return false;
		} 	  

		if($.trim($('#site_header_recherche').val()) == $.trim($('#q_old').val())){
			alert("Veuillez modifier les critÃ¨res afin de relancer la recherche.");
			return false;
		}
		desactive();
		//$('.site_header_valider').attr('disabled', 'disabled');
		//$('#simple_recherche').submit();
		
	});		

	
});

//print function
$(document).ready(function() {

	
	$("a#pt_print").click(function(){
	  //alert($("div.printable").html());
	  $("div#printable").printArea({mode:"popup"});
	    return false;
	});
	
	

	//pour les flashs
	$("a#edition_print").click(function(){
	  //alert($("td.site_menu_page_corps").html());
	  //alert($("p.titre").css("color"));
	  var colorTexte = $("p.titre").css("color");
	  $("p.titre").css("color", "#33333");
	  $("td[align='right']").hide();
	  $("td.site_menu_page_corps").printArea({mode:"popup"});
	  $("td[align='right']").show();
	  $("p.titre").css("color", colorTexte );
	    return false;
	});	

	$("a#rfedition_print").click(function(){
	  //alert($("div#centre_produit").html());
	  //alert($("p.titre").css("color"));
	  var colorTexte = $("p.titre").css("color");
	  $("p.titre").css("color", "#33333");
	  $("div.site_page_entete_droite_conteneur").hide();

	//var options = { mode : mode, popClose : close, extraCss : extraCss, retainAttr : keepAttr, extraHead : headElements };
	var headElements = '<meta http-equiv="X-UA-Compatible" content="IE=edge"/>';
	var mode = 'popup';
	  if( $("td.site_menu_page_corps").length > 0){ 
	  	$("td.site_menu_page_corps").printArea({mode:mode});
	  }else {
	  	$("div#centre_produit").printArea({mode:mode,extraHead : headElements });
	  }
	  
	  

	  $("div.site_page_entete_droite_conteneur").show();
	  $("p.titre").css("color", colorTexte );
	    return false;
	});	

	$("a#code_compare_print").click(function(){
	  //alert($("div#centre_produit").html());
	  //alert($("p.titre").css("color"));
	  var colorTexte = $("p.titre").css("color");
	  $("p.titre").css("color", "#33333");
	  $("div.site_page_entete_droite_conteneur").hide();

	//var options = { mode : mode, popClose : close, extraCss : extraCss, retainAttr : keepAttr, extraHead : headElements };
	var headElements = '<meta http-equiv="X-UA-Compatible" content="IE=edge"/>';
	var mode = 'popup';
	  if( $("td.site_menu_page_corps").length > 0){ 
	  	$("div#cta_histo").css("display", "none");
	  	$("div#compare_text").css("display", "block");
	  	$("td.site_menu_page_corps").printArea({mode:mode});
	  }
	  $("div#cta_histo").css("display", "block");
	  $("div#compare_text").css("display", "none");
	  $("div.site_page_entete_droite_conteneur").show();
	  $("p.titre").css("color", colorTexte );
	    return false;
	});


	$("#tt_zoom_plus").on("click", function(){
      $('.article').css('font-size', '+=2');
    });
    $("#tt_zoom_moins").on("click", function(){
      $('.article').css('font-size', '-=2');
    });
	
	
	$("#playArticle").on("click", function(){
		$("#jp_container_1").toggleClass("move");

	});

	
	
});
//

// Pour le rollOver du bt de deconnexion
function imgover(couleur){
	if(couleur=="rouge"){
		document.getElementById("fermer_zone").src="/images/boutique/deconnexion_over.gif";	
				}
	else if(couleur=="blanc"){	
		document.getElementById("fermer_zone").src="/images/boutique/deconnexion.gif";	
				}
}

$(document).ready(function() {
	// Pour la tdm DOssiers
	$('.ct_tdm_heading a').on("click", function(){
		$(this).find(".icon").toggleClass("icon-arrow-right-12 icon-arrow-down-12");
		});
	
	//Ajout paragraphe dico paye  ref externes

	$( ".ct_liste_ref_externes" ).prepend( "<div class='refDP'>r&eacute;f&eacute;rences</div>" );
	});