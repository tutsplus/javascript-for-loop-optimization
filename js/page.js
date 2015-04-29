function get_collection( size, input, max ) {

	var collection = [],
	    position   = -1,
	    i, l;

	for ( i = 0; i < size; i++ ) {

		position = Math.floor( Math.random() * ( max ) );
		collection.push( input[ position ] );

	}

	return collection;

}

function get_letters( size ) {

	var letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
	return get_collection( size, letters, 25 );

}

function get_numbers( size ) {

	var numbers = "0123456789";
	return get_collection( size, numbers, 10 );

}

function get_both( size ) {

	var alphaNum = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
	return get_collection( size, alphaNum, 35 );

}

function get_html( size ) {

	var elements = document.getElementsByTagName( '*' );
	return get_collection( size, elements, elements.length - 1 );

}

function generate( type ) {

	var collection = []

	if ( 1 < arguments.length ) {
		type = 'both';
	}

	switch ( type ) {

		case 'numbers':
			collection = get_numbers( 40000 );
			break;

		case 'letters':
			collection = get_letters( 40000 );
			break;

		case 'both':
			collection = get_both( 40000 );
			break;

		default:
			collection = get_html( 40000 );
			break;

	}

	return collection;

}

function run( type, input ) {

	var i, l, counter, startTime, endTime;

	switch ( type ) {

		case 'btnFor1':

			count = 0;
			startTime = Date.now();
			for ( i = 0; i < input.length; i++ ) {
				count++;
			}
			endTime = Date.now();

			$( '#txtTime' ).val ( endTime - startTime );

			break;

		case 'btnFor2':

			count = 0;
			startTime = Date.now();
			for ( i = 0, l = input.length; i < l; i++ ) {
				count++;
			}
			endTime = Date.now();

			$( '#txtTime' ).val ( endTime - startTime );

			break;

		case 'btnWhile':

			count = 0;
			i = input.length;

			startTime = Date.now();
			while ( i-- ) {
				count++;
			}
			endTime = Date.now();

			$( '#txtTime' ).val ( endTime - startTime );

			break;

	}

}

(function( $ ) {
	'use strict';

	var collection;

	$(function() {

		$( '#generators > .btn' ).on( 'click', function() {

			switch ( $( this ).attr( 'id' ) ) {

				case 'btnNumbers':
					collection = generate( 'numbers' );
					break;

				case 'btnLetters':
					collection = generate( 'letters' );
					break;

				case 'btnAlphaNum':
					collection = generate( 'numbers', 'letters' );
					break;

				case 'btnHTML':
					collection = generate( 'html' );
					break;

			}

			$( '#txtCollection' ).text( collection );

		});

		$( '#tests > .btn' ).on( 'click', function() {
			run( $( this ).attr( 'id' ), collection );
		});


	});

})( jQuery );