export function formatCurrencyStringToNumber(value: string | number) {
  if (value === 'string') {
    const sanitizedCurrency = value.replace(/\./g, '').replace(',', '.');
    return Number(sanitizedCurrency);
  }

  return value;
}
