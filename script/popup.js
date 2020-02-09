
	var projectName = document.getElementById("projectName")
	
	var modal = document.getElementById('myModal');

	// Get the button that opens the modal
	var btn = document.getElementById("myBtn");

	// Get the <span> element that closes the modal
	var span = document.getElementsByClassName("close")[0];

	var tmp;
	var idName;
	
	function setup(){
		projectName = document.getElementById("projectName")
		modal = document.getElementById('myModal');
		span = document.getElementsByClassName("close")[0];
		console.log("working");
	}
	// When the user clicks the button, open the modal 
	function test(parameter) {
		reset();
		modal = document.getElementById('myModal');
		projectName = document.getElementById("projectName")
		modal.style.display = "block";
		
		switch(parameter)
		{
			case 1:
				projectName.textContent = "Galactic Clapback";
				break;
			case 2:
				projectName.textContent = "VRsus guARdian";
				break;
			case 3:
				projectName.textContent = "Project Orion: ChiaroScuro";
				break;
				case 4:
				projectName.textContent = "Flicker Fortress";
				break;
			default:
				break;
		}
		
		tmp = document.getElementById(parameter);
		tmp.style.display = "block";
		
	}

	// When the user clicks on <span> (x), close the modal
	function close() {
		modal = document.getElementById('myModal');
		modal.style.display = "none";
		reset();
		console.log("close");
	}

	// When the user clicks anywhere outside of the modal, close it
	window.onclick = function(event) {
		if (event.target == modal) {
			modal = document.getElementById('myModal');
			modal.style.display = "none";
			reset();
		}
	}
	
	function reset(){
	
		for(var i = 1; i < 4; i++)
		{
			tmp = document.getElementById(i);
			tmp.style.display = "none";
		}
	
	}
	