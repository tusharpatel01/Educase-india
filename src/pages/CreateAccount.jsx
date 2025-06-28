
import React, { useState } from 'react';
import { ChevronLeft, User, Mail, Lock, Eye, EyeOff } from 'lucide-react';
import MobileFrame from '../components/MobileFrame';
import { useNavigate } from 'react-router-dom';
// Create Account Page
const CreateAccount = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    PhoneNumber: '',
    email: '',
    password: '',
    CompanyName: '',
    agency: ''
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
    if (!formData.fullName.trim()) newErrors.fullName = 'Full name is required';
 
    else if (!/^\d{10}$/.test(formData.PhoneNumber)) newErrors.PhoneNumber = 'Phone number must be 10 digits';
    
    if (!formData.email.trim()) newErrors.email = 'Email is required';
    else if (!/\S+@\S+\.\S+/.test(formData.email)) newErrors.email = 'Invalid email format';
    if (!formData.password) newErrors.password = 'Password is required';
    else if (formData.password.length < 6) newErrors.password = 'Password must be at least 6 characters';

    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };
  const navigate = useNavigate();

  const handleSubmit = () => {
    if (validateForm()) {
      console.log('Account Created:', formData);
      navigate('/profile');
    }
    else {
      console.log('Form validation failed:', errors);
    }
    
  };

  return (
    <MobileFrame>
      {/* Header */}
      <div className="flex items-center justify-between p-4 bg-white border-b border-gray-100">
        <button 
          onClick={() => navigate('/home')}
          className="p-2 hover:bg-gray-100 rounded-full transition-colors"
        >
          <ChevronLeft className="w-5 h-5 text-gray-600" />
        </button>
        <h1 className="text-lg font-semibold text-gray-800">Create Account</h1>
        <div className="w-9"></div>
      </div>

      {/* Content */}
      <div className="flex-1 p-6 overflow-y-auto">
        <div className="text-center mb-6">
          <p className="text-gray-600 text-sm">Let's get you started with your new account</p>
        </div>

        <div className="space-y-4">
          {/* Full Name Input */}
          <div>
            <div className="relative">
              <User className="absolute left-3 top-3.5 w-4 h-4 text-gray-400" />
              <input
                type="text"
                value={formData.fullName}
                onChange={(e) => handleInputChange('fullName', e.target.value)}
                placeholder="Full Name"
                className="w-full pl-10 pr-4 py-3.5 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
              />
            </div>
            {errors.fullName && <p className="text-red-500 text-xs mt-1 ml-1">{errors.fullName}</p>}
          </div>

          {/* Phone Number Input */}
          <div>
            <div className="relative">
              <User className="absolute left-3 top-3.5 w-4 h-4 text-gray-400" />
              <input
                type="text"
                value={formData.PhoneNumber}
                onChange={(e) => handleInputChange('PhoneNumber', e.target.value)}
                placeholder="Phone Number"
                className="w-full pl-10 pr-4 py-3.5 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
              />
            </div>
            {errors.PhoneNumber && <p className="text-red-500 text-xs mt-1 ml-1">{errors.PhoneNumber}</p>}
          </div>

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
          {/* company name */}
          <div>
            <div className="relative">
              <User className="absolute left-3 top-3.5 w-4 h-4 text-gray-400" />
              <input
                type="text"
                value={formData.CompanyName}
                onChange={(e) => handleInputChange('CompanyName', e.target.value)}
                placeholder="Company Name"
                className="w-full pl-10 pr-4 py-3.5 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
              />
            </div>
            {errors.CompanyName && <p className="text-red-500 text-xs mt-1 ml-1">{errors.CompanyName}</p>}
          </div>
          {/* agency */}


          {/* Submit Button */}
          <button
            onClick={handleSubmit}
            className="w-full py-3.5 bg-gradient-to-r from-purple-600 to-blue-600 text-white font-semibold rounded-xl shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 transition-all duration-200 mt-6"
          >
            Create Account
          </button>
        </div>

        {/* Login Link */}
        <div className="text-center mt-4">
          <button
            onClick={() => navigate('/login')}
            className="text-purple-600 text-sm font-medium hover:text-purple-700 transition-colors"
          >
            Already have an account? Login
          </button>
        </div>
      </div>
    </MobileFrame>
  );
};
export default CreateAccount;