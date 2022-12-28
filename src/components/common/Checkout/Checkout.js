import React from "react";
import Header from "../Header/Header";

const Checkout = () => {
  return (
    <div>
      <div className="main-wrapper">
        <Header />
        {/* breadcrumb-area start */}
        <div className="breadcrumb-area">
          <div className="container">
            <div className="row align-items-center justify-content-center">
              <div className="col-12 text-center">
                <h2 className="breadcrumb-title">Checkout</h2>
                {/* breadcrumb-list start */}
                <ul className="breadcrumb-list">
                  <li className="breadcrumb-item">
                    <a href="index.html">Home</a>
                  </li>
                  <li className="breadcrumb-item active">Checkout</li>
                </ul>
                {/* breadcrumb-list end */}
              </div>
            </div>
          </div>
        </div>
        {/* breadcrumb-area end */}

        {/* checkout area start */}
        <div className="checkout-area pt-100px pb-100px">
          <div className="container">
            <div className="row">
              <div className="col-lg-7">
                <div className="billing-info-wrap">
                  <h3>Billing Details</h3>
                  <div className="row">
                    <div className="col-lg-6 col-md-6">
                      <div className="billing-info mb-4">
                        <label>First Name</label>
                        <input type="text" />
                      </div>
                    </div>
                    <div className="col-lg-6 col-md-6">
                      <div className="billing-info mb-4">
                        <label>Last Name</label>
                        <input type="text" />
                      </div>
                    </div>
                    <div className="col-lg-12">
                      <div className="billing-info mb-4">
                        <label>Company Name</label>
                        <input type="text" />
                      </div>
                    </div>
                    <div className="col-lg-12">
                      <div className="billing-select mb-4">
                        <label>Country</label>
                        <select>
                          <option>Select a country</option>
                          <option>Azerbaijan</option>
                          <option>Bahamas</option>
                          <option>Bahrain</option>
                          <option>Bangladesh</option>
                          <option>Barbados</option>
                        </select>
                      </div>
                    </div>
                    <div className="col-lg-12">
                      <div className="billing-info mb-4">
                        <label>Street Address</label>
                        <input
                          className="billing-address"
                          placeholder="House number and street name"
                          type="text"
                        />
                        <input
                          placeholder="Apartment, suite, unit etc."
                          type="text"
                        />
                      </div>
                    </div>
                    <div className="col-lg-12">
                      <div className="billing-info mb-4">
                        <label>Town / City</label>
                        <input type="text" />
                      </div>
                    </div>
                    <div className="col-lg-6 col-md-6">
                      <div className="billing-info mb-4">
                        <label>State / County</label>
                        <input type="text" />
                      </div>
                    </div>
                    <div className="col-lg-6 col-md-6">
                      <div className="billing-info mb-4">
                        <label>Postcode / ZIP</label>
                        <input type="text" />
                      </div>
                    </div>
                    <div className="col-lg-6 col-md-6">
                      <div className="billing-info mb-4">
                        <label>Phone</label>
                        <input type="text" />
                      </div>
                    </div>
                    <div className="col-lg-6 col-md-6">
                      <div className="billing-info mb-4">
                        <label>Email Address</label>
                        <input type="text" />
                      </div>
                    </div>
                  </div>
                  <div className="checkout-account mb-30px">
                    <input
                      className="checkout-toggle2 w-auto h-auto"
                      type="checkbox"
                    />
                    <label>Create an account?</label>
                  </div>
                  <div className="checkout-account-toggle open-toggle2 mb-30">
                    <input placeholder="Email address" type="email" />
                    <input placeholder="Password" type="password" />
                    <button className="btn-hover checkout-btn" type="submit">
                      register
                    </button>
                  </div>
                  <div className="additional-info-wrap">
                    <h4>Additional information</h4>
                    <div className="additional-info">
                      <label>Order notes</label>
                      <textarea
                        placeholder="Notes about your order, e.g. special notes for delivery. "
                        name="message"
                        defaultValue={""}
                      />
                    </div>
                  </div>
                  <div className="checkout-account mt-25">
                    <input
                      className="checkout-toggle w-auto h-auto"
                      type="checkbox"
                    />
                    <label>Ship to a different address?</label>
                  </div>
                  <div className="different-address open-toggle mt-30px">
                    <div className="row">
                      <div className="col-lg-6 col-md-6">
                        <div className="billing-info mb-4">
                          <label>First Name</label>
                          <input type="text" />
                        </div>
                      </div>
                      <div className="col-lg-6 col-md-6">
                        <div className="billing-info mb-4">
                          <label>Last Name</label>
                          <input type="text" />
                        </div>
                      </div>
                      <div className="col-lg-12">
                        <div className="billing-info mb-4">
                          <label>Company Name</label>
                          <input type="text" />
                        </div>
                      </div>
                      <div className="col-lg-12">
                        <div className="billing-select mb-4">
                          <label>Country</label>
                          <select>
                            <option>Select a country</option>
                            <option>Azerbaijan</option>
                            <option>Bahamas</option>
                            <option>Bahrain</option>
                            <option>Bangladesh</option>
                            <option>Barbados</option>
                          </select>
                        </div>
                      </div>
                      <div className="col-lg-12">
                        <div className="billing-info mb-4">
                          <label>Street Address</label>
                          <input
                            className="billing-address"
                            placeholder="House number and street name"
                            type="text"
                          />
                          <input
                            placeholder="Apartment, suite, unit etc."
                            type="text"
                          />
                        </div>
                      </div>
                      <div className="col-lg-12">
                        <div className="billing-info mb-4">
                          <label>Town / City</label>
                          <input type="text" />
                        </div>
                      </div>
                      <div className="col-lg-6 col-md-6">
                        <div className="billing-info mb-4">
                          <label>State / County</label>
                          <input type="text" />
                        </div>
                      </div>
                      <div className="col-lg-6 col-md-6">
                        <div className="billing-info mb-4">
                          <label>Postcode / ZIP</label>
                          <input type="text" />
                        </div>
                      </div>
                      <div className="col-lg-6 col-md-6">
                        <div className="billing-info mb-4">
                          <label>Phone</label>
                          <input type="text" />
                        </div>
                      </div>
                      <div className="col-lg-6 col-md-6">
                        <div className="billing-info mb-4">
                          <label>Email Address</label>
                          <input type="text" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-5 mt-md-30px mt-lm-30px ">
                <div className="your-order-area">
                  <h3>Your order</h3>
                  <div className="your-order-wrap gray-bg-4">
                    <div className="your-order-product-info">
                      <div className="your-order-top">
                        <ul>
                          <li>Product</li>
                          <li>Total</li>
                        </ul>
                      </div>
                      <div className="your-order-middle">
                        <ul>
                          <li>
                            <span className="order-middle-left">
                              Product Name X 1
                            </span>{" "}
                            <span className="order-price">$100 </span>
                          </li>
                          <li>
                            <span className="order-middle-left">
                              Product Name X 1
                            </span>{" "}
                            <span className="order-price">$100 </span>
                          </li>
                        </ul>
                      </div>
                      <div className="your-order-bottom">
                        <ul>
                          <li className="your-order-shipping">Shipping</li>
                          <li>Free shipping</li>
                        </ul>
                      </div>
                      <div className="your-order-total">
                        <ul>
                          <li className="order-total">Total</li>
                          <li>$100</li>
                        </ul>
                      </div>
                    </div>
                    <div className="payment-method">
                      <div className="payment-accordion element-mrg">
                        <div id="faq" className="panel-group">
                          <div className="panel panel-default single-my-account m-0">
                            <div className="panel-heading my-account-title">
                              <h4 className="panel-title">
                                <a
                                  data-bs-toggle="collapse"
                                  href="#my-account-1"
                                  className="collapsed"
                                  aria-expanded="true"
                                >
                                  Direct bank transfer
                                </a>
                              </h4>
                            </div>
                            <div
                              id="my-account-1"
                              className="panel-collapse collapse show"
                              data-bs-parent="#faq"
                            >
                              <div className="panel-body">
                                <p>
                                  Please send a check to Store Name, Store
                                  Street, Store Town, Store State / County,
                                  Store Postcode.
                                </p>
                              </div>
                            </div>
                          </div>
                          <div className="panel panel-default single-my-account m-0">
                            <div className="panel-heading my-account-title">
                              <h4 className="panel-title">
                                <a
                                  data-bs-toggle="collapse"
                                  href="#my-account-2"
                                  aria-expanded="false"
                                  className="collapsed"
                                >
                                  Check payments
                                </a>
                              </h4>
                            </div>
                            <div
                              id="my-account-2"
                              className="panel-collapse collapse"
                              data-bs-parent="#faq"
                            >
                              <div className="panel-body">
                                <p>
                                  Please send a check to Store Name, Store
                                  Street, Store Town, Store State / County,
                                  Store Postcode.
                                </p>
                              </div>
                            </div>
                          </div>
                          <div className="panel panel-default single-my-account m-0">
                            <div className="panel-heading my-account-title">
                              <h4 className="panel-title">
                                <a
                                  data-bs-toggle="collapse"
                                  href="#my-account-3"
                                >
                                  Cash on delivery
                                </a>
                              </h4>
                            </div>
                            <div
                              id="my-account-3"
                              className="panel-collapse collapse"
                              data-bs-parent="#faq"
                            >
                              <div className="panel-body">
                                <p>
                                  Please send a check to Store Name, Store
                                  Street, Store Town, Store State / County,
                                  Store Postcode.
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="Place-order mt-25">
                    <a className="btn-hover" href="#">
                      Place Order
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* checkout area end */}
      </div>
    </div>
  );
};

export default Checkout;
