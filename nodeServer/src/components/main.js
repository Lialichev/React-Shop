module.exports = () => {
    const main = document.createElement('main');
    const someTitle = `<h1>Some Title</h1>`;
    const date = new Date;
    const dateToDay = date.getDate();

    main.className = 'main';
    main.innerHTML = `${someTitle} Дата: ${dateToDay}`;

    return main;
};
