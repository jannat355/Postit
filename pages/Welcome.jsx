import React from "react";
import { Link } from "react-router-dom";

const Welcome = () => {
  return (
    <div>
      <div className="container text-center pt-5">
        <div>
          <h3>Welcome Back</h3>
        </div>

        <div className=" container w-50 pt-5 text-center ">
          <p>Email Address</p>
          <br />
          <hr />
          <br />
          <p> Password</p>
          <br />
          <hr />
          <br />
          <div className="pt-5">
            <Link to="/About">
              
              <button className="btn btn-primary w-50 ">Continue</button>
            </Link>

            <h4 className="pt-5">
              No account?{" "}
              <Link to="/Join" className="text-decoration-none">
                <span style={{ color: "blue" }}>Sign Up</span>
              </Link>
            </h4>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Welcome;
