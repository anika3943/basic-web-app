export default function QueryProcessor(query: string): string | number {
  if (query.toLowerCase().includes("shakespeare")) {
    return (
      "William Shakespeare (26 April 1564 - 23 April 1616) was an " +
      "English poet, playwright, and actor, widely regarded as the greatest " +
      "writer in the English language and the world's pre-eminent dramatist."
    );
  }

  query = query.toLowerCase();

  if (query.toLowerCase().includes("andrew")) {
    return (
      "anikas"
    );
  }
  

  if (query.toLowerCase().includes("name")) {
    return "Anika Sharma";
  }

  if (query.includes("plus")) {
    let numbers = query.match(/\d+/g);
    if (numbers && numbers.length === 2) {
        return parseInt(numbers[0], 10) + parseInt(numbers[1], 10);
    }
}

if (query.includes("largest")) {
    let numbers = query.match(/\d+/g);
    if (numbers) {
        return Math.max(...numbers.map(num => parseInt(num, 10)));
    }
}

  return "";
}
