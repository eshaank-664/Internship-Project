import { useEffect, useState } from 'react';

import {
    BarChart,
    Bar,
    XAxis,
    YAxis,
    Tooltip,
    CartesianGrid
} from 'recharts';

function AdminAnalytics() {

    const [stats, setStats] = useState(null);

    useEffect(() => {

        fetch('http://localhost:5000/api/admin/stats')
            .then(res => res.json())
            .then(data => setStats(data));

    }, []);

    if (!stats) return <h2>Loading...</h2>;

    const chartData = [
        {
            name: 'Bookings',
            total: stats.totalBookings
        },
        {
            name: 'Hotels',
            total: stats.totalHotels
        },
        {
            name: 'Users',
            total: stats.totalUsers
        }
    ];

    return (

        <div style={{ padding: '30px' }}>

            <h1>Admin Analytics</h1>

            <div style={{ display: 'flex', gap: '20px' }}>

                <div>
                    <h2>Total Bookings</h2>
                    <h1>{stats.totalBookings}</h1>
                </div>

                <div>
                    <h2>Total Hotels</h2>
                    <h1>{stats.totalHotels}</h1>
                </div>

                <div>
                    <h2>Total Users</h2>
                    <h1>{stats.totalUsers}</h1>
                </div>

            </div>
            <BarChart width={600} height={300} data={chartData}>

                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Bar dataKey="total" fill="#8884d8" />
            </BarChart>

            <h2>Recent Bookings</h2>
            {stats.bookings.map((item) => (

                <div
                    key={item._id}
                    style={{
                        border: '1px solid gray',
                        marginBottom: '10px',
                        padding: '10px'
                    }}
                >

                    <h3>{item.hotelName}</h3>

                    <p>{item.userMail}</p>

                    <p>
                        {new Date(item.createdAt).toLocaleDateString()}
                    </p>

                </div>
            ))}

        </div>

    );
}

export default AdminAnalytics;