const degToRad = Math.PI / 180;

class Complex {
  real: number;
  imaginary: number;

  static Identity = new Complex(1, 0);

  static Multiply(a: Complex, b: Complex): Complex {
    return new Complex(
      a.real * b.real - a.imaginary * b.imaginary,
      a.real * b.imaginary + a.imaginary * b.real
    );
  }

  static Normalize(complex: Complex): Complex {
    return new Complex(
      complex.real / complex.length,
      complex.imaginary / complex.length
    );
  }

  static FromRadians(radians: number) {
    return new Complex(Math.cos(radians), Math.sin(radians));
  }

  static FromDegrees(degrees: number) {
    return Complex.FromRadians(degrees * degToRad);
  }

  constructor(real: number, imaginary: number) {
    this.real = real;
    this.imaginary = imaginary;
  }

  get length(): number {
    return Math.sqrt(Math.pow(this.real, 2) + Math.pow(this.imaginary, 2));
  }

  Become(other: Complex): void {
    this.real = other.real;
    this.imaginary = other.imaginary;
  }

  MultiplyBy(other: Complex): void {
    this.Become(Complex.Multiply(this, other));
  }

  Normalize(): void {
    this.Become(Complex.Normalize(this));
  }
}

export default Complex;
