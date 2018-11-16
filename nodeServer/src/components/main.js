const $ = require('jquery');

module.exports = () => {
    const someTitle = `<h1>Some Title</h1>`;
    const date = new Date;
    const dateToDay = date.getDate();

    return $(`<main class="main">${someTitle} Дата: ${dateToDay}</main>`);
};

