  import React, { useEffect, useState } from "react";
import Header from "../Header/Header";
import { useParams } from "react-router-dom";
import {
  FaUndo,
  FaHeart,
  FaShoppingCart,
  FaPlus,
  FaMinus,
  FaCommentsDollar,
} from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { getProductDetailsByProductIDThunk } from "../../../store/slices/product/product.slice";

const SingleProduct = () => {
  //Static data
  const images = ["https://da7f9vv2wtchi.cloudfront.net/filters:quality(95)/filters:autojpg()/production-server/influencer-product/thumbnail/12/3929/252x0/image00001.jpeg",
  "https://da7f9vv2wtchi.cloudfront.net/filters:quality(95)/filters:autojpg()/production-server/influencer-product/thumbnail/12/3668/252x0/27B56A0C-7775-444F-8A01-64F11DC8593A.jpeg"
    ]

  const product_details = {
    name: "One Piece Dress",
    short_description:"Lorem Ipsum, Lorem Ipsum is simply dummy",
    sku:20,
    price:'$3000',

  };
  const categories = {
    
  }
  const productrating = ["4","5","5"];
  const tags = ["Clothigs","Winter"]

  const params = useParams();
  const dispatch = useDispatch();
  const [count, setCount] = useState(1);

  // const {
  //   product_details,
  //   product_details: { categories, tags, images },
  // } = useSelector(({ product }) => product);

  const [featuredImage, setFeaturedImage] = useState(null);

  // const [productrating, setrating] = useState(
  //   product_details?.rating_count
  //     ? () => {
  //         const arr = new Array([product_details?.rating_count]);
  //         for (var i = 0; i < arr.length; i++) {
  //           arr[i] = 1;
  //         }
  //         return arr;
  //       }
  //     : () => {
  //         const arr = new Array(0);
  //         for (var i = 0; i < arr.length; i++) {
  //           arr[i] = 1;
  //         }
  //         return arr;
  //       }
  // );

  // useEffect(() => {
  //   dispatch(getProductDetailsByProductIDThunk(params.productID));
  // }, [params]);

  // useEffect(() => {
  //   setFeaturedImage(product_details?.featured_image);
  // }, [product_details]);

  function fncSub() {
    if (count > 1) {
      setCount((count) => count - 1);
    }
  }

  function fncAdd() {
    setCount((count) => count + 1);
  }
  return (
    <div>
      <div class="main-wrapper">
        {/* <Header />
        <div className="breadcrumb-area">
          <div className="container">
            <div className="row align-items-center justify-content-center">
              <div className="col-12 text-center">
                <h2 className="breadcrumb-title">Single Product</h2>
                <ul className="breadcrumb-list">
                  <li className="breadcrumb-item">
                    <a href="index.html">Home</a>
                  </li>
                  <li className="breadcrumb-item active">Product</li>
                </ul>
              </div>
            </div>
          </div>
        </div> */}
        <div className="product-details-area pt-100px pb-100px">
          <div className="container">
            <div className="row">
              <div className="col-lg-2 col-sm-12 col-xs-12">
                <div style={{ height: "500px", overflow: "scroll" }}>
                  {images?.map((data) => (
                    <div className="mb-2">
                      <img
                        className="img-responsive m-auto"
                        src={data}
                        alt=""
                        height="100"
                      />
                    </div>
                  ))}
                </div>
              </div>
              <div className="col-lg-5 col-sm-12 col-xs-12 mb-lm-30px mb-md-30px mb-sm-30px">
                <div className="swiper-container zoom-top">
                  <div className="swiper-wrapper">
                    <div className="swiper-slide">
                      <img
                        className="img-responsive m-auto"
                        src={images[0]}
                        alt=""
                        height="500"
                        style={{ borderRadius: "8px" }}
                      />
                      {/* <a
                        className="venobox full-preview"
                        data-gall="myGallery"
                        href="https://images.pexels.com/photos/7290174/pexels-photo-7290174.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                      >
                        <i className="fa fa-arrows-alt" aria-hidden="true" />
                      </a> */}
                    </div>
                  </div>
                </div>
              </div>
              <div
                className="col-lg-5 col-sm-12 col-xs-12"
                data-aos="fade-up"
                data-aos-delay={200}
              >
                <div className="product-details-content quickview-content ml-25px">
                  <h2>{product_details?.name}</h2>
                  <div className="pricing-meta">
                    <ul className="d-flex">
                      <li className="new-price">{product_details?.price}</li>
                    </ul>
                  </div>
                  <div className="pro-details-rating-wrap">
                    <div className="rating-product">
                      {productrating?.map((data) => (
                        <i className="fa fa-star" />
                      ))}
                    </div>
                    {/* <span className="read-review">
                      <a className="reviews" href="#">
                        (5 Customer Review)
                      </a>
                    </span> */}
                  </div>
                  
                  {/* <p className="mt-30px">{productrating?.short_description}</p> */}

                  
                  <div className="pro-details-categories-info pro-details-same-style d-flex m-0">
                    <span>SKU:</span>
                    <ul className="d-flex">
                      <li>{product_details?.sku}</li>
                    </ul>
                  </div>
                  {/* <div className="pro-details-categories-info pro-details-same-style d-flex m-0">
                    <span>Categories: </span>
                    <ul className="d-flex">
                      <li>
                        {categories != undefined ? categories[0].name : ""}
                      </li>
                    </ul>
                  </div> */}
                  <div className="pro-details-categories-info pro-details-same-style d-flex m-0">
                    <span>Tags: </span>
                    <ul className="d-flex">
                      {tags?.map((data) => (
                        <li>{data}</li>
                      ))}
                    </ul>
                  </div>
                  <div className="pro-details-quality">
                    {/* // plus minus button for quantity */}

                    <div
                      style={{
                        width: "90px",
                        height: "50px",
                        backgroundColor: "#454545",
                        textAlign: "center",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "space-around",
                        marginRight: "10px",
                        borderRadius: "5px",
                      }}
                    >
                      <span
                        style={{
                          fontSize: "26px",
                          color: "#fff",
                          cursor: "pointer",
                        }}
                        onClick={fncSub}
                      >
                        -
                      </span>
                      <span
                        style={{
                          fontSize: "16px",
                          color: "#fff",
                        }}
                      >
                        {count}
                      </span>
                      <span
                        style={{
                          fontSize: "22px",
                          color: "#fff",
                          cursor: "pointer",
                        }}
                        onClick={fncAdd}
                      >
                        +
                      </span>
                    </div>

                    <div className="pro-details-cart">
                      {/* <button className="add-cart m-0"> Add To Cart</button> */}
                      <button className="add-cart m-0"> Buy Now</button>
                    </div>
                    {/* <div className="pro-details-compare-wishlist pro-details-wishlist ">
                      <a href="wishlist.html">
                        <FaHeart />
                      </a>
                    </div>
                    <div className="pro-details-compare-wishlist pro-details-wishlist ">
                      <a href="compare.html">
                        <FaUndo />
                      </a>
                    </div> */}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleProduct;
