import React from 'react';
import { Button } from '../Button';
import { Input } from '../Input';

interface StepProps {
    onContinue: () => void;
    onBack: () => void;
}

export const TeamStep: React.FC<StepProps> = ({ onContinue, onBack }) => {
    return (
        <div className="flex flex-col gap-6">
            <div className="text-left flex flex-col gap-2">
                <h2 className="h2 text-(--black)">Invite your team</h2>
                <p className="body-1 text-(--black-75)">Add members to your institution now or invite them later from your dashboard.</p>
            </div>

            <div className="flex flex-col gap-6">
                {/* Section 1: Add members */}
                <div className="bg-white border border-(--border-card) rounded-(--radius-18) p-[18px] flex flex-col gap-6">
                    <div className="flex items-center justify-between">
                        <h4 className="body-1 font-bold text-(--black)">Add members</h4>
                        <Button variant="ghost" className="p-0 h-auto text-(--primary) flex items-center gap-2 font-bold" leftIcon={<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4M7 10l5 5 5-5M12 15V3"/></svg>}>
                            Bulk import
                        </Button>
                    </div>

                    <div className="flex gap-2 items-end">
                        <div className="flex-1">
                            <Input label="Email" placeholder="colleague@yourinstitution.edu" required />
                        </div>
                        <div className="w-[134px]">
                            <label className="body-2 font-(--weight-medium) text-(--black-75) mb-2 block">Role</label>
                            <button className="w-full h-12 px-4 bg-white border border-(--black-25) rounded-(--radius-8) flex items-center justify-between text-(--black-50) body-2">
                                Role
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M6 9l6 6 6-6"/></svg>
                            </button>
                        </div>
                        <Button className="h-12 px-6 rounded-(--radius-8) body-2" leftIcon={<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 5v14M5 12h14"/></svg>}>
                            Add
                        </Button>
                    </div>

                    {/* Role Guide */}
                    <div className="bg-[#fafafa] border border-(--border-card) rounded-[10px] p-[14px] flex flex-col gap-3">
                        <p className="body-1 font-medium text-(--black)">Role guide</p>
                        <div className="flex flex-col gap-2.5">
                            <div className="flex items-center gap-2">
                                <span className="px-2 py-0.5 border border-(--primary-50) text-(--primary) text-[10px] font-bold rounded-full uppercase">Learner</span>
                                <p className="body-2 text-(--black-50)">Access assigned courses and track progress</p>
                            </div>
                            <div className="flex items-center gap-2">
                                <span className="px-2 py-0.5 bg-(--primary-25) text-(--primary) text-[10px] font-bold rounded-full uppercase">Manager</span>
                                <p className="body-2 text-(--black-50)">View team progress and assign courses</p>
                            </div>
                            <div className="flex items-center gap-2">
                                <span className="px-2 py-0.5 bg-(--primary) text-white text-[10px] font-bold rounded-full uppercase">Admin</span>
                                <p className="body-2 text-(--black-50)">Full access to settings, users, and content</p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Empty State */}
                <div className="border border-(--border-card) border-dashed rounded-[10px] p-8 flex flex-col items-center justify-center bg-[#fafafa] text-center gap-4">
                    <div className="w-[60px] h-[60px] bg-(--primary-10) rounded-full flex items-center justify-center">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-(--primary)">
                            <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
                            <circle cx="9" cy="7" r="4" />
                            <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
                            <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                        </svg>
                    </div>
                    <div>
                        <h4 className="body-1 font-bold text-(--black)">No members invited yet</h4>
                        <p className="body-2 text-(--black-75)">Add emails above or skip to do this later.</p>
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

