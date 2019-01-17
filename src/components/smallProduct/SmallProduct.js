import RenameText from 'components/renameText';

import './smallProduct.scss';

const SmallProduct = ({ product }) => (
  <div className="smallProduct">
    <div className="smallProduct__controls">
      <a href="#">edit</a>
      <a href='#'>x</a>
    </div>
    <div className="smallProduct__photo">
      <span>photo</span>
    </div>
    <div className="smallProduct__title">
      <RenameText>{product.title}</RenameText>
    </div>
  </div>
);

export default SmallProduct;
