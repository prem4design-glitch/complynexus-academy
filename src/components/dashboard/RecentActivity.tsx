import React from 'react';

const activities = [
    {
        id: 1,
        initials: 'BO',
        name: 'Brian Okafor',
        action: 'completed Anti-Money Laundering',
        time: '2h ago',
        avatarBg: 'bg-(--green-10)',
        avatarText: 'text-(--green)',
        iconBg: 'bg-(--green-10)',
        iconColor: 'text-(--green)',
        type: 'completed'
    },
    {
        id: 2,
        initials: 'GP',
        name: 'Grace Patel',
        action: 'was enrolled in GDPR Essentials',
        time: '4h ago',
        avatarBg: 'bg-(--primary-10)',
        avatarText: 'text-(--primary)',
        iconBg: 'bg-(--primary-10)',
        iconColor: 'text-(--primary)',
        type: 'enrolled'
    },
    {
        id: 3,
        initials: 'DK',
        name: 'David Kim',
        action: 'flagged as at-risk (12 days inactive)',
        time: '6h ago',
        avatarBg: 'bg-(--red-10)',
        avatarText: 'text-(--red)',
        iconBg: 'bg-(--red-10)',
        iconColor: 'text-(--red)',
        type: 'at-risk'
    },
    {
        id: 4,
        initials: 'ET',
        name: 'Ella Thompson',
        action: 'earned a certificate in Data Handling',
        time: '1d ago',
        avatarBg: 'bg-(--primary)',
        avatarText: 'text-white',
        iconBg: 'bg-(--primary)',
        iconColor: 'text-white',
        type: 'certificate'
    },
    {
        id: 5,
        initials: 'FN',
        name: 'Felix Nguyen',
        action: 'completed Workplace Safety Module',
        time: '1d ago',
        avatarBg: 'bg-(--green-10)',
        avatarText: 'text-(--green)',
        iconBg: 'bg-(--green-10)',
        iconColor: 'text-(--green)',
        type: 'completed'
    },
    {
        id: 6,
        initials: 'AJ',
        name: 'Alice Johnson',
        action: 'was enrolled in GDPR Essentials',
        time: '2d ago',
        avatarBg: 'bg-(--primary-10)',
        avatarText: 'text-(--primary)',
        iconBg: 'bg-(--primary-10)',
        iconColor: 'text-(--primary)',
        type: 'enrolled'
    },
    {
        id: 7,
        initials: 'GP',
        name: 'Grace Patel',
        action: 'missed deadline for Code of Conduct',
        time: '3d ago',
        avatarBg: 'bg-(--red-10)',
        avatarText: 'text-(--red)',
        iconBg: 'bg-(--red-10)',
        iconColor: 'text-(--red)',
        type: 'misc'
    },
    {
        id: 8,
        initials: 'JC',
        name: 'James Carter',
        action: 'earned a certificate in Cybersecurity',
        time: '3d ago',
        avatarBg: 'bg-(--primary)',
        avatarText: 'text-white',
        iconBg: 'bg-(--primary)',
        iconColor: 'text-white',
        type: 'certificate'
    }
];

const ActivityCompletedIcon = () => (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M8.00065 1.33203C4.32732 1.33203 1.33398 4.32536 1.33398 7.9987C1.33398 11.672 4.32732 14.6654 8.00065 14.6654C11.674 14.6654 14.6673 11.672 14.6673 7.9987C14.6673 4.32536 11.674 1.33203 8.00065 1.33203ZM11.1873 6.46536L7.40732 10.2454C7.31398 10.3387 7.18732 10.392 7.05398 10.392C6.92065 10.392 6.79398 10.3387 6.70065 10.2454L4.81398 8.3587C4.62065 8.16536 4.62065 7.84536 4.81398 7.65203C5.00732 7.4587 5.32732 7.4587 5.52065 7.65203L7.05398 9.18536L10.4807 5.7587C10.674 5.56536 10.994 5.56536 11.1873 5.7587C11.3807 5.95203 11.3807 6.26536 11.1873 6.46536Z" fill="currentColor" />
    </svg>
);

