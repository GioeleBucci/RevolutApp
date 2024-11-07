function parseDate(transactionDate: string): Date {
  const [year, month, day] = transactionDate.split("/").map(Number);
  const date = new Date(year, month - 1, day); // month is 0-indexed
  return date;
}

export default parseDate;