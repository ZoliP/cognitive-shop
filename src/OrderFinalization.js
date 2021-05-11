import React, { Component } from "react";
import "./OrderFinalization.css";
class OrderFinalization extends Component {
  state = {};
  render() {
    return (
      <div className="container w-75">
        <h4 className="h4 font-weight-bold text-dark mt-5 ml-5 mb-5">
          Finalize your order in just three steps
        </h4>
        <div className="progressBar"></div>
        <div className="row checkoutSteps">
          <div className="col-4">
            <div className="billing container d-flex justify-content-center align-items-center height p-0">
              <div>
                <div className="d-flex align-items-center justify-content-center">
                  <h2 className="steps m-0 ">&nbsp;1&nbsp;</h2>
                </div>
                <div className="text-center mt-0 mb-5">
                  <p>Billing Address</p>
                </div>
                <form>
                  <div className="p-3 px-4 py-2 bg-light">
                    <div className="d-flex justify-content-between ">
                      <div className="form-check">
                        <input
                          className="form-check-input"
                          type="radio"
                          name="billing"
                          id="individual"
                          defaultChecked
                        />
                        <label
                          className="form-check-label"
                          htmlFor="individual"
                        >
                          Individual Person
                        </label>
                      </div>
                      <div className="form-check">
                        <input
                          className="form-check-input"
                          type="radio"
                          name="billing"
                          id="legal"
                          required
                        />
                        <label className="form-check-label" htmlFor="legal">
                          Legal
                        </label>
                      </div>
                    </div>
                    <span>Name</span>
                    <input
                      type="text"
                      className="form-control mb-2 border-0"
                      required
                    />
                    <span>First name</span>
                    <input
                      type="text"
                      className="form-control mb-2 border-0"
                      required
                    />
                    <span>E-mail</span>
                    <input
                      type="email"
                      className="form-control mb-2 border-0"
                    />
                    <span>Address</span>
                    <textarea
                      className="form-control mb-3 description-area border-0"
                      required
                    ></textarea>
                    <span>IBAN</span>
                    <input
                      type="text"
                      className="form-control mb-2 border-0"
                      required
                    />
                    <span>Bank</span>
                    <input
                      type="text"
                      className="form-control mb-2 border-0"
                      required
                    />
                    <span>Registration Number</span>
                    <input
                      type="text"
                      className="form-control mb-2 border-0"
                      required
                    />
                  </div>
                  <div className="text-left mt-3">
                    <button className="btn send" type="submit">
                      Continue
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
          <div className="col-4">
            <div className="delivery p-0 container d-flex justify-content-center align-items-center height">
              <div>
                <div className="d-flex align-items-center justify-content-center">
                  <h2 className="steps m-0">&nbsp;2&nbsp;</h2>
                </div>
                <div className="text-center mt-0 mb-5">
                  <p>Method of delivery</p>
                </div>
                <div className="delivery">
                  <label className="form-check-label">
                    Method of delivery:
                  </label>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="delivery"
                      id="deposit"
                      defaultChecked
                    />
                    <label className="form-check-label" htmlFor="deposit">
                      Pick up from a deposit
                    </label>
                  </div>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="delivery"
                      id="express"
                    />
                    <label className="form-check-label" htmlFor="express">
                      Express delivery
                    </label>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-4">
            <div className="payment p-0 container d-flex justify-content-center align-items-center height">
              <div>
                <div className="d-flex align-items-center justify-content-center">
                  <h2 className="steps m-0 ">&nbsp;3&nbsp;</h2>
                </div>
                <div className="text-center mt-0 mb-5">
                  <p>Finalize order</p>
                </div>
                <div className="delivery">
                  <label className="form-check-label">Payment method:</label>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="payment"
                      id="cashOnDelivery"
                      defaultChecked
                    />
                    <label
                      className="form-check-label"
                      htmlFor="cashOnDelivery"
                    >
                      Cash on delivery
                    </label>
                  </div>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="payment"
                      id="creditCard"
                    />
                    <label className="form-check-label" htmlFor="creditCard">
                      Credit Card
                    </label>
                  </div>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="payment"
                      id="paymenyOrder"
                    />
                    <label className="form-check-label" htmlFor="paymenyOrder">
                      Payment order
                    </label>
                  </div>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="payment"
                      id="cashOnPickup"
                    />
                    <label className="form-check-label" htmlFor="cashOnPickup">
                      Cash on pickup
                    </label>
                  </div>
                </div>

                <div className="termsAndConditions mt-4">
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="terms"
                      id="termsAgree"
                      required
                    />
                    <label className="form-check-label" htmlFor="termsAgree">
                      I agree with the Terms and conditions
                    </label>
                  </div>
                </div>
                <label className="form-check-label">Comments</label>
                <textarea className="form-control mb-3 description-area border-1"></textarea>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default OrderFinalization;
