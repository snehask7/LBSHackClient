import React from 'react';
import { Col, Form } from 'react-bootstrap';

const DonationForm = ({ handleSubmit, handleChange, state, page }) => {

    return (
        <Form onSubmit={handleSubmit}>
            <Form.Row>
                <Form.Group as={Col} md="2" >
                    <Form.Label> <h6>Name<label class="manditory">*</label></h6></Form.Label>
                </Form.Group>
                <Form.Group as={Col} md={process.env.REACT_APP_WIDTH} >
                    <input value={state.Name} type="text" className="form-control" placeholder="Name" required onChange={handleChange('Name')} />
                </Form.Group>
            </Form.Row>
            <br />
            <div className="centerItems">
                <button type="submit" className="btn btn-primary text-center" style={{ width: '10em' }} >Submit</button>
            </div>

        </Form >

    )

}


export default DonationForm;