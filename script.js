function Phone(brand, price, color) {
	this.brand = brand;
	this.price = price;
	this.color = color; 
}

Phone.prototype.printInfo = function() {
		console.log("Phone brand is " + this.brand + ", color is " + this.color + ", and price is " + this.price + ".");
}

var SamsungGalaxyS6 = new Phone("Samsung", 1500, "black");
var iPhone6S = new Phone ("Apple", 2500, "white");
var OnePlusOne = new Phone ("OnePlus", 1000, "silver");

iPhone6S.printInfo();