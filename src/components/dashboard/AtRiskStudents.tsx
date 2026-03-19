import React from 'react';

const students = [
    {
        id: 1,
        initials: 'DK',
        name: 'David Kim',
        department: 'IT',
        lastActive: '12d ago',
        progress: 12,
        incomplete: '3 courses still incomplete'
    },
    {
        id: 2,
        initials: 'GP',
        name: 'Grace Patel',
        department: 'Operations',
        lastActive: '18d ago',
        progress: 8,
        incomplete: '3 courses still incomplete'
    },
    {
        id: 3,
        initials: 'JL',
        name: 'James Lee',
        department: 'Marketing',
        lastActive: '5d ago',
        progress: 12,
        incomplete: '2 courses still incomplete'
    },
    {
        id: 4,
        initials: 'AS',
        name: 'Ava Smith',
        department: 'Design',
        lastActive: '10d ago',
        progress: 20,
        incomplete: '1 course still incomplete'
    }
];

export const AtRiskStudents: React.FC = () => {
    return (
        <div className="flex flex-col gap-4 w-full h-full">
            <div className="flex items-center justify-between">
                <h4 className="h4 text-(--black)">At-Risk Students</h4>
                <button className="text-(--primary) body-2 flex items-center gap-2">
                    View More
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14" /><path d="m12 5 7 7-7 7" /></svg>
                </button>
            </div>

            <div className="bg-white border-[1.25px] border-(--border-card) rounded-[12px] flex flex-col justify-between w-full h-full overflow-hidden">
                <div className="overflow-y-auto w-full flex-1 flex flex-col">
                    {students.map((student, index) => (
                        <div
                            key={student.id}
                            className={`flex flex-col gap-3 p-5 w-full flex-1 justify-center ${index !== students.length - 1 ? 'border-b-[1.25px] border-[#f5f5f5]' : ''}`}
                        >
                            <div className="flex gap-[15px] items-center">
                                {/* Avatar */}
                                <div className="bg-(--primary-10) rounded-full size-[35px] shrink-0 flex items-center justify-center">
                                    <span className="font-semibold text-[12.5px] text-(--primary)">
                                        {student.initials}
                                    </span>
                                </div>

                                {/* Content */}
                                <div className="flex-1 min-w-0 flex flex-col">
                                    <p className="font-medium text-[16px] text-(--black) leading-6 truncate m-0">
                                        {student.name}
                                    </p>
                                    <p className="text-[#aaa] text-[14px] leading-5 truncate m-0">
                                        {student.department} · Last active {student.lastActive}
                                    </p>
                                </div>
                            </div>

                            <div className="flex gap-[10px] items-center h-[20px] w-full mt-1">
                                <div className="bg-[#e8e8e8] flex-1 h-[5px] rounded-full overflow-hidden">
                                    <div
                                        className="bg-(--primary) h-full rounded-full"
                                        style={{ width: `${student.progress}%` }}
                                    />
                                </div>
                                <div className="shrink-0 w-[40px] text-right">
                                    <p className="text-[#888] text-[14px] leading-[20px] m-0">
                                        {student.progress}%
                                    </p>
                                </div>
                            </div>

                            <p className="text-[#b71c1c] text-[14px] leading-[20px] m-0">
                                {student.incomplete}
                            </p>
                        </div>
                    ))}
                </div>

                <div className="border-t-[1.25px] border-(--border-card) p-4.5 shrink-0 w-full hover:bg-[#f9f9f9] cursor-pointer transition-colors mt-auto">
                    <p className="text-[#b71c1c] text-[14px] text-center w-full font-medium flex justify-center items-center gap-2 m-0">
                        Send reminder to all at-risk &rarr;
                    </p>
                </div>
            </div>
        </div>
    );
};
