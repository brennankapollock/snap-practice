// To find the minimal total travel distance for friends in a binary grid using Manhattan Distance, you can follow these steps:

// Calculate the distances from each home to all other homes.
// Sum the distances for each home to obtain the total travel distance.

function minTotalDistance(grid) {
  if (!grid || grid.length === 0 || grid[0].length === 0) {
    return 0;
  }

  const rows = grid.length;
  const cols = grid[0].length;

  // Arrays to store the coordinates of homes
  const rowsArray = [];
  const colsArray = [];

  // Populate rowsArray and colsArray with the coordinates of homes
  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < cols; j++) {
      if (grid[i][j] === 1) {
        rowsArray.push(i);
        colsArray.push(j);
      }
    }
  }

  // Sort the arrays (coordinates) to find the median
  rowsArray.sort((a, b) => a - b);
  colsArray.sort((a, b) => a - b);

  // Find the median of rows and cols (meeting point)
  const medianRow = rowsArray[Math.floor(rowsArray.length / 2)];
  const medianCol = colsArray[Math.floor(colsArray.length / 2)];

  // Calculate total travel distance using Manhattan Distance
  let totalDistance = 0;
  for (let i = 0; i < rowsArray.length; i++) {
    totalDistance +=
      Math.abs(rowsArray[i] - medianRow) + Math.abs(colsArray[i] - medianCol);
  }

  return totalDistance;
}

// Example usage:
const grid = [
  [1, 0, 0, 0, 1],
  [0, 0, 0, 0, 0],
  [0, 0, 1, 0, 0],
];

// Call the minTotalDistance function with the binary grid
const result = minTotalDistance(grid);

// Print the result (minimal total travel distance)
console.log(result);

// USES 2D GRID
