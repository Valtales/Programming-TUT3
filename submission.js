// Inputs can be null, undefined, numbers (including NaN), or numeric strings.
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
    // Use a nonzero remainder so negative odd numbers work too.
    return Number.isInteger(numberValue) && numberValue % 2 !== 0;
};

let undefined_predicate = function (value) {
    return value === undefined;
};

let null_predicate = function (value) {
    return value === null;
};

// Takes a predicate function and a value to test.
let check = function (predicate, value) {
    return predicate(value);
};

// Accepts E, English, F, or French, regardless of capitalization.
let getDictionary = function (lang) {
    // Returns the English word for 1, 2, or 3.
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

    // Returns the French word for 1, 2, or 3.
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

// Get each dictionary, then test it with a number.
let englishDictionaryTest = getDictionary("English");
console.log(englishDictionaryTest(1)); // should print one

let frenchDictionaryTest = getDictionary("French");
console.log(frenchDictionaryTest(2)); // should print deux
