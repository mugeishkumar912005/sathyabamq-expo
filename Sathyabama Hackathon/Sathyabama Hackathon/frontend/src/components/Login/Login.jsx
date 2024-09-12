import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom"; 
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./Login.css";
import loginimage1 from "../../assets/loginimage1.jpeg";

const Login = ({ setShowLogin }) => {
  const [currstate, setCurrState] = useState("Login");
  const [doc, setDoc] = useState(false);
  const [text, setText] = useState("");
  const [data, setData] = useState({
    name: "",
    age: "",
    Lic_No: "",
    Hospital_Name: "",
    Specialized: "",
    gender: "",
    bloodgroup: "",
    height: "",
    weight: "",
    email: "",
    password: "",
    Confirm_password: "",
    Image: null,
  });

  const navigate = useNavigate(); // Initialize navigate

  const onChangeHandler = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setData((data) => ({ ...data, [name]: value }));
  };

  const onLogin = async (event) => {
    event.preventDefault();
    let newUrl = "http://localhost:5000/api/user";
    if (currstate === "Login") {
      newUrl += "/login";
    } else {
      newUrl += "/register";
    }

    try {
      const response = await axios.post(newUrl, data);

      console.log("Response:", response);

      if (response.data.success) {
        toast.success(`${currstate} Successful!`, {
          position: "top-right",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });

        if (currstate === "Login") {
          localStorage.setItem("token", response.data.token);
          navigate("/userpage"); // Navigate to /userpage after successful login
        }
      } else {
        toast.error(response.data.message, {
          position: "top-right",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
      }
    } catch (error) {
      console.error("Error during login:", error);
      toast.error("Something went wrong. Please try again!", {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    }
  };

  useEffect(() => {
    if (doc) {
      setText("User");
    } else {
      setText("Doctor");
    }
  }, [doc]);

  return (
    <>
      <ToastContainer />
      <div className="login-main-container">
        <div className="user-sideimage">
          <img src={loginimage1} alt="Login" />
        </div>
        <div className="login-popup">
          <form onSubmit={onLogin} className="login-popup-container">
            <div className="login-popup-title">
              <div className="title-contain">
                <h2>{currstate}</h2>
                <p className="login-page-title">to medX.co</p>
              </div>
            </div>
            <div className="login-popup-inputs">
              {currstate === "Login" ? (
                <>
                  <input
                    name="email"
                    onChange={onChangeHandler}
                    value={data.email}
                    type="email"
                    placeholder="Your email"
                    required
                  />
                  <input
                    name="password"
                    onChange={onChangeHandler}
                    value={data.password}
                    type="password"
                    placeholder="Password"
                    required
                  />
                </>
              ) : (
                <>
                  {doc ? (
                    <div className="signup-doc">
                      <input
                        name="name"
                        onChange={onChangeHandler}
                        value={data.name}
                        type="text"
                        placeholder="Your Name"
                      />
                      <input
                        name="age"
                        onChange={onChangeHandler}
                        value={data.age}
                        type="number"
                        placeholder="Your age"
                        required
                      />
                      <input
                        name="Lic_No"
                        onChange={onChangeHandler}
                        value={data.Lic_No}
                        type="text"
                        placeholder="License number"
                        required
                      />
                      <input
                        name="Hospital_Name"
                        onChange={onChangeHandler}
                        value={data.Hospital_Name}
                        type="text"
                        placeholder="Hospital Name"
                        required
                      />
                      <input
                        name="Specialized"
                        onChange={onChangeHandler}
                        value={data.Specialized}
                        type="text"
                        placeholder="Specialization"
                        required
                      />
                      <input
                        name="email"
                        onChange={onChangeHandler}
                        value={data.email}
                        type="email"
                        placeholder="Your email"
                        required
                      />
                      <input
                        name="password"
                        onChange={onChangeHandler}
                        value={data.password}
                        type="password"
                        placeholder="Password"
                        required
                      />
                      <input
                        name="Confirm_password"
                        onChange={onChangeHandler}
                        value={data.Confirm_password}
                        type="password"
                        placeholder="Confirm Password"
                        required
                      />
                      <div className="file-input-container">
                        <label htmlFor="file-upload" className="custom-file-upload">
                          Attach Certificate
                        </label>
                        <input
                          id="file-upload"
                          type="file"
                          name="Image"
                          onChange={onChangeHandler}
                          style={{ display: "none" }}
                        />
                        <span>{data.Image ? data.Image.name : "No file chosen"}</span>
                      </div>
                    </div>
                  ) : (
                    <div className="signup">
                      <input
                        name="name"
                        onChange={onChangeHandler}
                        value={data.name}
                        type="text"
                        placeholder="Your Name"
                      />
                      <input
                        name="age"
                        onChange={onChangeHandler}
                        value={data.age}
                        type="number"
                        placeholder="Your age"
                        required
                      />
                      <input
                        name="gender"
                        onChange={onChangeHandler}
                        value={data.gender}
                        type="text"
                        placeholder="Gender"
                        required
                      />
                      <input
                        name="bloodgroup"
                        onChange={onChangeHandler}
                        value={data.bloodgroup}
                        type="text"
                        placeholder="Blood Group"
                        required
                      />
                      <input
                        name="height"
                        onChange={onChangeHandler}
                        value={data.height}
                        type="number"
                        placeholder="Height in cms"
                        required
                      />
                      <input
                        name="weight"
                        onChange={onChangeHandler}
                        value={data.weight}
                        type="number"
                        placeholder="Weight"
                        required
                      />
                      <input
                        name="email"
                        onChange={onChangeHandler}
                        value={data.email}
                        type="email"
                        placeholder="Your email"
                        required
                      />
                      <input
                        name="password"
                        onChange={onChangeHandler}
                        value={data.password}
                        type="password"
                        placeholder="Password"
                        required
                      />
                    </div>
                  )}
                </>
              )}
            </div>
            <div className="signup-log-div">
              <button type="submit">
                {currstate === "Sign-Up" ? "Create account" : "Login"}
              </button>
            </div>
            <div className="login-popup-condition">
              <input type="checkbox" required />
              <p>
                By continuing, I agree to the terms of use and privacy policy.
              </p>
            </div>
            {currstate === "Login" ? (
              <p>
                Create a new account?
                <span onClick={() => setCurrState("Sign-Up")}>Click here</span>
              </p>
            ) : (
              <>
                <a
                  className="doc-signup-button"
                  onClick={() => setDoc((prev) => !prev)}
                  style={{ marginTop: "-15px" }}
                >
                  Sign in as a {text}
                </a>
                <p style={{ marginTop: "-10px" }}>
                  Already have an account?
                  <span onClick={() => setCurrState("Login")}>Login here</span>
                </p>
              </>
            )}
          </form>
        </div>
      </div>
    </>
  );
};

export default Login;
