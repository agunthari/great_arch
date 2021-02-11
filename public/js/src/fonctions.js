function setCookie(cname, cvalue, exdays) {
  var d = new Date();
  d.setTime(d.getTime() + (exdays*24*60*60*1000));
  var expires = "expires="+ d.toUTCString();
  document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}

function getCookie(cname) {
  var name = cname + "=";
  var decodedCookie = decodeURIComponent(document.cookie);
  var ca = decodedCookie.split(';');
  for(var i = 0; i <ca.length; i++) {
    var c = ca[i];
    while (c.charAt(0) == ' ') {
      c = c.substring(1);
    }
    if (c.indexOf(name) == 0) {
      return c.substring(name.length, c.length);
    }
  }
  return "";
}

function PopupCentree(page,largeur,hauteur,options) {
	var top = ( screen.height-hauteur ) / 2;
	var left = ( screen.width-largeur ) / 2;
	window.open( page,"","top="+top+",left="+left+",width="+largeur+",height="+hauteur+","+options);
}

function removeReference(){
	var meta;
	alert("test");
	if (document.createElement &&
	(meta = document.createElement('meta'))) {
	// set properties
	meta.name = "robots";
	meta.content = "noindex, nofollow";

	// now add the meta element to the head
	document.getElementsByTagName('head').item(0).appendChild(meta);
	alert("test2");
	}
}


function checkProfil(baliseId1,baliseId2,formName){
    var selObj = document.getElementById(baliseId1); 
    var nl_domaine = selObj.options[selObj.selectedIndex].value;

	//particuliers
	if(nl_domaine == 7){
		document.getElementById(baliseId2).style.visibility='visible';
		document.getElementById(baliseId2).style.display='block';
        document.getElementById('cnil').style.visibility='hidden';
		document.getElementById('cnil').style.display='none';
		if( formName == 'nl' ) {
            form.nl_partenaire.checked = false;
            form.nl_optin_grf.checked = false;
        }else{
            form.optin_grf.checked = false;
        }
        if( formName == 'compagne' ) form.optin_partenaire.checked = false;
        if( formName == 'rfcons' ) form.cpg_optin_partenaire.checked = false;
	}else{
		document.getElementById(baliseId2).style.visibility='hidden';
		document.getElementById(baliseId2).style.display='none';
        document.getElementById('cnil').style.visibility='visible';
		document.getElementById('cnil').style.display='block';
        if( formName == 'nl' ) form.nl_partenaire.checked = true;
        if( formName == 'compagne' ) form.optin_partenaire.checked = true;
        if( formName == 'rfcons' ) form.cpg_optin_partenaire.checked = true;
	}

}


function insertQuantite( baliseId1, prd_base, id_produit ){
	//var selObj = document.getElementById( baliseId1 ); 
	//var qt = selObj.value;
        var qt = $( '#' + baliseId1 ).val();
	if( qt == 0 ){
		window.location.replace ( '/catalogue/panier.php?action=effacer&id='+id_produit );
	}else{
		if ( !/[^\d]/.test(qt) ){
			window.location.href = '/catalogue/panier.php?action=ajouter&base='+prd_base+'&id_produit='+id_produit+'&qt='+qt;
		}else{
			alert("La quantité saisie est incorrecte");
			window.location.href = '/catalogue/panier.php?base='+prd_base+'&id_produit='+id_produit;
		}
	}
}

function affiche_marquee( direction ){
	var id = document.getElementById( direction );
	var marquee = '';
	marquee = '<marquee behavior= "scroll" align= "center" ';
	if( id != null ){
		marquee += ' direction="' + direction + '"';
	}else{
		marquee += ' direction="up" ';
	}

	marquee += ' height="170" scrollamount="2" onmouseout="this.start()" onmouseover= "this.stop()" >';
	document.write ( marquee );
}

function afficheDepeche_test ( type ){
		window.location.replace ( '/breves_video/'+type+'.html' );
}

function afficheDepeche( type ){
		window.location.replace ( '/breves/'+type+'.html' );
}

function afficheDepecheXXX ( type ){
	alert(type);
	if( type == 'text' ){
		window.location.replace ( '/' );
	}else{
		window.location.replace ( '/breves/'+type+'.html' );
	}
}
function afficheFlash ( type ){
	window.location.replace ( '/breves/'+type+'.html' );
}


function accesParagrapheSansValidation( numero) {
	var anchor = document.paragForm.parag.value;
	if( anchor.match( "-")) {
		numbers = anchor.split("-");
		repeatNo =  5 - numbers[1].length;		padChar = "";
		for (var i = 0; i < repeatNo; i++) {  
			padChar += "0";  
		}
		paragNo = numbers[0] + padChar + numbers[1];
	}else paragNo = anchor;

	var newUrl = "http://" + window.location.host + '/guide/'+ numero + '/parag=' + paragNo + '#' + anchor  ;
	document.paragForm.action = newUrl;
	//document.location.replace(newUrl);

}

function accesParagraphe( numero) {
	var anchor = document.paragForm.parag.value;
	var labelProduit = document.paragForm.label_produit.value;
	var paragPattern = /(\d+\-)?\d+/;
	if(anchor.search(paragPattern) == -1){
		alert("Veuillez mettre un numéro valide. Example 1-5 ou 12." );
		return false;		
	}
	if( anchor.match( "-")) {
		numbers = anchor.split("-");
		repeatNo =  5 - numbers[1].length;		padChar = "";
		for (var i = 0; i < repeatNo; i++) {  
			padChar += "0";  
		}
		paragNo = numbers[0] + padChar + numbers[1];
	}else paragNo = anchor;

	if( label != ''){
		var newUrl = "http://" + window.location.host + '/guide/'+ labelProduit + '/' + numero + '/parag=' + paragNo + '#' + anchor  ;
	}else{
		var newUrl = "http://" + window.location.host + '/guide/'+ numero + '/parag=' + paragNo + '#' + anchor  ;
	}
	
	document.paragForm.action = newUrl;
	//document.location.replace(newUrl);

}



