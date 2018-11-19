const $ = require('jquery');
const footer = require('../../sctipts/elementBuilder');

require('./footer.scss');

module.exports = () => footer('footer', `<p>Easycode 2019 (c)</p>`, 'footer');
