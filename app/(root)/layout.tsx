import { AppSidebar } from "@/components/app-navbar";
import { SidebarInset, SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
      <>   
          <SidebarProvider>
              <AppSidebar />
              <SidebarTrigger />
              <SidebarInset>
                {children}                  
              </SidebarInset>
          </SidebarProvider>    
    </>
  );
    
}