export const sum = (items) =>
  items.reduce((total, value) => {
    return total + value.value;
  }, 0);

export const groupBy = (xs, key) => {
  return xs.reduce(function (rv, x) {
    (rv[x[key]] = rv[x[key]] || []).push(x);
    return rv;
  }, {});
};
