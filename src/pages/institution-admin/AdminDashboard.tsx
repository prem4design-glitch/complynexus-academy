import React from 'react';
import { Sidebar } from '../../components/dashboard/Sidebar';
import { TopBar } from '../../components/dashboard/TopBar';
import { OverviewMetrics } from '../../components/dashboard/OverviewMetrics';
import { RecentActivity } from '../../components/dashboard/RecentActivity';
import { AtRiskStudents } from '../../components/dashboard/AtRiskStudents';
import { BookSnapshot } from '../../components/dashboard/BookSnapshot';

const AdminDashboard: React.FC = () => {
    return (
        <div className="flex min-h-screen bg-(--bg-page) overflow-hidden max-h-screen">
            <Sidebar />
            <div className="flex-1 flex flex-col min-w-0 h-screen overflow-hidden">
                <TopBar title="Dashboard" />
                <main className="flex-1 overflow-y-auto p-6">
                    <div className="flex flex-col gap-[24px] w-full">
                        {/* Header Area */}
                        <div className="flex justify-between items-center w-full">
                            <div className="flex flex-col gap-1">
                                <h1 className="h1 m-0">Good morning, 👋</h1>
                                <p className="body-1 text-(--black-75) m-0">Your personal learning overview</p>
                            </div>
                            <button className="bg-(--primary) text-white flex items-center justify-center gap-2 px-[15px] py-[8px] h-[40px] rounded-[8px] body-2 shrink-0 cursor-pointer border-none shadow-xs hover:opacity-90 transition-opacity">
                                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" /><polyline points="7 10 12 15 17 10" /><line x1="12" y1="15" x2="12" y2="3" /></svg>
                                Export Report
                            </button>
                        </div>

                        {/* Metrics */}
                        <OverviewMetrics />

                        {/* Two Columns */}
                        <div className="flex gap-[24px] items-stretch w-full">
                            <div className="flex-[7_7_0%] min-w-0 flex flex-col">
                                <RecentActivity />
                            </div>
                            <div className="flex-[4_4_0%] min-w-0 flex flex-col">
                                <AtRiskStudents />
                            </div>
                        </div>

                        {/* Book Snapshot */}
                        <BookSnapshot />

                        {/* Spacer block at the bottom */}
                        <div className="h-4 w-full" />
                    </div>
                </main>
            </div>
        </div>
    );
};

export default AdminDashboard;
