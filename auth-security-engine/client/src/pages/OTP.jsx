import { useState } from "react";
import API from "../services/api";
import Button from "../components/Button";

const OTP = () => {
  const [otp, setOtp] = useState("");

  const verifyOTP = async () => {
    try {
      await API.post("/auth/verify-otp", { otp });
      alert("OTP Verified");
    } catch {
      alert("Invalid OTP");
    }
  };

  return (
    <div className="min-h-screen flex justify-center items-center px-4">
      <div className="w-full max-w-sm space-y-4">
        <h1 className="text-xl font-bold text-center">Enter OTP</h1>

        <input
          value={otp}
          onChange={(e) => setOtp(e.target.value)}
          className="w-full p-3 border rounded-xl text-center text-lg"
          placeholder="Enter OTP"
        />

        <Button text="Verify OTP" onClick={verifyOTP} />
      </div>
    </div>
  );
};

export default OTP;