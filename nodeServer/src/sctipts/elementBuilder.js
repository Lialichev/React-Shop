import $ from 'jquery';

export default (tag = 'div', content = '', className = 'box') => $(`<${tag} class="${className}">${content}</${tag}>`);