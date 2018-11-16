const $ = require('jquery');

module.exports = (tag = 'div', content = '', className = 'box') => $(`<${tag} class="${className}">${content}</${tag}>`);