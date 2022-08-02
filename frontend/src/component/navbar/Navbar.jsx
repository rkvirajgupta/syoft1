import { Link } from "react-router-dom";

import './navbar.css'

export const Navbar = () => {
  

  return (
    <div id='diver'>             
        <Link to={`/product`} > product</Link>

                 <Link to={`/login`}> login</Link>
                 <Link to={`/signup`}> signup</Link>



    </div>
  );
};
