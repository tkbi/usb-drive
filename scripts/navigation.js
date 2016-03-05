/*
	Project: USBdrive
	Author: Valery Samovich
    Date: 12/11/2012
    Filename: navigation.js		
*/
	        // Wait for the page and all the DOM to be fully loaded
		$('body').ready(function() {
 
	                // Add the 'hover' event listener to our drop down class
			$('.dropdown').hover(function() {
	                        // When the event is triggered, grab the current element 'this' and
	                        // find it's children '.sub_navigation' and display/hide them
				$(this).find('.sub_navigation').slideToggle(); 
			});
		});

