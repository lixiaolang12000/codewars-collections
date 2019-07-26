const maxSequence = function (arr) {
    if (arr.length == 0) {
        return 0;
    }

    let maxScore = 0;
    for (let index = 0; index < arr.length; index++) {
        for (let newArrayLen = 1; newArrayLen < arr.length - index + 1; newArrayLen++) {
            const newArray = arr.slice(index, index + newArrayLen);
            const newScore = sumArray(newArray);
            if (newScore > maxScore) {
                maxScore = newScore;
            }
        }        
    }

    return maxScore;    
}

const sumArray = (arr) => {
    return arr.reduce((prev, cur) => {
        return prev + cur;
    });
}

module.exports = {
    maxSequence
}