import { useState } from 'react';
import kind from '@enact/core/kind';

import { ImageItem } from '@enact/sandstone/ImageItem';
import { Image } from '@enact/sandstone/Image';
import css from './ProductList.module.less';
import PropTypes from 'prop-types';

const ProductList = (props) => {
  const products = props.products;
  const [selectedIndex, setSelect] = useState(-1);
  return (
    products.map((p, index) => {
      return <Product product={p} index={index} key={index} isSelected={(selectedIndex == index)} setSelect={setSelect} />;
    })
  );
};

// const ProductItem = kind({
//   name: 'ProductItem',
//   styles: {
//       css,
//       className: 'ProductItem',
//   },
//   render: ({children, css, ...rest}) => (
//     <UiButton {...rest} css={css}>{children}</UiButton>
//   )
// });

// const Product = (props) => {
//   const product = props.product;
//   const isSelected = props.isSelected;
//   const setSelect = props.setSelect;
//   console.log(product);
//   return (<ImageItem css={css} src={product.image} orientation='horizontal'>
//     <div>product.name</div>
//     <div>product.price</div>
//   </ImageItem>);
// };

const Product = (props) => {
  const product = props.product;
  const isSelected = props.isSelected;
  const setSelect = props.setSelect;
  console.log(product);
  return (<div src={product.image} style={{display:'flex', alignItems:'center'}}>
      <Image css={css} src={product.image} style={{width:'4rem', height: '4rem'}}/>
      <div style={{flex:1, marginLeft: '10px'}}>
        <div className="name" style={{fontSize: "1rem"}}>
          {product.name}
        </div>
        <div className="price" style={{fontSize: "0.75rem"}}>
          {product.price}
        </div>
      </div>  
  </div>);
};

export default ProductList;
