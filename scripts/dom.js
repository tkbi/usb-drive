<!--   
	// <![CDATA[ 
	function changeImg(imageName) {      
		element=document.getElementById(imageName);
		//alert(imageName + " = " + element.height + " - " + element.textContent);
		if (element.height=="128") {
			element.src="Large_" + imageName +".jpg";
			element.height="320";
			element.width="480";
			document.getElementById(imageName+"s").innerHTML = "Click to view Small Image";
		} else {
			element.src="Small_" + imageName +".jpg";
			element.height="128";
			element.width="192";
			document.getElementById(imageName+"s").innerHTML = "Click to view Large Image";
		}
	}     
		// ]]> 
//-->