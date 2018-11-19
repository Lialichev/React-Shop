const $ = require('jquery');
const main = require('../../sctipts/elementBuilder');

require('./main.scss');

module.exports = () => {
    const someTitle = `<h1>Some Title</h1>`;
    const date = new Date;
    const dateToDay = date.getDate();

    return main('main', `${someTitle} Дата: ${dateToDay}`, 'main');
};

