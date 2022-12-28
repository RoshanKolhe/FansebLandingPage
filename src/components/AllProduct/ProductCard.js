import { FaHeart, FaRegEye, FaShoppingCart, FaUndo } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const ProductCard = (props) => {
  const navigate = useNavigate();
  const onClickHandler = (e) => {
    console.log(e.target);
    navigate(e.target.dataset.target);
  };
  return (
    <div className="col-lg-4 col-md-6 col-sm-6 col-xs-6 mb-30px">
      {/* Single Prodect */}
      <div className="product">
        <span className="badges">
          <span className="sale">-10%</span>
          <span className="new">New</span>
        </span>
        <div className="thumb">
          <a href="viewproduct" className="image">
            <img
              src="https://images.pexels.com/photos/6527699/pexels-photo-6527699.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
              alt="Product"
              height="260"
            />
            <img
              className="hover-image"
              src="https://images.pexels.com/photos/6527699/pexels-photo-6527699.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
              alt="Product"
              height="260"
            />
          </a>
        </div>
        <div className="content">
          <span className="category">
            <a href="#">Accessories</a>
          </span>
          <h5 className="title">
            <a href="viewproduct">Bluetooth Headphone</a>
          </h5>
          <span className="price">
            <span className="old">$48.50</span>
            <span className="new">$38.50</span>
          </span>
        </div>
        <div className="actions">
          <button
            title="Add To Cart"
            className="action add-to-cart"
            data-bs-toggle="modal"
            data-target="/cart"
            onClick={onClickHandler}
          >
            <FaShoppingCart data-target="/cart" />
          </button>
          <button
            className="action wishlist"
            title="Wishlist"
            data-bs-toggle="modal"
            data-target="/wishlist"
            onClick={onClickHandler}
          >
            <FaHeart data-target="/wishlist" />
          </button>
          <button
            className="action quickview"
            data-link-action="quickview"
            title="Quick view"
            data-bs-toggle="modal"
            data-target="/viewproduct"
            onClick={onClickHandler}
          >
            <FaRegEye data-target="/viewproduct" />
          </button>
          <button
            className="action compare"
            title="Compare"
            data-bs-toggle="modal"
            data-target="#exampleModal-Compare"
            onClick={onClickHandler}
          >
            <FaUndo data-target="#exampleModal-Compare" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
