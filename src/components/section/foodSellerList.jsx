import { Link } from "react-router-dom";
import FoodSellListComponent from "../foodSellerListComponent/hello";
export default function foodSellerListSection() {

    return (

        <>

            <div className="height">
                <div className="breadcrumb-flex">

                    <nav aria-label="breadcrumb">
                    <ol className="breadcrumb  pt-2 rounded-3">
                        <li className="breadcrumb-item"><a href="#"  className="text-dark text-decoration-none">Application</a></li>
                        <li className="breadcrumb-item"><a href="#"  className="text-dark text-decoration-none">Food Seller</a></li>
                        <li className="breadcrumb-item active" aria-current="page"><Link to="/operators" className="text-decoration-none" style={{ color: "#F8B602" }}>Setting</Link></li>
                    </ol>
                    </nav>
                </div>

                <div className="py-2">
                    <FoodSellListComponent/>
                </div>
            </div>

        </>

    )

}