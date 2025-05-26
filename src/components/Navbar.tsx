
import React, { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { 
  Home, 
  Video, 
  Upload, 
  Calendar, 
  Clock, 
  Settings,
  ChevronLeft,
  ChevronRight
} from 'lucide-react';

const Navbar = () => {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const menuItems = [
    {
      title: "Início",
      icon: Home,
      path: "/",
    },
    {
      title: "Nova reunião",
      icon: Video,
      path: "/nova-reuniao",
    },
    {
      title: "Upload de reunião",
      icon: Upload,
      path: "/upload-reuniao",
    },
    {
      title: "Agendar reunião",
      icon: Calendar,
      path: "/agendar-reuniao",
    },
  ];

  const bottomMenuItems = [
    {
      title: "Histórico",
      icon: Clock,
      path: "/historico",
    },
    {
      title: "Configurações",
      icon: Settings,
      path: "/configuracoes",
    },
  ];

  const handleMenuClick = (path: string) => {
    navigate(path);
  };

  const toggleNavbar = () => {
    setIsCollapsed(!isCollapsed);
  };

  return (
    <div 
      className={`h-screen bg-gradient-to-b from-purple-700 via-purple-800 to-purple-900 text-white transition-all duration-300 flex flex-col ${
        isCollapsed ? 'w-16' : 'w-64'
      }`}
    >
      {/* Header */}
      <div className="p-4 border-b border-purple-600/30">
        <div className="flex items-center justify-between">
          {!isCollapsed && (
            <div>
              <div className="text-lg font-bold">HS</div>
              <div className="text-sm text-purple-200">Handel Santana</div>
            </div>
          )}
          <button 
            onClick={toggleNavbar}
            className="p-2 bg-purple-600/50 rounded-lg hover:bg-purple-600/70 transition-colors"
          >
            {isCollapsed ? (
              <ChevronRight className="w-4 h-4" />
            ) : (
              <ChevronLeft className="w-4 h-4" />
            )}
          </button>
        </div>
      </div>

      {/* Menu Items */}
      <div className="flex-1 py-4">
        <nav className="space-y-2 px-3">
          {menuItems.map((item) => (
            <button
              key={item.title}
              onClick={() => handleMenuClick(item.path)}
              className={`w-full flex items-center gap-3 px-3 py-3 rounded-lg transition-all cursor-pointer ${
                location.pathname === item.path
                  ? 'bg-purple-600/40 text-white'
                  : 'text-purple-200 hover:bg-purple-600/20 hover:text-white'
              } ${isCollapsed ? 'justify-center' : ''}`}
              title={isCollapsed ? item.title : undefined}
            >
              <item.icon className="w-5 h-5 flex-shrink-0" />
              {!isCollapsed && <span className="font-medium">{item.title}</span>}
            </button>
          ))}
        </nav>
      </div>

      {/* Bottom Menu Items */}
      <div className="py-4 border-t border-purple-600/30">
        <nav className="space-y-2 px-3">
          {bottomMenuItems.map((item) => (
            <button
              key={item.title}
              onClick={() => handleMenuClick(item.path)}
              className={`w-full flex items-center gap-3 px-3 py-3 rounded-lg transition-all cursor-pointer ${
                location.pathname === item.path
                  ? 'bg-purple-600/40 text-white'
                  : 'text-purple-200 hover:bg-purple-600/20 hover:text-white'
              } ${isCollapsed ? 'justify-center' : ''}`}
              title={isCollapsed ? item.title : undefined}
            >
              <item.icon className="w-5 h-5 flex-shrink-0" />
              {!isCollapsed && <span className="font-medium">{item.title}</span>}
            </button>
          ))}
        </nav>
      </div>
    </div>
  );
};

export default Navbar;
