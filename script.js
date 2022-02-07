console.log('initializing');

function calculateTotal() {
	document.getElementById('total-overall').innerHTML =
	parseInt(document.getElementById('total-race').innerHTML)
	+ parseInt(document.getElementById('total-magic').innerHTML)
	+ parseInt(document.getElementById('total-attributes').innerHTML)
	+ parseInt(document.getElementById('total-skills').innerHTML)
	+ parseInt(document.getElementById('total-resources').innerHTML);
}

function calculateTotal_Attributes() {
	document.getElementById('total-attributes').innerHTML = parseInt(document.getElementById('attributes-subtotal-quickness').innerHTML)
	+ parseInt(document.getElementById('attributes-subtotal-body').innerHTML)
	+ parseInt(document.getElementById('attributes-subtotal-strength').innerHTML)
	+ parseInt(document.getElementById('attributes-subtotal-intelligence').innerHTML)
	+ parseInt(document.getElementById('attributes-subtotal-willpower').innerHTML)
	+ parseInt(document.getElementById('attributes-subtotal-charisma').innerHTML);
}


document.getElementsByName('race').forEach(element => {
	element.addEventListener('change', function() {
		var total = parseInt(0);
		console.log('clicked');
		document.getElementsByName('race').forEach(element => {
			console.log(element);
			if(element.checked) total += parseInt(element.value);
		});
		console.log(total);
		document.getElementById('total-race').innerHTML  = total;
		calculateTotal();
	});
});





document.getElementsByName('magic').forEach(element => {
	element.addEventListener('change', function() {
		var total = parseInt(0);
		console.log('clicked');
		document.getElementsByName('magic').forEach(element => {
			console.log(element);
			if(element.checked) total += parseInt(element.value);
		});
		console.log(total);
		document.getElementById('total-magic').innerHTML  = total;
		calculateTotal();
	});
});





document.getElementsByName('resources').forEach(element => {
	element.addEventListener('change', function() {
		var total = parseInt(0);
		console.log('clicked');
		document.getElementsByName('resources').forEach(element => {
			console.log(element);
			if(element.checked) total += parseInt(element.value);
		});
		console.log(total);
		document.getElementById('total-resources').innerHTML  = total;
		calculateTotal();
	});
});





document.getElementById('attributes-quickness').addEventListener('input', function() {
	document.getElementById('attributes-subtotal-quickness').innerHTML = parseInt(this.value) * 2;
	calculateTotal_Attributes();
	calculateTotal();
});
document.getElementById('attributes-body').addEventListener('input', function() {
	document.getElementById('attributes-subtotal-body').innerHTML = parseInt(this.value) * 2;
	calculateTotal_Attributes();
	calculateTotal();
});
document.getElementById('attributes-strength').addEventListener('input', function() {
	document.getElementById('attributes-subtotal-strength').innerHTML = parseInt(this.value) * 2;
	calculateTotal_Attributes();
	calculateTotal();
});
document.getElementById('attributes-intelligence').addEventListener('input', function() {
	document.getElementById('attributes-subtotal-intelligence').innerHTML = parseInt(this.value) * 2;
	calculateTotal_Attributes();
	calculateTotal();
});
document.getElementById('attributes-willpower').addEventListener('input', function() {
	document.getElementById('attributes-subtotal-willpower').innerHTML = parseInt(this.value) * 2;
	calculateTotal_Attributes();
	calculateTotal();
});
document.getElementById('attributes-charisma').addEventListener('input', function() {
	document.getElementById('attributes-subtotal-charisma').innerHTML = parseInt(this.value) * 2;
	calculateTotal_Attributes();
	calculateTotal();
});

document.getElementById('skills-quantity').addEventListener('input', function() {
	document.getElementById('skills-cost').innerHTML = this.value;
	document.getElementById('total-skills').innerHTML = this.value;
	calculateTotal();
});
