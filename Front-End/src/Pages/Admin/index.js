import React from 'react';
import Sidebar from './Dashboard/SidebarAdmin';
import Navbar from './Dashboard/NavbarAdmin';
import Widget from './Dashboard/WidgetAdmin';
import Chart from './Dashboard/ChartAdmin';
import Featured from './Dashboard/FeaturedAdmin';
import './admin.scss';

function AdminPage() {
    return (
        <div className="home">
            <Sidebar />
            <div className="homeContainer">
                <Navbar />
                <div className="widgets">
                    <Widget />
                </div>
                <div className="charts">
                    <Featured />
                    <Chart />
                </div>
                <div className="listContainer">
                    {/* <div className="listTitle">Don hang</div>
                    <List /> */}
                </div>
            </div>
        </div>
    );
}

export default AdminPage;
