function clearName(){
			if (document.getElementById('nameField').value == 'First and Last Name'){
				document.getElementById('nameField').value = '';
			}
		}
		// This function clears the starting text in the phone number box.
		function clearNumber(){
			if (document.getElementById('phoneField').value == 'example: 212-123-1234'){
				document.getElementById('phoneField').value = '';
			}
		}
		// This function to bring back default text if name field is empty.
		function resetName(){
			if (document.getElementById('nameField').value == ''){
				document.getElementById('nameField').value = 'First and Last Name';
			}
		}
		// This function to bring back default text if phone field is empty.
		function resetNumber(){
			if (document.getElementById('phoneField').value == ''){
				document.getElementById('phoneField').value = 'example: 212-123-1234';
			}
		}
		//This function clears the starting text in the email field.
			function clearEmail(){
				if (document.getElementById('emailField').value == 'example: asianjs@gmail.com'){
					document.getElementById('emailField').value = '';
				}
			}
			// This function to bring back default text if email field is empty.
			function resetEmail(){
				if (document.getElementById('emailField').value == ''){
					document.getElementById('emailField').value = 'example: asianjs@gmail.com';
				}
			}
