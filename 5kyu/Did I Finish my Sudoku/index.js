function doneOrNot(board){
    // your code here
    try {
        // test row
        board.forEach(row => {
            if (!isValidArray(row)) {
                throw 'Try again!';
            }
        });
        // test column
        for (let colIdx =0; colIdx < 9; colIdx++) {
            let columnArr = []
            for (let rowIdx = 0; rowIdx < 9; rowIdx++) {
                columnArr.push(board[rowIdx][colIdx]);                
            }
            if (!isValidArray(columnArr)) {
                throw 'Try again!';
            }
        }
        // test region    
        [0, 3, 6].forEach(rowIdx => {            
            [0, 3, 6].forEach(colIdx => {        
                let regionArr = [];        
                regionArr.push(board[rowIdx][colIdx]);                
                regionArr.push(board[rowIdx][colIdx + 1]);
                regionArr.push(board[rowIdx][colIdx + 2]);                

                regionArr.push(board[rowIdx + 1][colIdx]);
                regionArr.push(board[rowIdx + 1][colIdx + 1]);
                regionArr.push(board[rowIdx + 1][colIdx + 2]); 

                regionArr.push(board[rowIdx + 2][colIdx]);
                regionArr.push(board[rowIdx + 2][colIdx + 1]);
                regionArr.push(board[rowIdx + 2][colIdx + 2]); 
                if (!isValidArray(regionArr)) {
                    throw 'Try again!';
                }   
            });                     
        })
        return 'Finished!';
    } catch (error) {
        return error;
    }
    
}

function isValidArray(arr) {
    let tmp = [...arr]
    return tmp.sort().map(o => {
        return o + '';
    }).join('') === '123456789';
}

module.exports = {
    doneOrNot
}