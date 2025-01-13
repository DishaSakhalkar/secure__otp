import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [otp, setOtp] = useState("");
  const [generatedOtp, setGeneratedOtp] = useState(null);
  const [timer, setTimer] = useState(30);
  const navigate = useNavigate();

  useEffect(() => {
    const newOtp = Math.floor(100000 + Math.random() * 900000).toString();
    setGeneratedOtp(newOtp);
    alert(`Your OTP: ${newOtp}`);
    const countdown = setInterval(() => {
      setTimer((prev) => (prev > 0 ? prev - 1 : 0));
    }, 1000);

    return () => clearInterval(countdown);
  }, []);

  const handleSubmit = () => {
    if (otp === generatedOtp && timer > 0) {
      navigate("/dashboard");
    } else if (timer === 0) {
      navigate("/resend-otp");
    } else {
      alert("Incorrect OTP. Please try again.");
    }
  };

  return (
    <div className="login-container">
      <h1>Login</h1>
      <p>Enter the OTP sent to your mobile</p>
      <input
        type="text"
        value={otp}
        onChange={(e) => setOtp(e.target.value)}
        placeholder="Enter OTP"
      />
      <p>Time remaining: {timer} seconds</p>
      <button onClick={handleSubmit}>Submit</button>
    </div>
  );
};

export default Login;
