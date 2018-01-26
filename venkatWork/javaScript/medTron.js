// $('fNameError').hide();
// $('lNameError').hide();
// $('emailIDError').hide();
// $('phoneNumError').hide();
// $('postCDError').hide();

var firstName = $('#fName').val();
var lastName = $('#lName').val();
var emailID = $('#emailID').val();
var phoneNumber = $('#phoneNum').val();
var postCode = $('#postCD').val();

function requestCall() { debugger;
	if (!firstName) {
		$('.fNameError').show();
	}
};