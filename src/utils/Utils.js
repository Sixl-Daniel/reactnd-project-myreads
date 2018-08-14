export const capitalizeString = (string) => {
    return string.toLowerCase().replace(/(^|\s)\S/g, l => l.toUpperCase());
}

export const debounceEvent = (a, b = 250, c) => (...d) => clearTimeout(c, c = setTimeout(() => a(...d), b));
