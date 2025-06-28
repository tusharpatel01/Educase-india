
import { ChevronLeft, User, Mail, Lock, Eye, EyeOff } from 'lucide-react';
import MobileFrame from '../components/MobileFrame';
import { useNavigate } from 'react-router-dom';
const Profile = () => {
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
        <h1 className="text-lg font-semibold text-gray-800">Profile</h1>
        <div className="w-9"></div>
      </div>

      {/* Content */}
      <div className="flex-1 p-6 overflow-y-auto">
        <div className="flex flex-col items-center">
          {/* Profile Picture */}
          <div className="h-24 w-24 bg-gradient-to-r from-purple-600 to-blue-600 rounded-full flex items-center justify-center text-white font-bold text-2xl mb-4 shadow-lg">
            JD
          </div>
          
          {/* User Info */}
          <h2 className="text-xl font-semibold text-gray-800 mb-1">John Doe</h2>
          <p className="text-gray-600 text-sm mb-6">john.doe@example.com</p>
          
          {/* Stats */}
          <div className="flex space-x-6 mb-6">
            <div className="text-center">
              <div className="text-xl font-bold text-purple-600">12</div>
              <div className="text-xs text-gray-500">Posts</div>
            </div>
            <div className="text-center">
              <div className="text-xl font-bold text-purple-600">156</div>
              <div className="text-xs text-gray-500">Followers</div>
            </div>
            <div className="text-center">
              <div className="text-xl font-bold text-purple-600">89</div>
              <div className="text-xs text-gray-500">Following</div>
            </div>
          </div>
          
          {/* Action Buttons */}
          <div className="w-full space-y-3">
            <button className="w-full py-3 bg-gradient-to-r from-purple-600 to-blue-600 text-white font-semibold rounded-xl shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 transition-all duration-200">
              Edit Profile
            </button>
            <button className="w-full py-3 bg-white border-2 border-gray-200 text-gray-700 font-semibold rounded-xl hover:bg-gray-50 hover:border-gray-300 transition-all duration-200">
              Settings
            </button>
            <button
              onClick={() => navigate('/')}
              className="w-full py-3 bg-white border-2 border-purple-200 text-purple-700 font-semibold rounded-xl hover:bg-purple-50 hover:border-purple-300 transition-all duration-200"
            >
              Go to Home
            </button>
          </div>
        </div>
      </div>
    </MobileFrame>
  );
};
export default Profile;