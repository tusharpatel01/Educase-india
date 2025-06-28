
import React, { useState } from 'react';
import { ChevronLeft, User, Mail, Lock, Eye, EyeOff } from 'lucide-react';
import MobileFrame from '../components/MobileFrame';
import { useNavigate } from 'react-router-dom';
// Login Page
const Login = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });
  const [showPassword, setShowPassword] = useState(false);
  const [errors, setErrors] = useState({});

  const handleInputChange = (field, value) => {
    setFormData(prev => ({ ...prev, [field]: value }));
    if (errors[field]) {
      setErrors(prev => ({ ...prev, [field]: '' }));
    }
  };

  const validateForm = () => {
    const newErrors = {};
    if (!formData.email.trim()) newErrors.email = 'Email is required';
    else if (!/\S+@\S+\.\S+/.test(formData.email)) newErrors.email = 'Invalid email format';
    if (!formData.password) newErrors.password = 'Password is required';
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = () => {
    if (validateForm()) {
      console.log('Login Success:', formData);
      navigate('/profile');
    }
  };
  const navigate = useNavigate();

  return (
    <MobileFrame>
      {/* Header */}
      <div className="flex items-center justify-between p-4 bg-white border-b border-gray-100">
        <button 
          onClick={() => navigate('/')}
          className="p-2 hover:bg-gray-100 rounded-full transition-colors"
        >
          <ChevronLeft className="w-5 h-5 text-gray-600" />
        </button>
        <h1 className="text-lg font-semibold text-gray-800">Login</h1>
        <div className="w-9"></div>
      </div>

      {/* Content */}
      <div className="flex-1 p-6 overflow-y-auto">
        <div className="text-center mb-6">
          <p className="text-gray-600 text-sm">Welcome back! Please enter your credentials</p>
        </div>

        <div className="space-y-4">
          {/* Email Input */}
          <div>
            <div className="relative">
              <Mail className="absolute left-3 top-3.5 w-4 h-4 text-gray-400" />
              <input
                type="email"
                value={formData.email}
                onChange={(e) => handleInputChange('email', e.target.value)}
                placeholder="Email Address"
                className="w-full pl-10 pr-4 py-3.5 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
              />
            </div>
            {errors.email && <p className="text-red-500 text-xs mt-1 ml-1">{errors.email}</p>}
          </div>

          {/* Password Input */}
          <div>
            <div className="relative">
              <Lock className="absolute left-3 top-3.5 w-4 h-4 text-gray-400" />
              <input
                type={showPassword ? "text" : "password"}
                value={formData.password}
                onChange={(e) => handleInputChange('password', e.target.value)}
                placeholder="Password"
                className="w-full pl-10 pr-12 py-3.5 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-3.5 text-gray-400 hover:text-gray-600"
              >
                {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
              </button>
            </div>
            {errors.password && <p className="text-red-500 text-xs mt-1 ml-1">{errors.password}</p>}
          </div>

          {/* Forgot Password */}
          <div className="text-right">
            <button
              type="button"
              className="text-purple-600 text-sm hover:text-purple-700 transition-colors"
            >
              Forgot Password?
            </button>
          </div>

          {/* Submit Button */}
          <button
            onClick={handleSubmit}
            className="w-full py-3.5 bg-gradient-to-r from-purple-600 to-blue-600 text-white font-semibold rounded-xl shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 transition-all duration-200 mt-6"
          >
            Login
          </button>
        </div>

        {/* Sign Up Link */}
        <div className="text-center mt-4">
          <button
            onClick={() => navigate('/create-account')}
            className="text-purple-600 text-sm font-medium hover:text-purple-700 transition-colors"
          >
            Don't have an account? Sign up
          </button>
        </div>
      </div>
    </MobileFrame>
  );
};
export default Login;