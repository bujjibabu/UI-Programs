function ADD() {
	var firstNo = parseInt(document.getElementById('fNo').value); //get first entered no
	var secondNo = parseInt(document.getElementById('sNo').value); //get second entered no
	var sum = firstNo + secondNo//calculate sum
	document.getElementById('sumresult').innerText = sum; //print sum
}