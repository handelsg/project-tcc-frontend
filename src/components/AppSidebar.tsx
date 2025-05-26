
import React from 'react';
import { ArrowLeft, ArrowRight, Home, Video, Upload, Calendar, Clock, Settings } from 'lucide-react';
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
  const isCollapsed = state === 'collapsed';

  const menuItems = [
    {
      title: "Início",
      icon: Home,
      isActive: true,
    },
    {
      title: "Nova reunião",
      icon: Video,
    },
    {
      title: "Upload de reunião",
      icon: Upload,
    },
    {
      title: "Agendar reunião",
      icon: Calendar,
    },
  ];

  const bottomMenuItems = [
    {
      title: "Histórico",
      icon: Clock,
    },
    {
      title: "Configurações",
      icon: Settings,
    },
  ];

  return (
    <Sidebar 
      className="border-none" 
      style={{ backgroundColor: '#403E8C' }}
      collapsible="icon"
    >
      <SidebarHeader className="p-4">
        <div className="flex items-center justify-between">
          {!isCollapsed && (
            <div className="text-white">
              <div className="text-lg font-bold">HS</div>
              <div className="text-sm opacity-90">Handel Santana</div>
            </div>
          )}
          <button 
            onClick={toggleSidebar}
            className="p-2 bg-white/20 rounded-lg hover:bg-white/30 transition-colors ml-auto"
          >
            {isCollapsed ? (
              <ArrowRight className="w-5 h-5 text-white" />
            ) : (
              <ArrowLeft className="w-5 h-5 text-white" />
            )}
          </button>
        </div>
        {!isCollapsed && <div className="border-t border-white/20 mt-4"></div>}
      </SidebarHeader>

      <SidebarContent className="px-2">
        <SidebarMenu className="space-y-1">
          {menuItems.map((item) => (
            <SidebarMenuItem key={item.title}>
              <SidebarMenuButton
                className={`w-full flex items-center gap-3 px-3 py-3 rounded-lg transition-all ${
                  item.isActive
                    ? 'bg-white text-[#403E8C] shadow-sm'
                    : 'text-white hover:bg-white/10'
                } ${isCollapsed ? 'justify-center' : ''}`}
                tooltip={isCollapsed ? item.title : undefined}
              >
                <item.icon className="w-5 h-5 flex-shrink-0" />
                {!isCollapsed && <span className="font-medium">{item.title}</span>}
              </SidebarMenuButton>
            </SidebarMenuItem>
          ))}
        </SidebarMenu>
      </SidebarContent>

      <SidebarFooter className="px-2 pb-4">
        <SidebarMenu className="space-y-1">
          {bottomMenuItems.map((item) => (
            <SidebarMenuItem key={item.title}>
              <SidebarMenuButton 
                className={`w-full flex items-center gap-3 px-3 py-3 rounded-lg text-white hover:bg-white/10 transition-all ${
                  isCollapsed ? 'justify-center' : ''
                }`}
                tooltip={isCollapsed ? item.title : undefined}
              >
                <item.icon className="w-5 h-5 flex-shrink-0" />
                {!isCollapsed && <span className="font-medium">{item.title}</span>}
              </SidebarMenuButton>
            </SidebarMenuItem>
          ))}
        </SidebarMenu>
      </SidebarFooter>
    </Sidebar>
  );
};

export default AppSidebar;
