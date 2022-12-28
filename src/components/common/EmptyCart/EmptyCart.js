import React from 'react'

const EmptyCart = () => {
  return (
    <div><div className="main-wrapper">
   
  
  {/* breadcrumb-area start */}
  <div className="breadcrumb-area">
    <div className="container">
      <div className="row align-items-center justify-content-center">
        <div className="col-12 text-center">
          <h2 className="breadcrumb-title">Empty Cart</h2>
          {/* breadcrumb-list start */}
          <ul className="breadcrumb-list">
            <li className="breadcrumb-item">
              <a href="index.html">Home</a>
            </li>
            <li className="breadcrumb-item active">Empty Cart</li>
          </ul>
          {/* breadcrumb-list end */}
        </div>
      </div>
    </div>
  </div>
  {/* breadcrumb-area end */}


    {/* Empty Cart area start */}
    <div className="empty-cart-area pb-100px pt-100px">
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <div className="cart-heading">
              <h2>Your cart item</h2>
            </div>
            <div className="empty-text-contant text-center">
              <i className="pe-7s-shopbag" />
              <h3>There are no more items in your cart</h3>
              <a className="empty-cart-btn" href="shop-4-column.html">
                <i className="fa fa-arrow-left"> </i> Continue shopping
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
    {/* Empty Cart area end */}
  </div>
  </div>
  )
}

export default EmptyCart;