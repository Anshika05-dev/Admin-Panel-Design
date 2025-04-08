import { useLocation } from 'react-router-dom';

import {LayoutDashboard,
    LineChart,
    UserCircle,
    Calendar,
    FileText,
    Settings,
    Users,
    BookOpen,
    Store
} from 'lucide-react';
import './styles/Sidebar.css';
 import NavItem from './NavItem';
 import NavSection from './NavSection';

    

 
function Sidebar({ isOpen }) {
  const location = useLocation();
  const currentPath = location.pathname;

    return (
      <aside className={`sidebar ${isOpen ? 'expanded' : 'collapsed'}`}>
        <div className="sidebar-header">
          <div className="sidebar-logo">
            <span className="sidebar-logo-text">H</span>
          </div>
          {isOpen && <span className="sidebar-brand">Hyper</span>}
          
        </div>
        
        <div className="sidebar-content">
          <NavSection title="Navigation" isOpen={isOpen}>
            <NavItem icon={LayoutDashboard} label="Dashboards" to="/" isActive={currentPath === '/'} isOpen={isOpen}/>
            <NavItem icon={LineChart} label="Sales" to="/sales" isActive={currentPath === '/sales'}  isOpen={isOpen}/>
            <NavItem icon={Store} label="Salons" to="/salons" isActive={currentPath === '/salons'}  isOpen={isOpen}/>
            {/* <NavItem icon={Folder} label="Projects" /> */}
            <NavItem icon={UserCircle} label="Clients" to="/clients" isActive={currentPath === '/clients'} isOpen={isOpen}/>
            <NavItem icon={BookOpen} label="Catalog" to="/catalog" badge='New' isActive={currentPath === '/catalog'}  isOpen={isOpen}/>
            {/* <NavItem icon={Wallet} label="E-Wallet" /> */}
          </NavSection>
  
          <NavSection title="Apps" isOpen={isOpen}>
            <NavItem icon={Calendar} label="Calendar" to="/calendar" isActive={currentPath === '/calendar'}  isOpen={isOpen}/>
            {/* <NavItem icon={MessageSquare} label="Chat" /> */}
            {/* <NavItem icon={Mail} label="Email" /> */}
            <NavItem icon={FileText} label="Online Bookings" to="/bookings" isActive={currentPath === '/bookings'}  isOpen={isOpen}/>
            {/* <NavItem icon={Rss} label="Social Feed" /> */}
            {/* <NavItem icon={CheckSquare} label="Tasks" /> */}
            <NavItem icon={Users} label="Teams" to="/teams" isActive={currentPath === '/teams'}   isOpen={isOpen}/>
          </NavSection>
  
          <NavSection title="Custom" isOpen={isOpen}>
            <NavItem icon={Settings} label="Settings" to="/settings" isActive={currentPath === '/settings'}  isOpen={isOpen}/>
          </NavSection>
        </div>
      </aside>
    );
  }

  export default Sidebar