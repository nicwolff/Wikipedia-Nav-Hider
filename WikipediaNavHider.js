document.addEventListener( "DOMNodeInserted", function (e) {

	var el;

	el = document.getElementById('content');
	if ( el ) { el.setAttribute( 'style', 'margin-left: 0' ) }

	el = document.getElementById('mw-head-base');
	if ( el ) { el.setAttribute( 'style', 'margin-left: 0; height: 4em;' ) }

	el = document.getElementById('left-navigation');
	if ( el ) { el.setAttribute( 'style', 'left: 0; top: 1.5em;' ) }

	el = document.getElementById('right-navigation');
	if ( el ) { el.setAttribute( 'style', 'margin-top: 1.5em' ) }

	el = document.getElementById('footer');
	if ( el ) { el.setAttribute( 'style', 'margin-left: 0' ) }

} );