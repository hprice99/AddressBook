	function addFriend(theForm) {
	
		
		// Collect form information
		
		var name = theForm.name;
		var gender;
		
		var radios = document.getElementsByName("gender");
		for(var i = 0; i <radios.length; i++) {
			if(radios[i].checked) {
				gender = radios[i].value;
				break;
			}
		} 
		
				
		var eMail = theForm.eMail;
		var phone = theForm.phone;
		var school = theForm.school;
		var street = theForm.street;
		var suburb = theForm.suburb;
		var state = theForm.state;
		var birthday = theForm.datepicker;
		
		var ok = true;
		
		
		
			
		// Check if name is blank
		if(name.value == "") {
			ok = false;
			alert("You forgot to type a name");
			name.focus();
		}
		
		// Check if email is blank
		if(ok && eMail.value == "") {
			ok = false;
			alert("You forgot to type an Email address");
			eMail.focus();
			}
			
	
		// Check if phone is blank
		if(ok && phone.value == "") {
			ok = false;
			alert("You forgot to type a phone number");
			phone.focus();
		}
	
		if(ok) {
			// Add new friend to friendsPanel
			var friendsPanel = document.getElementById("friendsPanel");
			var newFriend = "<b>Name:</b> " + name.value + "<br>";
			newFriend = newFriend + "<b>Gender:</b> " + radios[i].value + "<br>";
			newFriend = newFriend + "<b>Birthday:</b> " + birthday.value + "<br>";
			newFriend = newFriend + "<b>Email:</b> " + eMail.value + "<br>";
			newFriend = newFriend + "<b>Phone:</b> " + phone.value + "<br>";
			newFriend = newFriend + "<b>School:</b> " + school.value + "<br>";
			newFriend = newFriend + "<b>Address:</b> " + street.value + "<br>" + suburb.value + " " + state.value + "<br><br>";
			
			
			friendsPanel.innerHTML = friendsPanel.innerHTML + newFriend;
			
			// Clear form elements
			name.value = "";
			birthday.value = "";
			eMail.value = "";
			phone.value = "";
			street.value = "";
			suburb.value = "";
			state.value = "";
			school.value = "";
			street.value = "";
			suburb.value = "";
			state.value = "";
			
			// Place cursor in "name" element
			name.focus();
		}
		
	return false;
	}