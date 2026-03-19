import React from 'react';

const SearchIcon = () => (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="11" cy="11" r="8" />
        <path d="m21 21-4.35-4.35" />
    </svg>
);

interface TopBarProps {
    title?: string;
}

export const TopBar: React.FC<TopBarProps> = ({ title = 'Dashboard' }) => {
    return (
        <header className="bg-white border-b border-(--border-card) flex items-center justify-between px-6 h-[72px] w-full shrink-0">
            {/* Left Side: Breadcrumbs / Title */}
            <div className="flex items-center">
                <h4 className="text-(--black) m-0">{title}</h4>
            </div>

            {/* Right Side: Global Search */}
            <div className="flex items-center">
                <div className="bg-(--grey-3) flex items-center gap-2 px-4 h-[40px] rounded-lg w-[420px] text-(--black-75)">
                    <SearchIcon />
                    <input 
                        type="text" 
                        placeholder="Search..." 
                        className="bg-transparent border-none outline-none flex-1 body-2 text-(--black) placeholder:text-(--black-75)"
                    />
                </div>
            </div>
        </header>
    );
};
