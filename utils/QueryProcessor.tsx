export default function QueryProcessor(query: string): string {
  if (query.toLowerCase().includes("shakespeare")) {
    return (
      "William Shakespeare (26 April 1564 - 23 April 1616) was an " +
      "English poet, playwright, and actor, widely regarded as the greatest " +
      "writer in the English language and the world's pre-eminent dramatist."
    );
  }

  if (query.toLowerCase().includes("andrew id")) {
    return "ianis";
  }

  if (query.toLowerCase().includes("name")) {
    return "ianis_fr";
  }

  // Extract numbers from the query and return their sum
  const numbers = query.match(/-?\d+\.?\d*/g);
  if (numbers && numbers.length >= 2) {
    const num1 = parseFloat(numbers[0]);
    const num2 = parseFloat(numbers[1]);
    return (num1 + num2).toString();
  }
  return "";
}
