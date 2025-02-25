export default function QueryProcessor(query: string): string {
  if (query.toLowerCase().includes("shakespeare")) {
    return (
      "William Shakespeare (26 April 1564 - 23 April 1616) was an " +
      "English poet, playwright, and actor, widely regarded as the greatest " +
      "writer in the English language and the world's pre-eminent dramatist."
    );
  }

  query = query.toLowerCase();

  if (query.includes("andrew")) {
    return "anikas";
  }

  if (query.includes("name")) {
    return "Anika Sharma";
  }

  if (query.includes("plus")) {
    let numbers = query.match(/\d+/g);
    if (numbers && numbers.length === 2) {
      return `${parseInt(numbers[0], 10) + parseInt(numbers[1], 10)}`;
    }
  }

  if (query.includes("minus")) {
    let numbers = query.match(/\d+/g);
    if (numbers && numbers.length === 2) {
      return `${parseInt(numbers[0], 10) - parseInt(numbers[1], 10)}`;
    }
  }


  if (query.includes("largest")) {
    let numbers = query.match(/\d+/g);
    if (numbers) {
      return `${Math.max(...numbers.map(num => parseInt(num, 10)))}`;
    }
  }

  if (query.includes("multiplied")) {
    let numbers = query.match(/\d+/g);
    if (numbers) {
      return `${parseInt(numbers[0], 10) * parseInt(numbers[1], 10)}`;
    }
  }

  if (query.includes("square") && query.includes("cube")) {
    let numbers = query.match(/\d+/g);
    if (numbers) {
      let findSixthPower = numbers
        .map(num => parseInt(num, 10))
        .filter(num => {
          let root = Math.round(Math.pow(num, 1 / 6));
          return Math.pow(root, 6) === num;
        });

      return findSixthPower.length > 0 ? findSixthPower.join(", ") : "None";
    }
  }

  if (query.includes("prime")) {
    let numbers = query.match(/\d+/g);
    if (numbers) {
      let isPrime = (num: number): boolean => {
        if (num < 2) return false;
        for (let i = 2; i * i <= num; i++) {
          if (num % i === 0) return false;
        }
        return true;
      };

      let primeNumbers = numbers
        .map(num => parseInt(num, 10))
        .filter(isPrime);

      return primeNumbers.length > 0 ? primeNumbers.join(", ") : "None";
    }
  }

  if (query.includes("to the power of")) {
    let numbers = query.match(/\d+/g);
    if (numbers && numbers.length === 2) {
      let base = parseInt(numbers[0], 10);
      let exponent = parseInt(numbers[1], 10);
      return `${Math.pow(base, exponent)}`;
    }
  }

  return "";
}