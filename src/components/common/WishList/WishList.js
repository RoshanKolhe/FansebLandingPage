import React from "react";
import Header from "../Header/Header";

const WishList = () => {
  return (
    <div>
      <div className="main-wrapper">
        <Header />
        {/* breadcrumb-area start */}
        <div className="breadcrumb-area">
          <div className="container">
            <div className="row align-items-center justify-content-center">
              <div className="col-12 text-center">
                <h2 className="breadcrumb-title">Wishlist</h2>
                {/* breadcrumb-list start */}
                <ul className="breadcrumb-list">
                  <li className="breadcrumb-item">
                    <a href="index.html">Home</a>
                  </li>
                  <li className="breadcrumb-item active">Wishlist</li>
                </ul>
                {/* breadcrumb-list end */}
              </div>
            </div>
          </div>
        </div>
        {/* breadcrumb-area end */}

        {/* Wishlist Area Start */}
        <div className="cart-main-area pt-100px pb-100px">
          <div className="container">
            <h3 className="cart-page-title">Your cart items</h3>
            <div className="row">
              <div className="col-lg-12 col-md-12 col-sm-12 col-12">
                <form action="#">
                  <div className="table-content table-responsive cart-table-content">
                    <table>
                      <thead>
                        <tr>
                          <th>Image</th>
                          <th>Product Name</th>
                          <th>Until Price</th>
                          <th>Qty</th>
                          <th>Subtotal</th>
                          <th>Add To Cart</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td className="product-thumbnail">
                            <a href="#">
                              <img
                                className="img-responsive ml-15px"
                                src="https://images.pexels.com/photos/7317074/pexels-photo-7317074.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                                alt=""
                              />
                            </a>
                          </td>
                          <td className="product-name">
                            <a href="#">Modern Smart Phone</a>
                          </td>
                          <td className="product-price-cart">
                            <span className="amount">$60.00</span>
                          </td>
                          <td className="product-quantity">
                            <div className="cart-plus-minus">
                              <input
                                className="cart-plus-minus-box"
                                type="text"
                                name="qtybutton"
                                defaultValue={1}
                              />
                            </div>
                          </td>
                          <td className="product-subtotal">$70.00</td>
                          <td className="product-wishlist-cart">
                            <a href="#">add to cart</a>
                          </td>
                        </tr>
                        <tr>
                          <td className="product-thumbnail">
                            <a href="#">
                              <img
                                className="img-responsive ml-15px"
                                src="https://images.pexels.com/photos/11711833/pexels-photo-11711833.jpeg?auto=compress&cs=tinysrgb&w=800&lazy=load"
                                alt=""
                              />
                            </a>
                          </td>
                          <td className="product-name">
                            <a href="#">Bluetooth Headphone</a>
                          </td>
                          <td className="product-price-cart">
                            <span className="amount">$50.00</span>
                          </td>
                          <td className="product-quantity">
                            <div className="cart-plus-minus">
                              <input
                                className="cart-plus-minus-box"
                                type="text"
                                name="qtybutton"
                                defaultValue={1}
                              />
                            </div>
                          </td>
                          <td className="product-subtotal">$80.00</td>
                          <td className="product-wishlist-cart">
                            <a href="#">add to cart</a>
                          </td>
                        </tr>
                        <tr>
                          <td className="product-thumbnail">
                            <a href="#">
                              <img
                                className="img-responsive ml-15px"
                                src="https://images.pexels.com/photos/4841509/pexels-photo-4841509.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                                alt=""
                              />
                            </a>
                          </td>
                          <td className="product-name">
                            <a href="#">Smart Music Box</a>
                          </td>
                          <td className="product-price-cart">
                            <span className="amount">$70.00</span>
                          </td>
                          <td className="product-quantity">
                            <div className="cart-plus-minus">
                              <input
                                className="cart-plus-minus-box"
                                type="text"
                                name="qtybutton"
                                defaultValue={1}
                              />
                            </div>
                          </td>
                          <td className="product-subtotal">$90.00</td>
                          <td className="product-wishlist-cart">
                            <a href="#">add to cart</a>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
        {/* Wishlist Area End */}
      </div>
    </div>
  );
};

export default WishList;
