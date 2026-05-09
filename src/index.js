module.exports = function towelSort(matrix) {
  if (!matrix || matrix.length === 0) {
    return [];
  }
  const result = matrix.map((row, index) => {
    if (index % 2 !== 0) {
      return row.reverse();
    }
    return row;
  });
  return result.flat();
};
