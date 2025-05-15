export const formatPrice = (price: number): string => {
  if (price < 1000000) {
    return price.toLocaleString("en-US"); // hoặc 'vi-VN' nếu bạn thích dấu chấm
  } else if (price < 100000000) {
    const millions = Math.floor(price / 1000000);
    const decimal = Math.floor((price % 1000000) / 100000);
    return `${millions}tr${decimal}`;
  } else if (price < 1000000000) {
    const millions = Math.round(price / 1000000);
    return `${millions}tr`;
  } else {
    const billions = Math.floor(price / 1000000000);
    const millions = Math.floor((price % 1000000000) / 1000000);
    return `${billions} tỷ ${millions}tr`;
  }
};
