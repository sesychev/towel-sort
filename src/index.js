
// You should implement your task here.

module.exports = function towelSort (matrix) {
  if (!Array.isArray(matrix) || matrix.length === 0) {
		return [];
	}

  let array = [];

	for (let index = 0; index < matrix.length; index++) {
		if (index % 2 !== 0) {
			array.push (matrix[index].sort((a, b) => b - a))
		}
		else {
			array.push (matrix[index])
		}
	}

	return array.flat();
}
