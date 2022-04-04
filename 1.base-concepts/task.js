'use strit'

function solveEquation(a, b, c) {
  let arr = [];
  // код для задачи №1 писать здесь
  const d = b ** 2 - (4 * a * c);

  if (d===0) {
    const x = -b / (2 * a);
    arr = [x];
  } else if (d > 0) {
    const x1 = (-b + Math.sqrt(d)) / (2 * a);
    const x2 = (-b - Math.sqrt(d)) / (2 * a);
    arr = [x1, x2];
  }
  return arr; // array
}

function calculateTotalMortgage(percent, contribution, amount, date) {
  let totalAmount;

  // код для задачи №2 писать здесь

  let dateFrom = new Date();
  let dateTo = new Date(date);
  let rateCoefficient = (parseInt(percent) / 12) / 100;
  const creditSum = parseInt(amount) - parseInt(contribution);
  const creditDate = dateTo.getMonth() - dateFrom.getMonth() +
    (12 * (dateTo.getFullYear() - dateFrom.getFullYear()));

  let monthlyPayment = creditSum * (rateCoefficient + (rateCoefficient / (((1 + rateCoefficient) ** creditDate) - 1)));

  if (Number.isNaN(parseInt(amount))) {
      totalAmount = `Параметр "Общая стоимость" содержит неправильное значение "${amount}"`;
      console.log(amount);
      return totalAmount;
  } else if (Number.isNaN(parseInt(contribution))) {
      totalAmount = `Параметр "Начальный взнос" содержит неправильное значение "${contribution}"`;
      return totalAmount;
  } else if (Number.isNaN(parseInt(percent))) {
      totalAmount = `Параметр "Процентная ставка" содержит неправильное значение "${percent}"`;
      return totalAmount;
  } else {
      totalAmount = Number((monthlyPayment * creditDate).toFixed(2));
  }

  return totalAmount;
}
