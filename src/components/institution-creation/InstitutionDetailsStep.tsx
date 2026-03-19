import React, { useState } from 'react';
import { Button } from '../Button';
import { Input } from '../Input';

interface StepProps {
    onContinue: () => void;
    onBack?: () => void;
}

export const InstitutionDetailsStep: React.FC<StepProps> = ({ onContinue }) => {
    const [staffSize, setStaffSize] = useState('1 – 10');
    const [isIndustryOpen, setIsIndustryOpen] = useState(false);
    const [selectedIndustry, setSelectedIndustry] = useState('');

    const staffSizes = ['1 – 10', '11 – 50', '51 – 200', '201 – 500', '500 +'];
    const industries = [
        'Education',
        'Healthcare',
        'Finance'
    ];

    return (
        <div className="flex flex-col gap-8">
            <div className="text-left flex flex-col gap-2">
                <h2 className="h2 text-(--black)">Tell us about your institution</h2>
                <p className="body-1 text-(--black-75)">This helps us create the right compliance learning environment for your team.</p>
            </div>

            <div className="flex flex-col gap-4">
                {/* Card 1: Institution Name */}
                <div className="bg-white border border-(--border-card) rounded-(--radius-14) p-5 flex flex-col gap-4">
                    <h4 className="body-1 font-bold text-(--black)">Institution name</h4>
                    <div className="flex flex-col gap-2">
                        <Input
                            label="Official name"
                            placeholder="e.g. Riverside University"
                            required
                        />
                        <Input
                            label="Website (optional)"
                            placeholder="https://yourinstitution.edu"
                        />
                    </div>
                </div>

                {/* Card 2: Industry & size */}
                <div className="bg-white border border-(--border-card) rounded-(--radius-14) p-5 flex flex-col gap-4">
                    <h4 className="body-1 font-bold text-(--black)">Industry & size</h4>
                    <div className="flex flex-col gap-2">
                        <div className="relative flex flex-col gap-2 w-full">
                            <label className="body-2 font-(--weight-medium) text-(--black-75)">
                                Industry<span className="text-(--red) ml-0.5">*</span>
                            </label>
                            <button
                                type="button"
                                onClick={() => setIsIndustryOpen(!isIndustryOpen)}
                                className={`w-full h-12 px-4 bg-(--white) border border-(--black-25) rounded-(--radius-8) flex items-center justify-between transition-all outline-none ${isIndustryOpen ? 'border-(--primary) ring-1 ring-(--primary-25)' : ''}`}
                            >
                                <span className={`body-2 ${selectedIndustry ? 'text-(--black)' : 'text-(--black-50)'}`}>
                                    {selectedIndustry || 'Select Industry'}
                                </span>
                                <svg className={`text-(--black-25) transition-transform ${isIndustryOpen ? 'rotate-180' : ''}`} width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                    <path d="M6 9l6 6 6-6" />
                                </svg>
                            </button>

                            {isIndustryOpen && (
                                <div className="absolute top-full mt-2 left-0 w-full bg-white border border-(--border-card) rounded-(--radius-8) shadow-lg z-50 max-h-[240px] overflow-y-auto">
                                    {industries.map((industry) => (
                                        <button
                                            key={industry}
                                            type="button"
                                            onClick={() => {
                                                setSelectedIndustry(industry);
                                                setIsIndustryOpen(false);
                                            }}
                                            className="w-full px-4 py-3 text-left body-2 text-(--black-75) hover:bg-(--primary-10) hover:text-(--primary) transition-colors border-b last:border-0 border-(--border-card)"
                                        >
                                            {industry}
                                        </button>
                                    ))}
                                </div>
                            )}
                        </div>

                        <div className="flex flex-col gap-2">
                            <label className="body-2 text-(--black-75) flex gap-1">Number of staff<span className="text-red-500">*</span></label>
                            <div className="flex flex-wrap gap-3">
                                {staffSizes.map((size) => (
                                    <button
                                        key={size}
                                        type="button"
                                        onClick={() => setStaffSize(size)}
                                        className={`px-[18px] py-[10px] rounded-full body-1 border transition-all ${staffSize === size
                                            ? 'bg-(--primary) text-white border-(--primary)'
                                            : 'bg-white text-(--black-50) border-(--black-25) hover:border-(--primary)'
                                            }`}
                                    >
                                        {size}
                                    </button>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* CTAs */}
            <div className="flex justify-end">
                <Button
                    onClick={onContinue}
                    className="w-[154px] h-[48px] body-1 flex items-center justify-center rounded-(--radius-8)"
                >
                    Continue
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="ml-2">
                        <path d="M5 12h14M12 5l7 7-7 7" />
                    </svg>
                </Button>
            </div>
        </div>
    );
};
