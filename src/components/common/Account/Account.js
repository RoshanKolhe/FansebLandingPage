import { de } from "date-fns/locale";
import React, { useEffect, useState } from "react";
import { Formik, Form, Field } from "formik";
import * as yup from "yup";
import Header from "../Header/Header";
import { useLocation, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  setUserProfileDetailsThunk,
  uploadProfileInfoThunk,
} from "../../../store/slices/user/user.slice";

const Dashboard = (
  <div className="tab-pane fade show active">
    <h4>Dashboard </h4>
    <p>
      From your account dasmhboard. you can easily check &amp; view your{" "}
      <a href="#">recent orders</a>, manage your{" "}
      <a href="#">shipping and billing addresses</a> and{" "}
      <a href="#">Edit your password and account details.</a>
    </p>
  </div>
);

const Orders = (
  <div className="tab-pane fade show active" id="orders">
    <h4>Orders</h4>
    <div className="table_page table-responsive">
      <table>
        <thead>
          <tr>
            <th>Order</th>
            <th>Date</th>
            <th>Status</th>
            <th>Total</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td>May 10, 2018</td>
            <td>
              <span className="success">Completed</span>
            </td>
            <td>$25.00 for 1 item </td>
            <td>
              <a href="cart.html" className="view">
                view
              </a>
            </td>
          </tr>
          <tr>
            <td>2</td>
            <td>May 10, 2018</td>
            <td>Processing</td>
            <td>$17.00 for 1 item </td>
            <td>
              <a href="cart.html" className="view">
                view
              </a>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
);

const Downloads = (
  <div className="tab-pane fade show active" id="downloads">
    <h4>Downloads</h4>
    <div className="table_page table-responsive">
      <table>
        <thead>
          <tr>
            <th>Product</th>
            <th>Downloads</th>
            <th>Expires</th>
            <th>Download</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Shopnovilla - Free Real Estate PSD Template</td>
            <td>May 10, 2018</td>
            <td>
              <span className="danger">Expired</span>
            </td>
            <td>
              <a href="#" className="view">
                Click Here To Download Your File
              </a>
            </td>
          </tr>
          <tr>
            <td>Organic - ecommerce html template</td>
            <td>Sep 11, 2018</td>
            <td>Never</td>
            <td>
              <a href="#" className="view">
                Click Here To Download Your File
              </a>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
);

