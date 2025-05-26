
import React from 'react';
import { LucideIcon } from 'lucide-react';

interface FeatureCardProps {
  icon: LucideIcon;
  title: string;
  onClick?: () => void;
}

const FeatureCard: React.FC<FeatureCardProps> = ({ icon: Icon, title, onClick }) => {
  return (
    <div 
      className="bg-white rounded-xl p-8 shadow-sm border border-gray-100 hover:shadow-md transition-all duration-200 cursor-pointer group"
      onClick={onClick}
    >
      <div className="flex flex-col items-center text-center space-y-4">
        <div className="w-16 h-16 bg-indigo-100 rounded-2xl flex items-center justify-center group-hover:bg-indigo-200 transition-colors">
          <Icon className="w-8 h-8 text-indigo-600" />
        </div>
        <h3 className="text-lg font-medium text-gray-900">{title}</h3>
      </div>
    </div>
  );
};

export default FeatureCard;