const ActivityEnrolledIcon = () => (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M8.00065 1.33203C4.32732 1.33203 1.33398 4.32536 1.33398 7.9987C1.33398 11.672 4.32732 14.6654 8.00065 14.6654C11.674 14.6654 14.6673 11.672 14.6673 7.9987C14.6673 4.32536 11.674 1.33203 8.00065 1.33203ZM10.6673 8.4987H8.50065V10.6654C8.50065 10.9387 8.27398 11.1654 8.00065 11.1654C7.72732 11.1654 7.50065 10.9387 7.50065 10.6654V8.4987H5.33398C5.06065 8.4987 4.83398 8.27203 4.83398 7.9987C4.83398 7.72536 5.06065 7.4987 5.33398 7.4987H7.50065V5.33203C7.50065 5.0587 7.72732 4.83203 8.00065 4.83203C8.27398 4.83203 8.50065 5.0587 8.50065 5.33203V7.4987H10.6673C10.9407 7.4987 11.1673 7.72536 11.1673 7.9987C11.1673 8.27203 10.9407 8.4987 10.6673 8.4987Z" fill="currentColor" />
    </svg>
);

const ActivityDangerIcon = () => (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M8.00065 1.33203C4.32732 1.33203 1.33398 4.32536 1.33398 7.9987C1.33398 11.672 4.32732 14.6654 8.00065 14.6654C11.674 14.6654 14.6673 11.672 14.6673 7.9987C14.6673 4.32536 11.674 1.33203 8.00065 1.33203ZM7.50065 5.33203C7.50065 5.0587 7.72732 4.83203 8.00065 4.83203C8.27398 4.83203 8.50065 5.0587 8.50065 5.33203V8.66536C8.50065 8.9387 8.27398 9.16536 8.00065 9.16536C7.72732 9.16536 7.50065 8.9387 7.50065 8.66536V5.33203ZM8.61398 10.9187C8.58065 11.0054 8.53398 11.072 8.47398 11.1387C8.40732 11.1987 8.33398 11.2454 8.25398 11.2787C8.17398 11.312 8.08732 11.332 8.00065 11.332C7.91398 11.332 7.82732 11.312 7.74732 11.2787C7.66732 11.2454 7.59398 11.1987 7.52732 11.1387C7.46732 11.072 7.42065 11.0054 7.38732 10.9187C7.35398 10.8387 7.33398 10.752 7.33398 10.6654C7.33398 10.5787 7.35398 10.492 7.38732 10.412C7.42065 10.332 7.46732 10.2587 7.52732 10.192C7.59398 10.132 7.66732 10.0854 7.74732 10.052C7.90732 9.98536 8.09398 9.98536 8.25398 10.052C8.33398 10.0854 8.40732 10.132 8.47398 10.192C8.53398 10.2587 8.58065 10.332 8.61398 10.412C8.64732 10.492 8.66732 10.5787 8.66732 10.6654C8.66732 10.752 8.64732 10.8387 8.61398 10.9187Z" fill="currentColor" />
    </svg>
);