const Addresses = (
  <div className="tab-pane fade show active" id="address">
    <p>The following addresses will be used on the checkout page by default.</p>
    <h5 className="billing-address">Billing address</h5>
    <a href="#" className="view">
      Edit
    </a>
    <p className="mb-2">
      <strong>Michael M Hoskins</strong>
    </p>
    <address>
      <span className="mb-1 d-inline-block">
        <strong>City:</strong> Seattle
      </span>
      ,
      <br />
      <span className="mb-1 d-inline-block">
        <strong>State:</strong> Washington(WA)
      </span>
      ,
      <br />
      <span className="mb-1 d-inline-block">
        <strong>ZIP:</strong> 98101
      </span>
      ,
      <br />
      <span>
        <strong>Country:</strong> USA
      </span>
    </address>
  </div>
);
function useQuery() {
  const { search } = useLocation();
  return React.useMemo(() => new URLSearchParams(search), [search]);
}
const Account = () => {
  let SignupSchema = yup.object().shape({
    first_name: yup.string().required("First name is required"),
    last_name: yup.string().required("Last name is required"),
    street: yup.string().required("Street name is required"),
    zipcode: yup.string().required("Zipcode is required"),
    state: yup.string().required("State is required"),
    city: yup.string().required("City is required"),
  });
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(setUserProfileDetailsThunk())
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
  }, []);

  const { first_name, last_name, street, zipcode, state, city } = useSelector(
    ({ user }) => user
  );
  const Account_details = (
    <Formik
      enableReinitialize="true"
      initialValues={{
        first_name,
        last_name,
        street,
        zipcode,
        state,
        city,
      }}
      validationSchema={SignupSchema}
      onSubmit={(values) => {
        // same shape as initial values
        console.log("values", values);
        dispatch(
          uploadProfileInfoThunk({
            first_name: values.first_name,
            last_name: values.last_name,
            street: values.street,
            zipcode: values.zipcode,
            state: values.state,
            city: values.city,
          })
        )
          .unwrap()
          .then((res) => {
            navigate("/allproduct");
          })
          .catch((err) => console.log(err));
        console.log(values);
      }}
    >
      {({ errors, touched }) => (
        <div className="tab-pane fade show active" id="account-details">
          <h3>Account details </h3>
          <div className="login">
            <div className="login_form_container">
              <div className="account_login_form">
                <Form>
                  <p>
                    Already have an account?{" "}
                    <a
                      href="#"
                      data-bs-toggle="modal"
                      data-bs-target="#loginActive"
                    >
                      Log in instead!
                    </a>
                  </p>

                  <div className="default-form-box mb-20">
                    <label>First Name</label>
                    <Field type="text" name="first_name" />
                    {errors.first_name && touched.first_name ? (
                      <div style={{ color: "red" }}>{errors.first_name}</div>
                    ) : null}
                  </div>
                  <div className="default-form-box mb-20">
                    <label>Last Name</label>
                    <Field type="text" name="last_name" />
                    {errors.last_name && touched.last_name ? (
                      <div style={{ color: "red" }}>{errors.last_name}</div>
                    ) : null}
                  </div>

                  <div className="default-form-box mb-20">
                    <label>Street</label>
                    <Field type="text" name="street" />
                    {errors.street && touched.street ? (
                      <div style={{ color: "red" }}>{errors.street}</div>
                    ) : null}
                  </div>
                  <div className="default-form-box mb-20">
                    <label>City</label>
                    <Field type="text" name="city" />
                    {errors.city && touched.city ? (
                      <div style={{ color: "red" }}>{errors.city}</div>
                    ) : null}
                  </div>
                  <div className="default-form-box mb-20">
                    <label>State</label>
                    <Field type="text" name="state" />
                    {errors.state && touched.state ? (
                      <div style={{ color: "red" }}>{errors.state}</div>
                    ) : null}
                  </div>
                  <div className="default-form-box mb-20">
                    <label>Zipcode</label>
                    <Field type="text" name="zipcode" />
                    {errors.zipcode && touched.zipcode ? (
                      <div style={{ color: "red" }}>{errors.zipcode}</div>
                    ) : null}
                  </div>
                  <div className="save_button mt-3">
                    <button className="btn" type="submit">
                      Save
                    </button>
                  </div>
                </Form>
              </div>
            </div>
          </div>
        </div>
      )}
    </Formik>
  );

  const sideBarNavData = [
    {
      name: "Orders",
      id: 1,
      isSelected: true,
      Data: Orders,
    },

    {
      name: "Account Details",
      id: 2,
      isSelected: false,
      Data: Account_details,
    },
  ];

  const [sideBarNav, setsideBarNav] = useState(sideBarNavData);

  const fncSelectSideBar = (id) => {
    const data = [...sideBarNav];
    for (var i = 0; i < data.length; i++) {
      console.log(data[i].id, id);
      if (data[i].id == id) {
        data[i].isSelected = true;
      } else {
        data[i].isSelected = false;
      }
    }
    setsideBarNav(data);
  };
  const query = useQuery();
  useEffect(() => {
    const type = query.get("type");
    console.log(type);
    if (type == "orders") {
      fncSelectSideBar(1);
    } else if (type == "profile") {
      fncSelectSideBar(2);
    }
  }, [query]);
  return (
    <div>
      <Header />
      <div className="main-wrapper">
        {/* breadcrumb-area start */}
        <div className="breadcrumb-area">
          <div className="container">
            <div className="row align-items-center justify-content-center">
              <div className="col-12 text-center">
                <h2 className="breadcrumb-title">Account</h2>
                {/* breadcrumb-list start */}
                <ul className="breadcrumb-list">
                  <li className="breadcrumb-item">
                    <a href="index.html">Home</a>
                  </li>
                  <li className="breadcrumb-item active">Account</li>
                </ul>
                {/* breadcrumb-list end */}
              </div>
            </div>
          </div>
        </div>
        {/* breadcrumb-area end */}
        {/* account area start */}
        <div className="account-dashboard pt-100px pb-100px">
          <div className="container">
            <div className="row">
              <div className="col-sm-12 col-md-3 col-lg-3">
                <div
                  className="dashboard_tab_button"
                  data-aos="fade-up"
                  data-aos-delay={0}
                >
                  <ul role="tablist" className="nav flex-column dashboard-list">
                    {sideBarNav.map((data) => (
                      <li>
                        <span
                          className={
                            data.isSelected ? "nav-link active" : "nav-link"
                          }
                          id={data.id}
                          onClick={() => {
                            fncSelectSideBar(data.id);
                          }}
                        >
                          {data.name}
                        </span>
                      </li>
                    ))}
                    {/* <li>
                      <span
                        className="nav-link active"
                        id="Dashboard"
                        onClick={() => {
                          fncSelectSideBar("Dashboard");
                        }}
                      >
                        Dashboard
                      </span>
                    </li>
                    <li>
                      <span
                        className="nav-link"
                        id="Orders"
                        onClick={() => {
                          fncSelectSideBar("Orders");
                        }}
                      >
                        Orders
                      </span>
                    </li>
                    <li>
                      <span
                        className="nav-link "
                        id="Downloads"
                        onClick={() => {
                          fncSelectSideBar("Downloads");
                        }}
                      >
                        Downloads
                      </span>
                    </li>
                    <li>
                      <span
                        className="nav-link "
                        id="Addresses"
                        onClick={() => {
                          fncSelectSideBar("Addresses");
                        }}
                      >
                        Addresses
                      </span>
                    </li>
                    <li>
                      <span
                        className="nav-link"
                        id="Account_details"
                        onClick={() => {
                          fncSelectSideBar("Account_details");
                        }}
                      >
                        Account details
                      </span>
                    </li>
                    <li>
                      <span
                        className="nav-link"
                        id="logout"
                        onClick={() => {
                          fncSelectSideBar("logout");
                        }}
                      >
                        logout
                      </span>
                    </li> */}
                  </ul>
                </div>
              </div>
              <div className="col-sm-12 col-md-9 col-lg-9">
                <div
                  className="tab-content dashboard_content"
                  data-aos="fade-up"
                  data-aos-delay={200}
                >
                  {sideBarNav.map((d) => d.isSelected && d.Data)}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Account;
