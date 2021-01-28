export const sum = (items, field) =>
  items.reduce((total, value) => {
    return total + value[field];
  }, 0);

export const groupBy = (xs, key) => {
  return xs.reduce(function (rv, x) {
    (rv[x[key]] = rv[x[key]] || []).push(x);
    return rv;
  }, {});
};

export const round = (e, shift = 1) => {
  return Number(e.toFixed(shift));
};

export const timeOutIf = (condition, initialFn, fn) => {
  if (condition) {
    fn();
  } else {
    setTimeout(() => {
      initialFn();
      fn();
    }, 500);
  }
};
