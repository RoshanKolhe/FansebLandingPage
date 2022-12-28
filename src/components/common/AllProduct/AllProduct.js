import React, { useEffect } from "react";
import Header from "../Header/Header";
import { useSelector, useDispatch } from "react-redux";
import { FaUndo, FaHeart, FaShoppingCart, FaRegEye } from "react-icons/fa";
import { getAllProductsThunk } from "../../../store/slices/product/product.slice";

const AllProduct = () => {
  const dispatch = useDispatch();
  const searched_products = useSelector(
    ({ product }) => product.searched_products
  );
  console.log(searched_products);

  useEffect(() => {
    dispatch(getAllProductsThunk());
  }, []);

  return (
    <div>
      <>
        <Header />
        <div className="breadcrumb-area">
          <div className="container">
            <div className="row align-items-center justify-content-center">
              <div className="col-12 text-center">
                <h2 className="breadcrumb-title">Product Page</h2>
                <ul className="breadcrumb-list">
                  <li className="breadcrumb-item">
                    <a href="index.html">Home</a>
                  </li>
                  <li className="breadcrumb-item active">Shop</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        {/* breadcrumb-area end */}

        {/* Shop Page Start  */}
        <div className="shop-category-area pt-100px pb-100px">
          <div className="container">
            <div className="row">
              <div className="col-lg-12 order-lg-last col-md-12 order-md-first">
                {/* Shop Top Area Start */}

                {/* Shop Top Area End */}
                {/* Shop Bottom Area Start */}
                <div className="shop-bottom-area">
                  {/* Tab Content Area Start */}
                  <div className="row">
                    <div className="col">
                      <div className="tab-content">
                        <div
                          className="tab-pane fade show active"
                          id="shop-grid"
                        >
                          <div className="row mb-n-30px">
                            {searched_products?.map((data) => (
                              <div className="col-lg-3 col-md-6 col-sm-6 col-xs-6 mb-30px">
                                <div className="product">
                                  <span className="badges">
                                    <span className="new">New</span>
                                  </span>
                                  <div className="thumb">
                                    <img
                                      src={data?.featured_image}
                                      alt="Product"
                                      height="260"
                                    />
                                  </div>
                                  <div className="content">
                                    <span className="category">
                                      {data?.categories?.name}
                                    </span>
                                    <h5 className="title">{data?.name}</h5>
                                    <span className="price">
                                      <span className="new">{data?.price}</span>
                                    </span>
                                  </div>
                                  <div className="actions">
                                    <a
                                      title="Add To Cart"
                                      className="action add-to-cart"
                                      data-bs-toggle="modal"
                                      data-bs-target="#exampleModal-Cart"
                                      style={{ cursor: "pointer" }}
                                    >
                                      <FaShoppingCart />
                                    </a>
                                    <a
                                      className="action wishlist"
                                      title="Wishlist"
                                      data-bs-toggle="modal"
                                      data-bs-target="#exampleModal-Wishlist"
                                      style={{ cursor: "pointer" }}
                                    >
                                      <FaHeart />
                                    </a>
                                    <a
                                      className="action quickview"
                                      data-link-action="quickview"
                                      title="Quick view"
                                      data-bs-toggle="modal"
                                      data-bs-target="#exampleModal"
                                      style={{ cursor: "pointer" }}
                                      href={"viewproduct/" + data?._id}
                                    >
                                      <FaRegEye />
                                    </a>
                                  </div>
                                </div>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* Tab Content Area End */}
                  {/*  Pagination Area Start */}
                  {/* <div
                    className="pro-pagination-style text-center text-lg-end"
                    data-aos="fade-up"
                    data-aos-delay={200}
                  >
                    <div className="pages">
                      <ul>
                        <li className="li">
                          <a className="page-link" href="#">
                            <i className="fa fa-angle-left" />
                          </a>
                        </li>
                        <li className="li">
                          <a className="page-link" href="#">
                            1
                          </a>
                        </li>
                        <li className="li">
                          <a className="page-link active" href="#">
                            2
                          </a>
                        </li>
                        <li className="li">
                          <a className="page-link" href="#">
                            3
                          </a>
                        </li>
                        <li className="li">
                          <a className="page-link" href="#">
                            <i className="fa fa-angle-right" />
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div> */}
                  {/*  Pagination Area End */}
                </div>
                {/* Shop Bottom Area End */}
              </div>
              {/* Sidebar Area Start */}
            </div>
          </div>
        </div>
        {/* Shop Page End  */}
      </>
    </div>
  );
};

export default AllProduct;
