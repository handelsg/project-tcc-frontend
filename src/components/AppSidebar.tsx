
import React from 'react';
import { ArrowLeft, ArrowRight, Home, Video, Upload, Calendar, Clock, Settings } from 'lucide-react';
import { useNavigate, useLocation } from 'react-router-dom';
import {
  Sidebar,
  SidebarContent,
  SidebarHeader,
  SidebarFooter,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
  useSidebar,
} from '@/components/ui/sidebar';

const AppSidebar = () => {
  const { state, toggleSidebar } = useSidebar();
  const navigate = useNavigate();
  const location = useLocation();
  const isCollapsed = state === 'collapsed';

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

  return (
    <div 
      className="h-full bg-gradient-to-br from-emerald-800 via-teal-800 to-green-900 m-2 rounded-2xl shadow-2xl border border-emerald-700/30"
    >
      <Sidebar 
        className="border-none !bg-transparent"
        collapsible="icon"
      >
        <SidebarHeader className="p-6">
          <div className="flex items-center justify-between">
            {!isCollapsed && (
              <div className="text-white">
                <div className="text-xl font-bold bg-gradient-to-r from-emerald-300 to-teal-300 bg-clip-text text-transparent">HS</div>
                <div className="text-sm opacity-90 text-emerald-100">Handel Santana</div>
              </div>
            )}
            <button 
              onClick={toggleSidebar}
              className="p-2.5 bg-emerald-600/30 rounded-xl hover:bg-emerald-600/50 transition-all ml-auto backdrop-blur-sm border border-emerald-500/20 shadow-lg"
            >
              {isCollapsed ? (
                <ArrowRight className="w-5 h-5 text-emerald-100" />
              ) : (
                <ArrowLeft className="w-5 h-5 text-emerald-100" />
              )}
            </button>
          </div>
          {!isCollapsed && <div className="border-t border-emerald-400/30 mt-6 shadow-sm"></div>}
        </SidebarHeader>

        <SidebarContent className="px-3">
          <SidebarMenu className="space-y-2">
            {menuItems.map((item) => (
              <SidebarMenuItem key={item.title}>
                <SidebarMenuButton
                  className={`w-full flex items-center gap-3 px-4 py-3.5 rounded-xl transition-all cursor-pointer shadow-md ${
                    location.pathname === item.path
                      ? 'bg-emerald-500/30 text-emerald-50 shadow-lg border border-emerald-400/40 backdrop-blur-sm'
                      : 'text-emerald-100 hover:bg-emerald-600/20 hover:backdrop-blur-sm hover:shadow-lg hover:border hover:border-emerald-500/20'
                  } ${isCollapsed ? 'justify-center' : ''}`}
                  tooltip={isCollapsed ? item.title : undefined}
                  onClick={() => handleMenuClick(item.path)}
                >
                  <item.icon className="w-5 h-5 flex-shrink-0" />
                  {!isCollapsed && <span className="font-medium">{item.title}</span>}
                </SidebarMenuButton>
              </SidebarMenuItem>
            ))}
          </SidebarMenu>
        </SidebarContent>

        <SidebarFooter className="px-3 pb-6">
          <SidebarMenu className="space-y-2">
            {bottomMenuItems.map((item) => (
              <SidebarMenuItem key={item.title}>
                <SidebarMenuButton 
                  className={`w-full flex items-center gap-3 px-4 py-3.5 rounded-xl transition-all cursor-pointer shadow-md ${
                    location.pathname === item.path
                      ? 'bg-emerald-500/30 text-emerald-50 shadow-lg border border-emerald-400/40 backdrop-blur-sm'
                      : 'text-emerald-100 hover:bg-emerald-600/20 hover:backdrop-blur-sm hover:shadow-lg hover:border hover:border-emerald-500/20'
                  } ${isCollapsed ? 'justify-center' : ''}`}
                  tooltip={isCollapsed ? item.title : undefined}
                  onClick={() => handleMenuClick(item.path)}
                >
                  <item.icon className="w-5 h-5 flex-shrink-0" />
                  {!isCollapsed && <span className="font-medium">{item.title}</span>}
                </SidebarMenuButton>
              </SidebarMenuItem>
            ))}
          </SidebarMenu>
        </SidebarFooter>
      </Sidebar>
    </div>
  );
};

export default AppSidebar;
