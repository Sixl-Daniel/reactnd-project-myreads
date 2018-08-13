export const getIconByCategory = (category) => {
    return category === 'currentlyReading' ? 'eye' :
        category === 'wantToRead' ? 'cart arrow down' :
            category === 'read' ? 'archive' :
                category === 'none' ? 'eraser' : 'question circle';
}

export const categoriesNames = ['Currently Reading', 'Want to Read', 'Read', 'None'];
export const categoriesValues = ['currentlyReading', 'wantToRead', 'read', 'none'];

export let categoriesConfig = [];

categoriesValues.forEach((element, index) => {
    categoriesConfig.push(
        { text: categoriesNames[index], value: element, key: element, icon: getIconByCategory(element) }
    );
});


