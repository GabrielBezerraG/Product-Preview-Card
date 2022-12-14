import './Product.css'
import mobileImage from '../../images/image-product-mobile.jpg';
import desktopImage from '../../images/image-product-desktop.jpg';

function Product() {
  return (
    <div className='container'>
      <main className="product">
        <picture>
          <source media="(min-width:768px" srcSet={desktopImage} />
          <img src={mobileImage} alt="Bottle of perfume" className="product__image" />
        </picture>
        <div className='product__info'>
          <h3 className="product__info__category">PERFUME</h3>
          <h1 className="product__info__title">Gabrielle Essence Eau De Parfum</h1>
          <p className="product__info__description">A floral, solar and voluptuous interpretation composed by Olivier Polge, Perfumer-Creator for the House of CHANEL.</p>
          <div className='product__info__prices'>
            <h2 className="product__info__prices__main">$149.99</h2>
            <span className="product__info__prices__old">$169.99</span>
          </div>
          <label className="product__info__button">
            <i className="product__info__button__icon" />
            <input className="product__info__button__input" type="button" value="Add to Cart" />
          </label>
        </div>
      </main>
    </div>
  );
}

export default Product;
