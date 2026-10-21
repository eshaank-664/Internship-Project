import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./css/PaymentSuccess.css";
function PaymentSuccess() {

    const navigate = useNavigate();

    useEffect(() => {

        const booking = JSON.parse(
            localStorage.getItem("pendingBooking")
        );

        if (booking) {

            fetch(
                'http://localhost:5000/api/orders/add',
                {

                    method: 'POST',

                    headers: {

                        'Content-Type': 'application/json'

                    },

                    body: JSON.stringify(booking)

                }

            )
            .then(res => res.json())
            .then(() => {

                localStorage.removeItem("pendingBooking");

            });

        }

    }, []);

    return (

        <div class="payment-success-container">

            <h1 class="Sucess">Payment Successful</h1>

            <button class="mybook"onClick={() => navigate('/my-bookings')}>
                Go To My Bookings
            </button>

        </div>

    );

}

export default PaymentSuccess;