import '../src/css/adminpanel.css'
import { useNavigate } from "react-router-dom"
function AdminPanel() {
   const navigate = useNavigate();
   return (
      <div>
         <div className="admin-container">
            <h2 class="admin-heading"> Admin Panel</h2>
            <button className="admin-panel-botn" onClick={() => navigate('/addProduct')}>Add product</button>
            <button className="admin-panel-botn" onClick={() => navigate('/viewproduct')}> View Product</button>
            <button
               className="admin-panel-botn"
               onClick={() => navigate('/analytics')}
            >
               Analytics
            </button>
         </div>

      </div>


   );


}

export default AdminPanel;