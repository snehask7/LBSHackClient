import Cookies from 'js-cookie';
import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Login from './login';
import Home from './views/Home';
import Coupons from './views/Coupons'
import AddCoupon from './components/sections/AddCoupon';
import EditCoupon from './components/sections/EditCoupon';
import Dashboard from './views/Dashboard'
const Routes = props => {
        return (
            <BrowserRouter>
                <Switch>
                    <Route path="/" exact component={Home} />
                    <Route path="/login" exact component={Login} />
                    <Route path="/coupons" exact component={Coupons} />
                    <Route path="/addCoupon" exact component={AddCoupon} />
                    <Route path="/dashboard" exact component={Dashboard} />
                    <Route path="/coupon/:id" exact component={EditCoupon} />

                </Switch>
            </BrowserRouter>                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        
        )
    }

export default Routes;