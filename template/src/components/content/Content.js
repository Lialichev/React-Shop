import './content.scss';
import Hello from '../hello';
import Number from '../number';

const Content = () => (
  <div className="content">
    <p>
      Многие думают, что Lorem Ipsum - взятый с потолка псевдо-латинский набор слов, но это не совсем так. Его
      корни уходят в один фрагмент классической латыни 45 года н.э., то есть более двух тысячелетий назад. Ричард
      МакКлинток, профессор латыни из колледжа Hampden-Sydney
    </p>
    <Hello name="Vlad" />
    <Number from="1" to="7" even />
  </div>
);

export default Content;
