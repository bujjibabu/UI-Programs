// $('fNameError').hide();
// $('lNameError').hide();
// $('emailIDError').hide();
// $('phoneNumError').hide();
// $('postCDError').hide();



function requestCall() {
  var firstName = $('#fName').val();
  var lastName = $('#lName').val();
  var emailID = $('#emailID').val();
  var phoneNumber = $('#phoneNum').val();
  var postCode = $('#postCD').val();

  if (!firstName) {
    $('.fNameError').removeClass('hidden');
  } else {
  	$('.fNameError').addClass('hidden');
  }

};