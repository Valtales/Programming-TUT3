// Predicate inputs may be null, undefined, numbers (including NaN), or numeric strings.
let even_predicate = function (value) {
    if (value === null || value === undefined) {
        return false;
    }

    let numberValue = Number(value);
    return Number.isInteger(numberValue) && numberValue % 2 === 0;
};

let odd_predicate = function (value) {
    if (value === null || value === undefined) {
        return false;
    }

    let numberValue = Number(value);
    // Negative odd numbers have a remainder of -1, so check for a nonzero remainder.
    return Number.isInteger(numberValue) && numberValue % 2 !== 0;
};

let undefined_predicate = function (value) {
    return value === undefined;
};

let null_predicate = function (value) {
    return value === null;
};

// Expects a predicate function and a value from the allowed inputs above.
let check = function (predicate, value) {
    return predicate(value);
};

// Expects E, English, F, or French, with any capitalization.
let getDictionary = function (lang) {
    // Expects a number and returns its English name for 1, 2, or 3.
    let englishDictionary = function (number) {
        switch (number) {
            case 1:
                return "one";
            case 2:
                return "two";
            case 3:
                return "three";
            default:
                return "not included in dictionary";
        }
    };

    // Expects a number and returns its French name for 1, 2, or 3.
    let frenchDictionary = function (number) {
        switch (number) {
            case 1:
                return "un";
            case 2:
                return "deux";
            case 3:
                return "trois";
            default:
                return "not included in dictionary";
        }
    };

    let language = lang.toLowerCase();
    if (language === "e" || language === "english") {
        return englishDictionary;
    }
    return frenchDictionary;
};

// Get each dictionary function, then call it with a number.
let englishDictionaryTest = getDictionary("English");
console.log(englishDictionaryTest(1)); // Expected: one

let frenchDictionaryTest = getDictionary("French");
console.log(frenchDictionaryTest(2)); // Expected: deux
