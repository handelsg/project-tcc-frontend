
import React from 'react';
import { ArrowLeft, Home, Video, Upload, Calendar, Clock, Settings } from 'lucide-react';
import {
  Sidebar,
  SidebarContent,
  SidebarHeader,
  SidebarFooter,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
} from '@/components/ui/sidebar';

const AppSidebar = () => {
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
    <Sidebar className="bg-gradient-to-b from-indigo-600 to-purple-700 border-none">
      <SidebarHeader className="p-6">
        <div className="flex items-center justify-between mb-6">
          <div className="text-white">
            <div className="text-lg font-bold">HS</div>
            <div className="text-sm opacity-90">Handel Santana</div>
          </div>
          <button className="p-2 bg-white/20 rounded-lg hover:bg-white/30 transition-colors">
            <ArrowLeft className="w-5 h-5 text-white" />
          </button>
        </div>
      </SidebarHeader>

      <SidebarContent className="px-4">
        <SidebarMenu className="space-y-2">
          {menuItems.map((item) => (
            <SidebarMenuItem key={item.title}>
              <SidebarMenuButton
                className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-all ${
                  item.isActive
                    ? 'bg-white text-indigo-600 shadow-sm'
                    : 'text-white hover:bg-white/10'
                }`}
              >
                <item.icon className="w-5 h-5" />
                <span className="font-medium">{item.title}</span>
              </SidebarMenuButton>
            </SidebarMenuItem>
          ))}
        </SidebarMenu>
      </SidebarContent>

      <SidebarFooter className="px-4 pb-6">
        <SidebarMenu className="space-y-2">
          {bottomMenuItems.map((item) => (
            <SidebarMenuItem key={item.title}>
              <SidebarMenuButton className="w-full flex items-center gap-3 px-4 py-3 rounded-lg text-white hover:bg-white/10 transition-all">
                <item.icon className="w-5 h-5" />
                <span className="font-medium">{item.title}</span>
              </SidebarMenuButton>
            </SidebarMenuItem>
          ))}
        </SidebarMenu>
      </SidebarFooter>
    </Sidebar>
  );
};

export default AppSidebar;
