import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import Container from "@material-ui/core/Container";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import axios from 'axios';
import Cookies from 'js-cookie';
import React, { useEffect, useState } from 'react';
import { Form } from 'react-bootstrap';
import Spinner from 'react-bootstrap/Spinner';
import Background from './assets/images/background.png';
import './Login.css';

const Login = props => {

    const useStyles = makeStyles((theme) => ({
        paper: {
            marginTop: theme.spacing(8),
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
        },
        avatar: {
            margin: theme.spacing(1),
            backgroundColor: "theme.palette.secondary.main",
        },
        form: {
            width: "100%", // Fix IE 11 issue.
            marginTop: theme.spacing(1),
            color: "white"
        },
        submit: {
            margin: theme.spacing(3, 0, 2),
        },
        textField: {
            width: '90%',
            marginLeft: 'auto',
            marginRight: 'auto',
            paddingBottom: 0,
            marginTop: 0,
            fontWeight: 500
        },
        input: {
            fontColor: 'white'
        },
        notchedOutline: {
            borderWidth: "1px",
            borderColor: "white !important"
        }

    }));

    const [state, setState] = useState({
        Email: 'test@gmail.com',
        Password: 'test$123'
    })

    const { Email, Password } = state;
    const [loginSpinner, setSpinner] = useState(true)




    const handleChange = (name) => (event) => {

        setState({ ...state, [name]: event.target.value });  //spread operator
    }

    const handleSubmit = event => {
        setSpinner(false)
        event.preventDefault();
        console.table({ Email, Password });
        axios
            .post(`${process.env.REACT_APP_API}/login`, { Email, Password })
            .then(response => {
                if (response.data !== 0) {
                    Cookies.set("companyID", response.data);
                    props.history.push({
                        pathname: `/dashboard`,
                    });
                }
                else {
                    alert('Invalid Credentials!'); 
                    setSpinner(true)
                    setState({...state,Password:''})
                }
            })
            .catch(error => {
                alert(error);
            });
    };
    const classes = useStyles();


    return (
        <body style={{ backgroundImage: `url(${Background})` }}>
            <Container component="main" maxWidth="xs" >
                <div className={classes.paper} style={{ marginTop: '10rem', height: '30rem', backgroundColor: 'white', padding: '3rem', borderRadius: '20px' }}>
                    <Avatar className={classes.avatar}>
                        <LockOutlinedIcon />
                    </Avatar>
                    <h1 class="sign-in-heading">Sign In</h1>
                    <p style={{fontSize:'15px',color:'#838383'}}>Username: test@gmail.com, <br></br>Password: test$123</p>
                    <Form className={classes.form} onSubmit={handleSubmit}>
                        <TextField
                            variant="outlined"
                            margin="normal"
                            id="outlined"
                            label={<span class="label-span">Email*</span>}
                            onChange={handleChange}
                            type="text"
                            fullWidth
                            value={Email}
                            InputLabelProps={{
                                shrink: true,
                                fontSize: 30
                            }}
                            onChange={handleChange('Email')} />
                        <TextField
                            variant="outlined"
                            margin="normal"
                            fullWidth
                            name="password"
                            label={<span class="label-span">Password*</span>}
                            type="password"
                            id="password"
                            value={Password}
                            InputLabelProps={{
                                shrink: true,
                            }}
                            autoComplete="current-password"
                            onChange={handleChange('Password')}
                        />
                        <div class="d-flex align-items-center">
                            <Button
                                type="submit"
                                variant="contained"
                                style={{ width: '60%', marginLeft: '20%' }}
                                className={classes.submit}
                                onClick={handleSubmit}
                            >
                                Sign In
                            </Button>
                            <Spinner style={{ marginLeft: '2em', color: 'black' }} hidden={loginSpinner} animation="border" />
                        </div>
                    </Form>
                </div>
            </Container>

        </body>
    );
};

export default Login;

