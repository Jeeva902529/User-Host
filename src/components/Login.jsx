"use client";

import { useState } from "react";
import bgimg from "../assets/loginbg.jpg";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [tableNumber, setTableNumber] = useState(""); // State for table number
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const navigate = useNavigate();
  

  // Handle Login or Signup
  const handleLoginOrSignup = async (e) => {
    e.preventDefault();
    setError("");
  
    if (!name || !password || !tableNumber) {
      setError("Please enter your name, password, and table number");
      return;
    }
  
    setIsLoading(true);
  
    try {
     const response = await fetch("https://back-end-res-6emf.onrender.com/api/auth", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, password, tableNumber }),
      });
  
      let data;
      try {
        data = await response.json();
      } catch (jsonError) {
        throw new Error("Invalid JSON response from server.");
      }
  
      if (response.status === 201) {
        // ✅ Show success message if user is newly registered
        setError("✅ You have registered successfully. Enter details again to login.");
        return;
      }
  
      if (!response.ok) {
        throw new Error(data.message || "Login failed");
      }
  
      if (data.token) {
        localStorage.setItem("token", data.token);
        localStorage.setItem("tableNumber", tableNumber); // ✅ Store table number only after successful login
        console.log("✅ Token stored:", data.token);
        navigate(`/home?table=${tableNumber}`);
      }
      else {
        throw new Error("Login failed: No token received.");
      }
    } catch (error) {
      console.error("❌ Error:", error);
      setError(error.message || "Server error. Try again later.");
    } finally {
      setIsLoading(false);
    }
  };
  
  

  return (
    <div className="relative min-h-screen w-full overflow-hidden flex items-center justify-center">
      {/* Background Image with Overlay */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${bgimg})` }}
      >
        <div className="absolute inset-0 bg-black/60 backdrop-blur-[2px]"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 w-full max-w-sm px-4 animate-fade-in-up">
        <div className="rounded-2xl overflow-hidden backdrop-blur-xl bg-white/10 shadow-2xl transform hover:scale-[1.01] transition-transform duration-300">
          {/* Header */}
          <div className="p-6 text-center">
            <h1 className="text-3xl font-bold tracking-tight text-white mb-2">Welcome to Crave Corner</h1>
            <p className="text-gray-300 text-sm">Sign in to continue to your delicious journey</p>
          </div>

          {/* Form */}
          <div className="bg-white/20 p-6 backdrop-blur-sm">
            {/* Error Message */}
            {error && (
              <div className="mb-4 p-3 bg-red-500/80 text-white rounded-lg text-sm animate-shake">{error}</div>
            )}

            <form onSubmit={handleLoginOrSignup} className="space-y-5">
              {/* Name Input */}
              <div className="space-y-2">
                <label className="text-sm font-medium text-white">Name</label>
                <input
                  type="text"
                  placeholder="Enter Your Name"
                  className="w-full h-10 px-4 bg-white/20 text-white placeholder-gray-300 rounded-lg outline-none focus:ring-2 focus:ring-[#ff3131] transition-all duration-200"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                />
              </div>

              {/* Password Input */}
              <div className="space-y-2">
                <label className="text-sm font-medium text-white">Password</label>
                <input
                  type="password"
                  placeholder="Enter Your Password"
                  className="w-full h-10 px-4 bg-white/20 text-white placeholder-gray-300 rounded-lg outline-none focus:ring-2 focus:ring-[#ff3131] transition-all duration-200"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
              </div>

              {/* Table Number Input */}
              <div className="space-y-2">
                <label className="text-sm font-medium text-white">Table Number</label>
                <input
                  type="number"
                  placeholder="Enter Table Number"
                  className="w-full h-10 px-4 bg-white/20 text-white placeholder-gray-300 rounded-lg outline-none focus:ring-2 focus:ring-[#ff3131] transition-all duration-200"
                  value={tableNumber}
                  onChange={(e) => setTableNumber(e.target.value)} // Update state on input change
                  required
                />
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className={`w-full h-10 bg-gradient-to-r from-[#ff3131] to-[#ff5733] text-white font-semibold rounded-lg transition-all duration-300 ${
                  isLoading
                    ? "opacity-70 cursor-not-allowed"
                    : "hover:from-[#e62c2c] hover:to-[#e64e2e] active:scale-[0.98] hover:shadow-lg"
                }`}
                disabled={isLoading}
              >
                {isLoading ? (
                  <span className="flex items-center justify-center">
                    <svg
                      className="animate-spin -ml-1 mr-2 h-4 w-4 text-white"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                    >
                      <circle
                        className="opacity-25"
                        cx="12"
                        cy="12"
                        r="10"
                        stroke="currentColor"
                        strokeWidth="4"
                      ></circle>
                      <path
                        className="opacity-75"
                        fill="currentColor"
                        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                      ></path>
                    </svg>
                    Processing...
                  </span>
                ) : (
                  "Sign Up / Login"
                )}
              </button>
            </form>

            {/* Skip Authentication */}
            <div className="mt-5 text-center">
              <p className="text-white text-sm mb-3">Or continue without an account</p>
              <button
                type="button"
                className="w-full h-10 bg-white/20 text-white font-medium rounded-lg hover:bg-white/30 transition-all duration-300 hover:shadow-md"
                onClick={() => navigate("/home")}
              >
                SKIP FOR NOW
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
