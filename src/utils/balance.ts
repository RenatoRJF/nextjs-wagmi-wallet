export const formatBalance = (
  value: bigint | undefined,
  decimals: number | undefined,
  precision: number = 4
): string => {
  if (!value || decimals === undefined) {
    return "0." + "0".repeat(precision);
  }

  const divisor = Math.pow(10, decimals);
  const formatted = Number(value) / divisor;
  
  return formatted.toFixed(precision);
};
