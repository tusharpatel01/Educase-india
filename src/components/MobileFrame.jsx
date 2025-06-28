import React from 'react';
import { ChevronLeft, User, Mail, Lock, Eye, EyeOff } from 'lucide-react';

// Mobile Frame Component
const MobileFrame = ({ children }) => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-purple-100 to-blue-100 p-4">
      <div className="w-[375px] h-[600px] bg-white shadow-2xl rounded-2xl overflow-hidden flex flex-col">
        {children}
      </div>
    </div>
  );
};
export default MobileFrame;