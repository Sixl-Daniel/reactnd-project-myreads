const shelvesArray = [
    { id: 1, text: 'Currently Reading', value: 'currentlyReading', icon: 'eye' },
    { id: 2, text: 'Want to Read', value: 'wantToRead', icon: 'cart arrow down' },
    { id: 3, text: 'Read', value: 'read', icon: 'archive' },
    { id: 4, text: 'None', value: '', icon: 'eraser' }
]

export const getIconByShelfValue = (shelfValue) => {
    const shelvesResult = shelvesArray.filter((entry) => entry.value === shelfValue);
    return shelvesResult.length ? shelvesResult[0].icon : 'eraser';
}

export const getShelvesDropdownOptions = () => {
    let shelvesDropdownOptions = [];
    shelvesArray.forEach(shelf => {
        shelvesDropdownOptions.push(
            { text: shelf.text, value: shelf.value, key: shelf.id, icon: shelf.icon }
        );
    });
    return shelvesDropdownOptions;
}
