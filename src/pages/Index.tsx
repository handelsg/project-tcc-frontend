
import React from 'react';
import { Video, Upload, Calendar, Clock, Settings } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { SidebarTrigger } from '@/components/ui/sidebar';
import FeatureCard from '../components/FeatureCard';

const Index = () => {
  const navigate = useNavigate();

  const features = [
    {
      icon: Video,
      title: "Nova reunião",
      onClick: () => navigate("/nova-reuniao")
    },
    {
      icon: Upload,
      title: "Upload de reunião",
      onClick: () => console.log("Upload de reunião clicked")
    },
    {
      icon: Calendar,
      title: "Agendar reunião",
      onClick: () => console.log("Agendar reunião clicked")
    },
    {
      icon: Clock,
      title: "Histórico",
      onClick: () => console.log("Histórico clicked")
    },
    {
      icon: Settings,
      title: "Configurações",
      onClick: () => console.log("Configurações clicked")
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header with sidebar trigger */}
      <div className="flex items-center gap-4 p-4 border-b bg-white">
        <SidebarTrigger />
        <h1 className="text-xl font-semibold text-gray-900">Dashboard</h1>
      </div>
      
      {/* Main content */}
      <div className="py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Header Section */}
          <div className="text-center mb-16">
            <h1 className="text-4xl font-bold text-indigo-600 mb-4">
              Seja bem vindo!
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Aqui você pode criar, gerenciar e fazer muito mais, com a ajuda das IA's Generativas.
            </p>
          </div>

          {/* Features Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
            {features.map((feature, index) => (
              <FeatureCard
                key={index}
                icon={feature.icon}
                title={feature.title}
                onClick={feature.onClick}
              />
            ))}
          </div>

          {/* Additional spacing for visual balance */}
          <div className="mt-20"></div>
        </div>
      </div>
    </div>
  );
};

export default Index;
