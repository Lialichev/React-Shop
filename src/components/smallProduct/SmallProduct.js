import RenameText from 'components/renameText';
import { Link } from 'react-router-dom';
import Modal from 'components/modal';

import './smallProduct.scss';

const SmallProduct = ({ product }) => (
  <div className="smallProduct">
    <div className="smallProduct__controls">
      <a href="#">edit</a>
      <a href='#'>x</a>
    </div>
    <Link to={`products/${product.id}`} className="smallProduct__photo">
      <span>photo</span>
    </Link>
    <div className="smallProduct__title">
      <RenameText>{product.title}</RenameText>
    </div>
    <Modal isOpen={true}/>
  </div>
);

export default SmallProduct;
