function roundToHundredth(num) {
  // Redondeo al centesimo
  num = Math.round((num + Number.EPSILON) * 100) / 100;
  return num;
}

// Taller 1 --------------------
class Square {
  constructor(side) {
    this.side = Number(side);
  }
  calculatePerimeter(l) {
    return l * 4;
  }
  calculateArea(l) {
    return l * l;
  }
  get perimeter() {
    let per = this.calculatePerimeter(this.side);
    return `<span>${roundToHundredth(per)}cm</span>`;
  }
  get area() {
    let ar = this.calculateArea(this.side);
    return `<span>${roundToHundredth(ar)}cm<sup>2</sup></span>`;
  }
}

class Triangle {
  constructor(side1, side2, side3) {
    this.side1 = Number(side1);
    this.side2 = Number(side2);
    this.side3 = Number(side3);
  }
  calculatePerimeter() {
    return this.side1 + this.side2 + this.side3;
  }
  // Área del circulo con la fórmula de Heron
  calculateSemiPerimeter() {
    return (this.side1 + this.side2 + this.side3) / 2;
  }
  calculateArea() {
    return Math.sqrt(
      this.calculateSemiPerimeter(this.side1, this.side2, this.side3) *
        (this.calculateSemiPerimeter(this.side1, this.side2, this.side3) -
          this.side1) *
        (this.calculateSemiPerimeter(this.side1, this.side2, this.side3) -
          this.side2) *
        (this.calculateSemiPerimeter(this.side1, this.side2, this.side3) -
          this.side3)
    );
  }
  get perimeter() {
    let per = this.calculatePerimeter();
    return `<span>${roundToHundredth(per)}cm</span>`;
  }
  get area() {
    let ar = this.calculateArea();
    return `<span>${roundToHundredth(ar)}cm<sup>2</sup></span>`;
  }
}

class Circle {
  constructor(ratio) {
    this.ratio = Number(ratio);
  }
  calculatePerimeter() {
    return 2 * this.ratio * Math.PI;
  }
  calculateArea() {
    return Math.PI * this.ratio ** 2;
  }
  get perimeter() {
    let per = this.calculatePerimeter();
    return `<span>${roundToHundredth(per)}cm</span>`;
  }
  get area() {
    let ar = this.calculateArea();
    return `<span>${roundToHundredth(ar)}cm<sup>2</sup></span>`;
  }
}

// Taller 2 --------------------
class DiscountCalculator {
  constructor(price, discount, coupon = 0) {
    this.price = Number(price);
    this.discount = Number(discount);
    this.coupon = Number(coupon);
  }
  calculatePriceWithDiscount() {
    return ((100 - this.discount - this.coupon) / 100) * this.price;
  }
  get priceWithDiscount() {
    return `Price with discount: <span>$${this.calculatePriceWithDiscount()}</span>`;
  }
}

// Taller 3 --------------------
class Investment {
  constructor(startAmount, interestPercentage, timeYears) {
    this.startAmount = Number(startAmount);
    this.interestPercentage = Number(interestPercentage);
    this.timeYears = Number(timeYears);
  }
  calcWithSimpleInterest() {
    const interestRate = this.interestPercentage / 100;
    const simpleInterest = this.startAmount * interestRate * this.timeYears;
    const finalAmount = this.startAmount + simpleInterest;
    return finalAmount;
  }
  calcWithCompoundInterest() {
    const interestRate = this.interestPercentage / 100;
    const finalAmount = this.startAmount * (1 + interestRate) ** this.timeYears;
    return finalAmount;
  }

  get simpleInterest() {
    return `Your investment with initial capital of $${
      this.startAmount
    } and simple annual interest of ${this.interestPercentage}% over ${
      this.timeYears
    } years will be <span>$${this.calcWithSimpleInterest()}</span>.`;
  }
  get compoundInterest() {
    return `Your investment with initial capital of $${
      this.startAmount
    } and compound annual interest of ${this.interestPercentage}% over ${
      this.timeYears
    } years will be <span>$${this.calcWithCompoundInterest()}</span>.`;
  }
}

// Extras --------------

export {
  roundToHundredth,
  Square,
  Triangle,
  Circle,
  DiscountCalculator,
  Investment,
};
