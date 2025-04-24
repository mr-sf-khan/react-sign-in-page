import { useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import User from './component/User'; 
const App = () => {
  const [fullNAME, setfullName] = useState("");
  const [Email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [cPassword, setCpassword] = useState("");
  const [error, setError] = useState("");
  const [users, setUsers] = useState([]);

  const submitHandler = (e) => {
    e.preventDefault();

    if (password.length < 8) {
      setError("password must be 8 character");
      return;
    }

    if (password != cPassword) {
      setError("password and conform password must be same");
      return;
    }

    if (!/[!@#$%^&*()_<>,.]/.test(password)) {
      setError("password must contain any special character");
      return;
    }

    if (!/[A-Z]/.test(password)) {
      setError("password must contain any upper case letter");
      return;
    }

    setUsers([...users,{fullNAME,Email,password}]);

    setError("");
    setfullName("");
    setEmail("");
    setPassword("");
    setCpassword("");
    console.log(fullNAME, Email, password, cPassword);

    toast.success("submitted successfully ✅", {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: false,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
    });
  };

  return (
    <>
      <div className="h-screen border-amber-50 flex  justify-center items-center">
        {""}
        <div className=" flex  justify-center items-center ">
          <form
            id="sign"
            onSubmit={(e) => {
              submitHandler(e);
            }}
            className="bg-white h-140  w-100 rounded-2xl border-black  ">
            <h1 className="text-center font-bold text-3xl  p-5">
              {" "}
              Create an Account{" "}
            </h1>

            <input
              className="w-80 border-black-50 gap-2 p-4 m-2  ml-10 "
              placeholder="Enter Your Name "
              value={fullNAME}
              required
              onChange={(e) => {
                setfullName(e.target.value);
              }}
            />

            <input
              className="w-80 border-black-50 gap-2 p-4 m-2 ml-10"
              placeholder="Enter Your Email"
              type="text"
              required
              value={Email}
              onChange={(e) => {
                setEmail(e.target.value);
              }}
            />

            <input
              className="w-80 border-black-50 gap-2 p-4 m-2  ml-10 focus-ring "
              placeholder="Enter Your password"
              type="password"
              required
              value={password}
              onChange={(e) => {
                setPassword(e.target.value);
              }}
            />

            <input
              className="w-80 border-black-50 gap-2 p-4 m-2 ml-10 focus:ring-2 ring-emerald-800 "
              placeholder="Confirm Your password"
              type="password"
              required
              value={cPassword}
              onChange={(e) => {
                setCpassword(e.target.value);
              }}
            />

            {error && (
              <p className="text-red-500 font-medium text-ms text-center px-5 pt-2 ">
                {error}
              </p>
            )}

            <button
              className="h-15 w-80 bg-emerald-800 text-white items-center px-4 py-2 ml-10 mt-8 rounded-2xl active:scale-97 text-2xl"
              onSubmit={alert}>
              {" "}
              Submit
            </button>
          </form>

          <ToastContainer></ToastContainer>
        </div>
      </div>
      {users.map(function(elem,idx) {
        return  <User elem = {elem} />
      })}
    </>
  );
}

export default App;
