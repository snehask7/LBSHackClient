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
            backgroundColor: theme.palette.secondary.main,
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
        Email: '',
        Password: ''
    })

    const { Email, Password } = state;
    const [loginSpinner, setSpinner] = useState(true)

    useEffect(() => {
        var DisplayName = Cookies.get("DisplayName");
        if (DisplayName !== "")
            window.location.reload()
        Cookies.set("DisplayName", "");
    }, [])

    const fetchDetails = () => {
        Cookies.set("DisplayName", "");
        Cookies.set("TenantName", "");
        Cookies.set("Email", "");
        Cookies.set("Role", "");
        Cookies.set("ShowReports", "");
        Cookies.set("ShowImport", "");
        var userID = Cookies.get("ID");
        axios.get(`${process.env.REACT_APP_API}/getLogin`, {
            params: {
                userID
            }
        }
        )
            .then(response => {
                const fetchName = response.data[0].DisplayName;
                const fetchTenant = response.data[0].TenantName;
                const fetchRole = response.data[0].Role
                const Email = response.data[0].Email
                var ShowReports = "True"
                if (response.data[0].ShowReports)
                    ShowReports = response.data[0].ShowReports
                var ShowImport="True"
                if (response.data[0].ShowImport)
                    ShowImport = response.data[0].ShowImport
                Cookies.set('DisplayName', fetchName)
                Cookies.set('TenantName', fetchTenant)
                Cookies.set('Email', Email)
                Cookies.set('Role', fetchRole)
                Cookies.set('ShowReports', ShowReports)
                Cookies.set('ShowImport', ShowImport)
                window.location.reload()

            })
            .catch(err => alert(err));
    }



    const handleChange = (name) => (event) => {

        setState({ ...state, [name]: event.target.value });  //spread operator
    }

    const handleSubmit = event => {
        setSpinner(false)
        event.preventDefault();
        console.table({ Email, Password });
        console.log(`${process.env.REACT_APP_API}/login`);
        axios
            .post(`${process.env.REACT_APP_API}/login`, { Email, Password })
            .then(response => {
                console.log(response)
                if (response.data !== 0) {
                    Cookies.set("ID", response.data);
                    fetchDetails();
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
        <body style={{ background: '#192841' }}>
            <Container component="main" maxWidth="xs" >
                <div className={classes.paper} style={{ marginTop: '10rem', height: '30rem', backgroundColor: 'white', padding: '3rem', borderRadius: '20px' }}>
                    <Avatar className={classes.avatar}>
                        <LockOutlinedIcon />
                    </Avatar>
                    <h1 >Sign In</h1>

                    <Form className={classes.form} onSubmit={handleSubmit}>
                        <TextField
                            variant="outlined"
                            margin="normal"
                            id="outlined"
                            label={<h3>Email*</h3>}
                            onChange={handleChange}
                            type="text"
                            fullWidth
                            value={Email}

                            InputLabelProps={{
                                shrink: true,
                                // style: { color: '#fff' },
                                fontSize: 30
                            }}
                            onChange={handleChange('Email')} />
                        <TextField
                            variant="outlined"
                            margin="normal"
                            fullWidth
                            name="password"
                            label={<h3>Password*</h3>}
                            type="password"
                            id="password"
                            value={Password}
                            InputLabelProps={{
                                shrink: true,
                                // style: { color: '#fff' },
                            }}
                            autoComplete="current-password"
                            onChange={handleChange('Password')}
                        />
                        <div class="d-flex align-items-center">
                            <Button
                                type="submit"
                                variant="contained"
                                color="primary"
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

