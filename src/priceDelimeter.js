const priceDelimeter = (price) => {
  if (!price) return '';

  const arrOfNumbers = price.toString().split('');
  for (let count = 1, i = arrOfNumbers.length - 1; i >= 0; count++, i--) {
    if (count % 3 === 0) {
      arrOfNumbers.splice(i, 0, ' ');
    }
  }
  return arrOfNumbers.join('').trim();
};

export default priceDelimeter;
