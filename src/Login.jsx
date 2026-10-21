import './css/Login.css'
import language from "./assets/language.png"
import help from "./assets/question.png"
import { useState } from 'react';
import axios from 'axios'
import { useNavigate } from 'react-router-dom';
import logo from "./assets/logo boking.jpg";


function Login() {
    const [email, setEmail] = useState('');
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault()

        if (!email || email == '') {
            alert("email cannot be empty");
            return;
        }

        axios.post('http://localhost:5000/user/add', { email })
            .then(result => {
                if (result.data.status == 'exist') {
                    localStorage.setItem('user_id', result.data.user_data._id);

                    localStorage.setItem('userEmail', email);

                    navigate('/home');
                } else if (result.data._id) {
                    localStorage.setItem('user_id', result.data._id);

                    localStorage.setItem('userEmail', email);

                    navigate("/home");
                } else {
                    alert("error")
                }
            })
            .catch(err => console.log(err))

    }


    return (

        <div>


            <nav>
                <img src={logo}  style={{ height: 60, width: 'auto' }} />
                <div class="Lang-help">
                    <a href="#"><img src={language} /> </a>
                    <a href="#"><img src={help} /></a>
                </div>
            </nav>
            <div class="loginContainer">
                <form onSubmit={handleSubmit}>
                    <div class="login">
                        <p>Sign in or create an account</p>
                        <h4 class="sgntxt"> You can sign in using your Booking web account to access our services </h4>
                        <div class="border-box">
                            <label> E-mail</label>

                            <input type="email"
                                placeholder="Enter your E-mail"
                                autoComplete="off"
                                name="E-mail"
                                onChange={(e) => setEmail(e.target.value)}

                            />
                            <button class="btnmail" type="submit"> Continue with E-mail</button>
                        </div>

                    </div>
                </form>
            </div>




        </div>


    );
}


export default Login;