/*
	COP 2831 Web Scripting and Ajax
	Assignment: Phase 3
	Author: Valery Samovich
    Date: 12/11/2012
    Filename: append.js

*/

// jQuery - ready() Method 
$(document).ready(function(){
	// jQuery - append() Method insert contenet for History
	$("#btn0").click(function(){
		$("#usb0").append(" The largest commonly-available portable storage media were floppy disks that could at best hold 1.44 megabytes. Large files (over 1.44 MB) had to be split up across many floppy disks, or put on expensive and rarely-compatible high-density disks, such as Zip disks. Those required special, expensive hardware, which limited their popularity.");
		// jQuery .hide() method for button
		$("#btn0").hide();
	});
	
	// jQuery - append() Method insert contenet for USB 1.0
	$("#btn1").click(function(){
		$("#usb1").append("  Their intent was to standardize the numerous specialized connectors PCs had at the time and to develop a basic device-connection protocol. The first USB product was released in 1996, and by 1998 the standard had been widely adopted. The first commercially-available USB flash drive was the ThumbDrive, produced by Singapore company Trek Technology in 2000. Later that year, IBM came out with their own model, the DiskOnKey.");
		// jQuery .hide() method for button
		$("#btn1").hide();
	});
	
	// jQuery - append() Method insert contenet for USB 2.0
	$("#btn2").click(function(){
		$("#usb2").append("  It had a significantly faster data transfer speed, about 30 times what USB 1.0 could do (about 30 MB/second, as opposed to 1 MB/second on USB 1.0). USB flash drives had already been increasing steadily in capacity. Faster transfer speeds only encouraged that expansion. The first 1-gigabyte USB flash drives became available in 2004.");
		// jQuery .hide() method for button
		$("#btn2").hide();
	});
	
	// jQuery - append() Method insert contenet for USB 3.0
	$("#btn3").click(function(){
		$("#usb3").append(" Although this speed is typically only achieved using powerful professional grade or developmental equipment. USB 3.0 reduces the time required for data transmission, reduces power consumption, and is backward compatible with USB 2.0. The USB 3.0 Promoter Group announced on 17 November 2008 that the specification of version 3.0 had been completed and had made the transition to the USB Implementers Forum (USB-IF), the managing body of USB specifications.");
		// jQuery .hide() method for button
		$("#btn3").hide();
	});
});