import builder from '../../sctipts/elementBuilder';
import './main.scss'

export default () => {
    const someTitle = `<h1>Some Title</h1>`;
    const date = new Date;
    const dateToDay = date.getDate();

    return builder('main', `${someTitle} Дата: ${dateToDay}`, 'main');
};

