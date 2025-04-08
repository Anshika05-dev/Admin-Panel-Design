import React,{useState}from 'react';
import StatCard from './StatCard';
import RevenueChart from './RevenueChart';
import Sidebar from './Sidebar';
import Header from './Header.jsx';
import './styles/Dashboard.css'
import { 
  Users, 
  ShoppingCart, 
  DollarSign, 
  TrendingUp,
  ChevronRight,
} from 'lucide-react';
import './styles/App.css';

function Dashboard() {

  return (
    <div className="app">

        <main className="main-container">
          <div className="stats-grid">
            <StatCard
              title="Customers"
              value="36,254"
              icon={Users}
              change={{ value: "5.27%", positive: true }}
              timeframe="Since last month"
            />
            <StatCard
              title="Orders"
              value="5,543"
              icon={ShoppingCart}
              change={{ value: "1.08%", positive: false }}
              timeframe="Since last month"
            />
            <StatCard
              title="Revenue"
              value="$6,254"
              icon={DollarSign}
              change={{ value: "7.00%", positive: false }}
              timeframe="Since last month"
            />
            <StatCard
              title="Growth"
              value="30.56%"
              icon={TrendingUp}
              change={{ value: "4.87%", positive: true }}
              timeframe="Since last month"
            />
          </div>

          <div className="charts-grid">
            <RevenueChart />
            
            <div className="recent-activity">
              <div className="recent-activity-header">
                <h3 className="recent-activity-title">Recent Activity</h3>
                <button className="view-all-button">
                  View All
                  <ChevronRight />
                </button>
              </div>
              <div className="activity-list">
                {[1, 2, 3, 4].map((_, i) => (
                  <div key={i} className="activity-item">
                    <div className="activity-icon">
                      <Users />
                    </div>
                    <div className="activity-content">
                      <h4>New customer registered</h4>
                      <p className="activity-time">2 minutes ago</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </main>
      </div>
  );
}

export default Dashboard;