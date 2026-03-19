import React from 'react';
import { Button } from '../Button';
import { Input } from '../Input';

interface StepProps {
    onContinue: () => void;
    onBack: () => void;
}

export const AdminStep: React.FC<StepProps> = ({ onContinue, onBack }) => {
    return (
        <div className="flex flex-col gap-6">
            <div className="text-left flex flex-col gap-2">
                <h2 className="h2 text-(--black)">Set up your admin account</h2>
                <p className="body-1 text-(--black-75)">You'll be the primary administrator for your institution. You can add more admins later.</p>
            </div>

            <div className="flex flex-col gap-6">
                {/* Section 1: Personal Information */}
                <div className="bg-white border border-(--border-card) rounded-(--radius-18) p-[18px] flex flex-col gap-6">
                    <h4 className="body-1 font-bold text-(--black)">Personal information</h4>
                    <div className="flex flex-col gap-[18px]">
                        <div className="grid grid-cols-2 gap-[18px]">
                            <Input label="First Name" placeholder="Enter First Name" required />
                            <Input label="Last Name" placeholder="Enter Last Name" required />
                        </div>
                        <Input 
                            label="Work email address" 
                            placeholder="jane@yourcompany.com" 
                            required 
                            hint="This will be used to sign in and receive admin notifications."
                        />
                    </div>
                </div>

                {/* Section 2: Create a password */}
                <div className="bg-white border border-(--border-card) rounded-(--radius-18) p-[18px] flex flex-col gap-6">
                    <h4 className="body-1 font-bold text-(--black)">Create a password</h4>
                    <div className="flex flex-col gap-[18px]">
                        <Input 
                            type="password" 
                            label="Password" 
                            placeholder="Create a strong password" 
                            required 
                            rightIcon={
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                    <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
                                    <circle cx="12" cy="12" r="3" />
                                </svg>
                            }
                        />
                        <Input 
                            type="password" 
                            label="Confirm password" 
                            placeholder="Repeat your password" 
                            required 
                            rightIcon={
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                    <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
                                    <circle cx="12" cy="12" r="3" />
                                </svg>
                            }
                        />
                    </div>
                </div>

                {/* Info Alert: Owner Role */}
                <div className="bg-[rgba(217,119,6,0.05)] border border-[rgba(217,119,6,0.5)] rounded-[14px] p-4 flex items-start gap-3">
                    <div className="mt-1">
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#D97706" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <circle cx="12" cy="12" r="10" />
                            <line x1="12" y1="16" x2="12" y2="12" />
                            <line x1="12" y1="8" x2="12.01" y2="8" />
                        </svg>
                    </div>
                    <div>
                        <p className="body-1 font-medium text-(--black)">You'll be assigned the Owner role</p>
                        <p className="body-2 text-(--black-75)">As Owner, you can manage all institution settings, users, courses, and billing.</p>
                    </div>
                </div>
            </div>

            <div className="flex justify-between items-center">
                <Button
                    variant="ghost"
                    onClick={onBack}
                    className="p-0 h-auto hover:bg-transparent text-(--primary) font-bold"
                    leftIcon={
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M19 12H5M12 19l-7-7 7-7" />
                        </svg>
                    }
                >
                    Back
                </Button>
                <Button onClick={onContinue} className="w-[154px] h-[48px] body-1 flex items-center justify-center rounded-(--radius-8)"
                    rightIcon={
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M5 12h14M12 5l7 7-7 7" />
                        </svg>
                    }
                >
                    Continue
                </Button>
            </div>
        </div>
    );
};

