function isInteresting(number, awesomePhrases) {
    if (number < 100) {
        if (number == 98) {
            if (isMatch(number + 2, awesomePhrases)) {
                return 1;
            }
        } else if (number == 99) {
            if (isMatch(number + 1, awesomePhrases)) {
                return 1;
            }

            if (isMatch(number + 2, awesomePhrases)) {
                return 1;
            }
        }
        return 0;
    }
    // Go to town!  
    if (isMatch(number, awesomePhrases)) {
        return 2;
    }

    if (isMatch(number + 1, awesomePhrases)) {
        return 1;
    }

    if (isMatch(number + 2, awesomePhrases)) {
        return 1;
    }

    return 0;
}

function isMatch(number, awesomePhrases) {
    if (isFollowByZeros(number)) {
        return true;
    }

    if (isSameNumber(number)) {
        return true;
    }

    if (isIncrementSequential(number)) {
        return true;
    }

    if (isDecrementSequential(number)) {
        return true;
    }

    if (isPalindrome(number)) {
        return true;
    }

    if (isAwesomePhrases(number, awesomePhrases)) {
        return true;
    }

    return false;
}

function isFollowByZeros(number) {
    return /^\d00+$/g.test(number);
}

function isSameNumber(number) {
    let sameNumber = number % 10;
    let tmp = number;
    while (tmp) {
        if (tmp % 10 != sameNumber) {
            return false;
        }

        tmp -= sameNumber;
        tmp /= 10;
    }
    return true;
}

function isIncrementSequential(number) {
    return RegExp(number).test(1234567890);
}

function isDecrementSequential(number) {
    return RegExp(number).test(9876543210);
}

function isPalindrome(number) {
    const strNumber = number.toString();
    return strNumber.split('').reverse().join('') === strNumber;
}

function isAwesomePhrases(number, awesomePhrase) {
    return awesomePhrase.indexOf(number) >= 0;
}

module.exports = {
    isInteresting
}