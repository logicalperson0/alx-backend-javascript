const calculateNumber = (a, b) => {
  const x = Math.round(a);
  const y = Math.round(b);

  const c = x + y;
  return c;
}

module.exports = calculateNumber;
