import axios from 'axios';
import Cookies from 'js-cookie';
import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import CouponForm from './CouponForm';
import TopNav from './TopNav'

const AddCoupon = () => {
    const history = useHistory();

    var companyID = Cookies.get('companyID')

    //state
    const [state, setState] = useState({
        Name: '',
        Description: '',
        Validity: '',
        NoCoupons: '',
        Price: ''
    })

    //destructure values from state
    const { Name, Description, Validity, NoCoupons, Price } = state;

    const handleChange = (name) => (event) => {
        setState({ ...state, [name]: event.target.value });  //spread operator
    }

    // storing the data in the database
    const handleSubmit = event => {
        var companyID = Cookies.get('companyID')
        event.preventDefault();
        {
            axios
                .post(`${process.env.REACT_APP_API}/addCoupon`, { Name, Description, Validity, NoCoupons, Price, companyID })
                .then(response => {
                    console.log(response);
                    history.push(`/coupons`)
                })
                .catch(error => {
                    console.log(error);
                    alert(`Cannot add coupon`);
                });
        }
    };


    return (
        <>
            <TopNav  />
            <div className="container" style={{width:'40%'}} >
                <CouponForm handleSubmit={handleSubmit} handleChange={handleChange} state={state} page="Add" />
            </div>
        </>
    )
}

export default AddCoupon;