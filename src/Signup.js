import React, { useState, useEffect } from "react";
import { signupUser } from "./Actions";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";



export default function Signup() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
   const dispatch = useDispatch();
   const navigate = useNavigate();
   const error = useSelector((state) => state.auth.error);
   const isSignedUp = useSelector((state) => state.auth.isSignedUp);
   

  const handleregister=()=>{
     const userData = {
       username: username,
       password: password,
       email: email,
     };
     dispatch(signupUser(userData));
  }
  
 useEffect(() => {
   // Use useEffect to call navigate when isSignedUp changes
   if (isSignedUp) {
     navigate("/");
   }
 }, [isSignedUp, navigate]);
  return (
    <div>
      <section
        class="vh-100 bg-image"
        style={{
          backgroundImage: `url('https://mdbcdn.b-cdn.net/img/Photos/new-templates/search-box/img4.webp')`,
        }}
      >
        <div class="mask d-flex align-items-center h-80 gradient-custom-3">
          <div class="container h-80">
            <div class="row d-flex justify-content-center align-items-center h-60">
              <div class="col-12 col-md-9 col-lg-7 col-xl-6">
                <div class="card">
                  <div class="card-body p-5">
                    <h2 class="text-uppercase text-center mb-5">
                      Create an account
                    </h2>

                    <form autoComplete="off" >
                      <div class="form-outline mb-4">
                        <input
                          type="text"
                          value={username}
                          id="form3Example1cg"
                          class="form-control form-control-lg"
                          onChange={(e) => setUsername(e.target.value)}
                        />
                        <label class="form-label" for="form3Example1cg">
                          Username
                        </label>
                      </div>

                      <div class="form-outline mb-4">
                        <input
                          type="email"
                          value={email}
                          id="form3Example3cg"
                          onChange={(e) => setEmail(e.target.value)}
                          class="form-control form-control-lg"
                        />
                        <label class="form-label" for="form3Example3cg">
                          Your Email
                        </label>
                      </div>

                      <div class="form-outline mb-4">
                        <input
                          type="password"
                          id="form3Example4cg"
                          value={password}
                          onChange={(e) => setPassword(e.target.value)}
                          class="form-control form-control-lg"
                        />
                        <label class="form-label" for="form3Example4cg">
                          Password
                        </label>
                      </div>

                      {/* <div class="form-outline mb-4">
                        <input
                          type="password"
                          id="form3Example4cdg"
                          class="form-control form-control-lg"
                        />
                        <label class="form-label" for="form3Example4cdg">
                          Repeat your password
                        </label>
                      </div> */}

                      <div class="form-check d-flex justify-content-center mb-5">
                        <input
                          class="form-check-input me-2"
                          type="checkbox"
                          value=""
                          id="form2Example3cg"
                        />
                        <label class="form-check-label" for="form2Example3g">
                          I agree all statements in{" "}
                          <a href="#!" class="text-body">
                            <u>Terms of service</u>
                          </a>
                        </label>
                      </div>

                      <div class="d-flex justify-content-center  text-white">
                        <button
                          onClick={handleregister}
                          type="button"
                          class="btn btn-success btn-block btn-lg gradient-custom-4 text-body"
                        >
                          Register
                        </button>
                      </div>
                      {error && <p style={{ color: "red" }}>{error}</p>}

                      <p class="text-center text-muted mt-5 mb-0">
                        Have already an account?{" "}
                        <a href="#!" class="fw-bold text-body">
                          <u>Login here</u>
                        </a>
                      </p>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
