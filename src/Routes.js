import Cookies from 'js-cookie';
import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Login from './login';
import Home from './views/Home';
import Coupons from './views/Coupons'
import Dashboard from './views/Dashboard'
const Routes = props => {
        return (
            <BrowserRouter>
                <Switch>
                    <Route path="/" exact component={Home} />
                    <Route path="/login" exact component={Login} />
                    <Route path="/coupons" exact component={Coupons} />
                    <Route path="/dashboard" exact component={Dashboard} />

                    {/* <Route path="/addReceipt" exact component={AddReceipt} />
                    <Route path="/viewReceipts" render={() => <ViewReceipts formatDate={formatDate} />} />
                    <Route path="/receipt/:id" exact component={ReceiptDetails} />
                    <Route path="/editReceipt" render={() => <EditReceipt formatDate={formatDate} />} />
                    <Route path="/receipt/update/:id" exact component={UpdateReceipt} />
                    <Route path="/searchReceipt" render={() => <SearchReceipt formatDate={formatDate} />} />x
                   */}
                </Switch>
            </BrowserRouter>                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        
        )
    }

export default Routes;