import  { useState } from 'react';
import { TextField, Button, Box } from '@mui/material'
//import Cookies from 'js-cookie';
import { GetUser } from "../store/action/index";
import { SuccessAuth } from "../store/action/isAuth"
import { connect } from "react-redux";
import { useNavigate } from "react-router-dom";
//import { GET_USER_ACTION, SetUser } from '../action';
//import { LogSetUser } from "../store/saga/user"

const Login = ({reRender, ...props }) => {
    const [user, setUser] = useState({ username: "", password: "" });
    
    let navigate = useNavigate();
    //test = SuccessAuth.Auth;
    console.log(SuccessAuth)
    //if(test.length){
    //  navigate('/data');
    //}
      return (
        <Box sx={{
          display: 'grid',width:"60%",mx:"auto", mt:"110px", columnGap: 2, gap: 2, border: '10px', bordercolor: 'black',
          gridAutoColumns: '5 fr', justifyContent: 'center', alignItems: 'center'}}>
          
          <Box sx={{ display: 'block', gridColumn: '2 / 4' }}><h3>Login</h3></Box >
          <TextField sx={{ display: 'block', gridColumn: '2 / 4' }} label="username" onChange={(e) => setUser(pre=>({...pre, username: e.target.value}))}  />
          <TextField sx={{ display: 'block', gridColumn: '2 / 4' }} label="password" onChange={(e) => setUser(pre=>({...pre, password: e.target.value}))}  />
          <Box sx={{ display: 'block', gridColumn: '2 / 4' }}><Button variant="contained" onClick={()=>{ props.GetUser(user.username, user.password)}}>
              login
            </Button >
          </Box>
        </Box >
      );

}
const mapStateToProps = state => {
  return {
    username: state.username,
    password: state.password,
  }
}

const mapDispatchToProps = dispatch => {
  return {
    GetUser: (username,password) => dispatch(GetUser(username,password)),
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(Login);
