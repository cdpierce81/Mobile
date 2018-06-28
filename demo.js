WebFontConfig = {"google":{"families":["Cinzel:r:latin,latin-ext","Ubuntu:r,i,b,bi:latin,latin-ext"]}};
	(function() {
		var wf = document.createElement('script');
		wf.src = 'https://s0.wp.com/wp-content/plugins/custom-fonts/js/webfont.js';
		wf.type = 'text/javascript';
		wf.async = 'true';
		var s = document.getElementsByTagName('script')[0];
		s.parentNode.insertBefore(wf, s);
	}
)
();
	
/* <![CDATA[ */
function addLoadEvent(func) {
	var oldonload = window.onload;
	if (typeof window.onload != 'function') {
		window.onload = func;
	} else {
		window.onload = function () {
			oldonload();
			func();
		}
	}
}
/* ]]> */

window._wpemojiSettings = {
	"baseUrl":"https:\/\/s0.wp.com\/wp-content\/mu-plugins\/wpcom-smileys\/twemoji\/2\/72x72\/","ext":".png","svgUrl":"https:\/\/s0.wp.com\/wp-content\/mu-plugins\/wpcom-smileys\/twemoji\/2\/svg\/","svgExt":".svg","source": {
		"concatemoji":"https:\/\/s2.wp.com\/wp-includes\/js\/wp-emoji-release.min.js?m=1516999477h&ver=4.9.7-alpha-43298"
	}
};

!function(a,b,c){
	function d(a,b){
		var c=String.fromCharCode;
		l.clearRect(0,0,k.width,k.height),l.fillText(c.apply(this,a),0,0);
		var d=k.toDataURL();
		l.clearRect(0,0,k.width,k.height),l.fillText(c.apply(this,b),0,0);
		var e=k.toDataURL();
		return d===e
	}
	function e(a){
			var b;if(!l||!l.fillText)return!1;
			switch(l.textBaseline="top",l.font="600 32px Arial",a){
				case"flag":return!(b=d([55356,56826,55356,56819],[55356,56826,8203,55356,56819]))&&(b=d([55356,57332,56128,56423,56128,56418,56128,56421,56128,56430,56128,56423,56128,56447],[55356,57332,8203,56128,56423,8203,56128,56418,8203,56128,56421,8203,56128,56430,8203,56128,56423,8203,56128,56447]),!b);
				case"emoji":return b=d([55357,56692,8205,9792,65039],[55357,56692,8203,9792,65039]),!b}return!1
	}
	function f(a){
			var c=b.createElement("script");
			c.src=a,c.defer=c.type="text/javascript",b.getElementsByTagName("head")[0].appendChild(c)
	}
	var g,h,i,j,k=b.createElement("canvas"),l=k.getContext&&k.getContext("2d");
	for(j=Array("flag","emoji"),c.supports={everything:!0,everythingExceptFlag:!0},i=0; i<j.length; i++)
	c.supports[j[i]]=e(j[i]),c.supports.everything=c.supports.everything&&c.supports[j[i]],"flag"!==j[i]&&(c.supports.everythingExceptFlag=c.supports.everythingExceptFlag&&c.supports[j[i]]);
	c.supports.everythingExceptFlag=c.supports.everythingExceptFlag&&!c.supports.flag,c.DOMReady=!1,c.readyCallback=function(){c.DOMReady=!0},c.supports.everything||(h=function(){c.readyCallback()},b.addEventListener?(b.addEventListener("DOMContentLoaded",h,!1),a.addEventListener("load",h,!1)):(a.attachEvent("onload",h),b.attachEvent("onreadystatechange",function(){"complete"===b.readyState&&c.readyCallback()})),g=c.source||{},g.concatemoji?f(g.concatemoji):g.wpemoji&&g.twemoji&&(f(g.twemoji),f(g.wpemoji)))
}(window,document,window._wpemojiSettings);

var highlander_expando_javascript = function(){
	var input = document.createElement( 'input' ),
	    comment = jQuery( '#comment' );

	if ( 'placeholder' in input ) {
		comment.attr( 'placeholder', jQuery( '.comment-textarea label' ).remove().text() );
	}

	// Expando Mode: start small, then auto-resize on first click + text length
	jQuery( '#comment-form-identity' ).hide();
	jQuery( '#comment-form-subscribe' ).hide();
	jQuery( '#commentform .form-submit' ).hide();

	comment.css( { 'height':'10px' } ).one( 'focus', function() {
		var timer = setInterval( HighlanderComments.resizeCallback, 10 )
		jQuery( this ).animate( { 'height': HighlanderComments.initialHeight } ).delay( 100 ).queue( function(n) { clearInterval( timer ); HighlanderComments.resizeCallback(); n(); } );
		jQuery( '#comment-form-identity' ).slideDown();
		jQuery( '#comment-form-subscribe' ).slideDown();
		jQuery( '#commentform .form-submit' ).slideDown();
	});
}
jQuery(document).ready( highlander_expando_javascript );

/* <![CDATA[ */
var WPGroHo = {"my_hash":""};
/* ]]> */

//initialize and attach hovercards to all gravatars
		jQuery( document ).ready( function( $ ) {

			if (typeof Gravatar === "undefined"){
				return;
			}

			if ( typeof Gravatar.init !== "function" ) {
				return;
			}			

			Gravatar.profile_cb = function( hash, id ) {
				WPGroHo.syncProfileData( hash, id );
			};
			Gravatar.my_hash = WPGroHo.my_hash;
			Gravatar.init( 'body', '#wp-admin-bar-my-account' );
		});

/* <![CDATA[ */
var HighlanderComments = {"loggingInText":"Logging In\u2026","submittingText":"Posting Comment\u2026","postCommentText":"Post Comment","connectingToText":"Connecting to %s","commentingAsText":"%1$s: You are commenting using your %2$s account.","logoutText":"Log Out","loginText":"Log In","connectURL":"https:\/\/cdpierce81.wordpress.com\/public.api\/connect\/?action=request","logoutURL":"https:\/\/cdpierce81.wordpress.com\/wp-login.php?action=logout&_wpnonce=c379da8c96","homeURL":"https:\/\/cdpierce81.wordpress.com\/","postID":"4","gravDefault":"identicon","enterACommentError":"Please enter a comment","enterEmailError":"Please enter your email address here","invalidEmailError":"Invalid email address","enterAuthorError":"Please enter your name here","gravatarFromEmail":"This picture will show whenever you leave a comment. Click to customize it.","logInToExternalAccount":"Log in to use details from one of these accounts.","change":"Change","changeAccount":"Change Account","comment_registration":"0","userIsLoggedIn":"","isJetpack":"","text_direction":"ltr"};
/* ]]> */

