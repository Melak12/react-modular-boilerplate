const arrayToCommaSeparatedText = (array: []) => (array ?
    array
        .map((item) => item)
        .join(', ')
        .toString() :
    'None');

function convertToInternationalCurrencySystem(labelValue: any) {
    // Nine Zeroes for Billions
    return Math.abs(Number(labelValue)) >= 1.0e9 ?
        `${(Math.abs(Number(labelValue)) / 1.0e9).toFixed(0)} B` : // Six Zeroes for Millions
        Math.abs(Number(labelValue)) >= 1.0e6 ?
            `${(Math.abs(Number(labelValue)) / 1.0e6).toFixed(0)} M` : // Three Zeroes for Thousands
            Math.abs(Number(labelValue)) >= 1.0e3 ?
                `${(Math.abs(Number(labelValue)) / 1.0e3).toFixed(0)} K` :
                Math.abs(Number(labelValue));
}


/* eslint-disable no-restricted-syntax */
function isEmptyObject(obj: object) {
    let name;
    for (name in obj) {
        if (obj.hasOwnProperty(name)) {
            return false;
        }
    }
    return true;
}


function truncateString(str: string, max: number, sep: string) {
    // Default to 10 characters
    max = max || 10;

    const len = str.length;
    if (len > max) {
        // Default to ellipsis
        sep = sep || '...';

        const sepLen = sep.length;

        // If separator is larger than character limit,
        // well then we don't want to just show the separator,
        // so just show right hand side of the string.
        if (sepLen > max) {
            return str.substr(len - max);
        }

        // Half the difference between max and string length.
        // Multiply negative because small minus big.
        // Must account for length of separator too.
        const n = -0.5 * (max - len - sepLen);

        // This gives us the centerline.
        const center = len / 2;

        const front = str.substr(0, center - n);
        const back = str.substr(len - center + n); // without second arg, will automatically go to end of line.

        return front + sep + back;
    }

    return str;
}


function wait(ms:number) {
    const start = new Date().getTime();
    let end = start;

    while (end < start + ms) {
        end = new Date().getTime();
    }
}


export {
    arrayToCommaSeparatedText,
    convertToInternationalCurrencySystem,
    isEmptyObject,
    truncateString,
    wait
};