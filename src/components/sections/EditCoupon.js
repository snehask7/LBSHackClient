import axios from 'axios';
import Cookies from 'js-cookie';
import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import CouponForm from './CouponForm';
import TopNav from './TopNav'

const AddCoupon = (props) => {
    const history = useHistory();

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

    useEffect(() => {
        axios
            .get(`${process.env.REACT_APP_API}/Coupon/${props.match.params.id}`)
            .then(response => {
                const { Name, Description, Validity, NoCoupons, Price } = response.data;
                setState({ ...state, Name, Description, Validity, NoCoupons, Price })
            })
            .catch(error => alert('Error loading Coupon'));
    }, [props.match.params.id],
    );


    // storing the data in the database
    const handleSubmit = event => {    
        console.log('here')    
        event.preventDefault();
        {
            axios
                .put(`${process.env.REACT_APP_API}/editCoupon/${props.match.params.id}`, { Name, Description, Validity, NoCoupons, Price})
                .then(response => {
                    console.log(response);
                    history.push(`/coupons`)
                })
                .catch(error => {
                    console.log(error);
                    alert(`Cannot edit coupon`);
                });
        }
    };

    return (
        <>
            <TopNav  />
            <div className="container" style={{ width: '40%' }} >
                <CouponForm handleSubmit={handleSubmit} handleChange={handleChange} state={state} page="Edit" />
            </div>
        </>
    )
}

export default AddCoupon;