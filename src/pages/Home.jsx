
import React from 'react';
import { ChevronLeft, User, Mail, Lock, Eye, EyeOff } from 'lucide-react';
import MobileFrame from '../components/MobileFrame';
import { useNavigate } from 'react-router-dom';





// Home Page
const Home = () => {
  const navigate=useNavigate();
  return (
    <MobileFrame>
      <div className="flex-1 flex flex-col items-center justify-center p-8 bg-gradient-to-b from-purple-50 to-white">
        {/* Logo/Icon */}
        <div className="mb-8">
          <div className="h-16 w-16 bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-2xl flex items-center justify-center font-bold text-2xl shadow-lg">
            P
          </div>
        </div>
        
        {/* Welcome Text */}
        <div className="text-center mb-8">
          <h1 className="text-2xl font-bold text-gray-800 mb-2">Welcome to PopX</h1>
          <p className="text-gray-600 text-sm leading-relaxed px-4">
            Connect, share, and discover amazing content with our community
          </p>
        </div>
        
        {/* Action Buttons */}
        <div className="w-full space-y-3 px-4">
          <button
            onClick={() =>navigate('/create-account')}
            className="w-full py-3.5 bg-gradient-to-r from-purple-600 to-blue-600 text-white font-semibold rounded-xl shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 transition-all duration-200"
          >
            Create Account
          </button>
          <button
            onClick={() => navigate('/login')}
            className="w-full py-3.5 bg-white border-2 border-purple-200 text-purple-700 font-semibold rounded-xl hover:bg-purple-50 hover:border-purple-300 transition-all duration-200"
          >
            Already have an account? Login
          </button>
        </div>
      </div>
    </MobileFrame>
  );
};

export default Home;