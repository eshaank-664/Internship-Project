import { useEffect, useState } from "react";
import "./css/MyBooking.css";
function MyBookings() {

    const [bookings, setBookings] = useState([]);

    const email = localStorage.getItem("userEmail");

    useEffect(() => {

        fetch(`http://localhost:5000/api/orders/user/${email}`)
            .then(res => res.json())
            .then(data => setBookings(data));

    }, []);

    return (

        <div>

            <nav class="Booking-title">My Bookings</nav>

            {bookings.length === 0 && (
                <p class="no-bookings">No bookings found</p>
            )}

            {bookings.map((item) => (

                <div key={item._id}>

                    <img
                        src={`http://localhost:5000/uploads/${item.hotelImage}`}
                        width="250"
                        alt={item.hotelName}
                    />

                    <h3>{item.hotelName}</h3>

                    <p>
                        Booked On:
                        {new Date(item.createdAt).toLocaleDateString()}
                    </p>

                </div>

            ))}

        </div>

    );
}

export default MyBookings;