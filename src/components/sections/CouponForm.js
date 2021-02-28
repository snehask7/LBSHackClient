import React from 'react';
import { Col, Form } from 'react-bootstrap';

const DonationForm = ({ handleSubmit, handleChange, state, page }) => {

    return (
        <div class="login-box" style={{marginTop:'3em'}}>
          <h2>{page} Coupon</h2>
          <form onSubmit={handleSubmit}>
            <div class="user-box">
              <input value={state.Name} onChange={handleChange('Name')} type="text" required=""></input>
              <label>Name</label>
            </div>
            <div class="user-box">
              <input value={state.Description} onChange={handleChange('Description')} type="text" required=""></input>
              <label>Discount</label>
            </div>
            <div class="user-box">
              <input value={state.Validity} onChange={handleChange('Validity')} type="text" required=""></input>
              <label>Valid Through</label>
            </div>
            <div class="user-box">
              <input value={state.NoCoupons} onChange={handleChange('NoCoupons')} type="text" required=""></input>
              <label>Number of Coupons</label>
            </div>
            <div class="user-box">
              <input value={state.Price} type="text" onChange={handleChange('Price')} required=""></input>
              <label>Points Required</label>
            </div>
            <div class="centerItems">
            <button >
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              SUBMIT
            </button>
            </div>
          </form>
        </div>

    )

}


export default DonationForm;