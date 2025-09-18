const getTheTitles = function(obj) {
    let titles = [];
    for (let book of obj) {
        titles.push(book.title);
    }

    return titles;
};

// Do not edit below this line
module.exports = getTheTitles;