const ActivityCertificateIcon = () => (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M14.1668 12.3147L13.0668 12.5747C12.8202 12.6347 12.6268 12.8214 12.5735 13.068L12.3402 14.048C12.2135 14.5814 11.5335 14.748 11.1802 14.328L9.18683 12.0347C9.02683 11.848 9.11349 11.5547 9.35349 11.4947C10.5335 11.208 11.5935 10.548 12.3735 9.60804C12.5002 9.45471 12.7268 9.43471 12.8668 9.57471L14.3468 11.0547C14.8535 11.5614 14.6735 12.1947 14.1668 12.3147Z" fill="currentColor" />
        <path d="M1.80011 12.3147L2.90011 12.5747C3.14678 12.6347 3.34011 12.8214 3.39344 13.068L3.62678 14.048C3.75344 14.5814 4.43344 14.748 4.78678 14.328L6.78011 12.0347C6.94011 11.848 6.85344 11.5547 6.61344 11.4947C5.43344 11.208 4.37344 10.548 3.59344 9.60804C3.46678 9.45471 3.24011 9.43471 3.10011 9.57471L1.62011 11.0547C1.11344 11.5614 1.29344 12.1947 1.80011 12.3147Z" fill="currentColor" />
        <path d="M8.00065 1.33203C5.42065 1.33203 3.33398 3.4187 3.33398 5.9987C3.33398 6.96536 3.62065 7.85203 4.11398 8.59203C4.83398 9.6587 5.97398 10.412 7.30065 10.6054C7.52732 10.6454 7.76065 10.6654 8.00065 10.6654C8.24065 10.6654 8.47398 10.6454 8.70065 10.6054C10.0273 10.412 11.1673 9.6587 11.8873 8.59203C12.3807 7.85203 12.6673 6.96536 12.6673 5.9987C12.6673 3.4187 10.5807 1.33203 8.00065 1.33203ZM10.0407 5.85203L9.48732 6.40536C9.39398 6.4987 9.34065 6.6787 9.37398 6.81203L9.53398 7.4987C9.66065 8.0387 9.37398 8.25203 8.89398 7.96536L8.22732 7.57203C8.10732 7.4987 7.90732 7.4987 7.78732 7.57203L7.12065 7.96536C6.64065 8.24536 6.35398 8.0387 6.48065 7.4987L6.64065 6.81203C6.66732 6.68536 6.62065 6.4987 6.52732 6.40536L5.96065 5.85203C5.63398 5.52536 5.74065 5.1987 6.19398 5.12536L6.90732 5.00536C7.02732 4.98536 7.16732 4.8787 7.22065 4.77203L7.61398 3.98536C7.82732 3.5587 8.17398 3.5587 8.38732 3.98536L8.78065 4.77203C8.83398 4.8787 8.97398 4.98536 9.10065 5.00536L9.81398 5.12536C10.2607 5.1987 10.3673 5.52536 10.0407 5.85203Z" fill="currentColor" />
    </svg>
);

export const RecentActivity: React.FC = () => {
    const getIconForType = (type: string) => {
        switch (type) {
            case 'completed': return <ActivityCompletedIcon />;
            case 'enrolled': return <ActivityEnrolledIcon />;
            case 'at-risk':
            case 'misc': return <ActivityDangerIcon />;
            case 'certificate': return <ActivityCertificateIcon />;
            default: return <ActivityCompletedIcon />;
        }
    };

    return (
        <div className="flex flex-col gap-4 w-full h-full">
            <div className="flex items-center justify-between">
                <h4 className="h4 text-(--black)">Recent Activity</h4>
                <button className="text-(--primary) body-2 flex items-center gap-2">
                    View More
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14" /><path d="m12 5 7 7-7 7" /></svg>
                </button>
            </div>

            <div className="bg-white border-[1.25px] border-(--border-card) rounded-[12px] flex flex-col w-full flex-1 overflow-y-auto">
                {activities.map((activity, index) => (
                    <div
                        key={activity.id}
                        className={`flex gap-4 items-start p-[18px] w-full ${index !== activities.length - 1 ? 'border-b-[1.25px] border-[#f5f5f5]' : ''}`}
                    >
                        {/* Avatar */}
                        <div className={`${activity.avatarBg} rounded-full size-[35px] shrink-0 flex items-center justify-center`}>
                            <span className={`font-semibold text-[12.5px] ${activity.avatarText}`}>
                                {activity.initials}
                            </span>
                        </div>

                        {/* Content */}
                        <div className="flex-1 min-w-0 flex flex-col gap-1">
                            <p className="m-0 truncate text-[16px]">
                                <span className="font-medium text-(--black)">{activity.name}</span>
                                <span className="text-(--black-50)"> {activity.action}</span>
                            </p>
                            <p className="text-[#aaa] text-[13.75px] m-0">
                                {activity.time}
                            </p>
                        </div>

                        {/* Icon Badge */}
                        <div className={`${activity.iconBg} rounded-full size-[30px] shrink-0 flex items-center justify-center`}>
                            <div className={`${activity.iconColor} flex items-center justify-center`}>
                                {getIconForType(activity.type)}
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};
