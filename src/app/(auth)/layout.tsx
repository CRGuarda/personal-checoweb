import { NextAuthProvider } from '@/components/contexts/NextAuthProvider'
import { Navbar } from '@/components/navbar'
import SidebarProvider from '@/components/contexts/SidebarProvider'
import { Sidebar } from '@/components/sidebar'

export default function AuthLayout({ children }: { children: React.ReactNode }) {
  return (
    <NextAuthProvider>
      <SidebarProvider>
        <Navbar />
        <section className='md:grid md:grid-cols-[300px,1fr] md:gap-4 h-full pt-12 md:pt-14'>
          <Sidebar />
          <section className='p-2 md:overflow-y-auto h-full md:h-auto pb-16 pt-20'>{children}</section>
        </section>
      </SidebarProvider>
    </NextAuthProvider>
  )
}