function check_mobile(){
	if ( $('id_mobile').value == '' ){
		alert( "Vous devez choisir un modèle de BlackBerry" );
	} else {
		$('type_mobile').submit();
	}
}
$(document).ready(function() {
	$(".alerteChkBox").click(function(){
		var id = this.id;
		var state = this.checked ? 1 : 0;
		var type = $(this).attr('value');
		var typeMessage = '';
		if( type == 'echeancier'){
			typeMessage = 'écheanciers';
		}else if( type == 'chiffre'){
			typeMessage = 'chiffres utiles';
		}
        $.post('/js/alertes/updateCleonAlert.php', {type: type, state:state}, function()
        {
        	if( state == 1 ){
        		alert( 'Votre alerte mail concernant les ' + typeMessage + ' est activée.' );
        	}else if(state == 0 ){
        		alert( 'Votre alerte mail concernant les ' + typeMessage + ' est désactivée.');
        	}
        });		
	});

	// JS form anchor Borto
	if(getCookie('form-anchor')){
		var urlDoc = location.href;
		var url = getCookie('form-anchor');
		if(url.split('#')[0]==urlDoc){
			$("html, body").stop().animate( { scrollTop: $('a[name='+url.split('#')[1]+']').offset().top-220 }, 1500);
		}
	}

	
	// JS pour NEw recherche templates
			$(".HideSearch i").click(function() {
				console.log("click");
			$(".dropdown-search").toggleClass("hide");
			});
		$(".matiere .item").click(function() {
			$(".matiere .defaut").prop( "checked", false );
			});
		$(".matiere .defaut").click(function() {
			$(".matiere .item").prop( "checked", false );
			});
		$(".fonds .item").click(function() {
			$(".fonds .defaut").prop( "checked", false );
			});
		$(".fonds .defaut").click(function() {
			$(".fonds .item").prop( "checked", false );
			});		
		$(".support .item").click(function() {
			$(".support .defaut").prop( "checked", false );
			});
		$(".support .defaut").click(function() {
			$(".support .item").prop( "checked", false );
			});
		$('.dropdown-menu-fonds a').click(function(){
				$('#selected').text($(this).text());
			});
		$('.search-into').click(function(){
				$(".search .color-site").addClass("hide");
			});	
		
		var url = $(location).attr('href');
		var site = url.split('.')[0];
		site = site.split('//')[1];
		$('#selected').text($("."+site).text());
		
		//console.log("site = "+site);
		var ou = "";
		if(site == "revuefiduciaire"){
			ou = "Dans Revue Fiduciaire";
			
		}
		else if(site == "rfpaye"){
			ou = "Dans RF Paye";
			
		}
		else if(site == "rfcomptable"){
			ou = "Dans RF Comptable";
			
		}
		else if(site == "rfsocial"){
			ou = "Dans RF Social";
			
		}		
		else if(site == "rfconseil"){
			ou = "Dans RF Conseil";
			
		}
		else if(site == "interetsprives"){
			ou = "Dans Intérêts Privés";
			
		}
		
		$('.dans-site').html(ou+ " <i class='icon icon-close search-into'></i>");
		
		$('.search-into').click(function(){
				$(".big-search .dans-site").addClass("hide");
			});	
		
		$('#submitHome').click(function () { 
				if ( $("#search_home .inputSeach").val() == '' ){ 
					$('#submitHome').prop('disabled', true);
				}
			});
		$('.inputSeach').on('input', function() { 
				if ($(this).val() == ''){ 
				$('#submitHome').prop('disabled', true);}
		else{
			$('#submitHome').removeClass("not-allowed");
			$('#submitHome').prop('disabled', false);
		}
		});
		$('.dropdown-menu-fonds li').click(function(){
			console.log('ici' + $(this).attr('data-value'));
			$('#selected').text($(this).text());
			$( '#fsite' ).attr('value', $(this).attr('data-value'));
			//$('#selected').attr('fsite',$(this).attr('data-value'));
			if ($(this).attr('href')){
				$( '#search_home' ).attr('action', $(this).attr('href'));
			}
		});
		$('.open-big-search').click(function(){
			
				$(".header-search-wrapper").animate({top: "0px"}, 500, 'swing');
				$(".header-search-wrapper").show();
				
			});				
		$('.header-search-cancel').click(function(){
				$(".dropdown-search").addClass("hide");
				$(".dropdown-search-wpp").addClass("hide");
				$(".header-search-wrapper").animate({top: "-150px"}, 500, 'swing');
			});	
			
		var ici = $( "span.ici:last" ).text();
		//console.log("ou = "+ici);
		if( ici != ""){
			//$('.ici-dans-site').html(ici+ " <i class='icon icon-close search-into-ici'></i>");
		}
		else{
			$('.ici-dans-site').hide();
		}
		$('.search-into-ici').click(function(){
				//$(".big-search .ici-dans-site").addClass("hide");
			});	
	
	// Open Menu Dropdown to connect 
	$('body').click(function (e){
		if ($(e.target).closest('#menuConnecte').length === 0) {
			$('#menuConnecte .sousMenu').hide();return;
		}
		$('#menuConnecte .sousMenu').show();
	});
	

});