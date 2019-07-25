function validSolution(board) {
  let columns = [];
  let blocks = [];
  let rows = [...board];

  for (let row = 0; row < 9; row++) {
    let colArray = [];
    for (let col = 0; col < 9; col++) {
      colArray.push(board[col][row]);
    }
    columns.push(colArray);
  }

  for (let i = 0; i < 9; i+=3) {
    
    for (let j = 0; j < 9; j +=3) {
      let blockArray = [];
        blockArray.push(board[i][j]);
        blockArray.push(board[i][j+1]);
        blockArray.push(board[i][j+2]);

        blockArray.push(board[i + 1][j]);
        blockArray.push(board[i + 1][j+1]);
        blockArray.push(board[i + 1][j+2]);

        blockArray.push(board[i + 2][j]);
        blockArray.push(board[i + 2][j+1]);
        blockArray.push(board[i + 2][j+2]);
        blocks.push(blockArray);
    }
  }

  const isValid = (array) => {
    return array.sort().map(o => { return o + ''; }).join('') === '123456789';
  }

  return rows.every(isValid) && columns.every(isValid) && blocks.every(isValid);

}

module.exports = {
  validSolution
}