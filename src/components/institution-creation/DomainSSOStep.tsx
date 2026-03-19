import React from 'react';
import { Button } from '../Button';
import { Input } from '../Input';

interface StepProps {
    onContinue: () => void;
    onBack: () => void;
}

export const DomainSSOStep: React.FC<StepProps> = ({ onContinue, onBack }) => {
    return (
        <div className="flex flex-col gap-6">
            <div className="text-left flex flex-col gap-2">
                <h2 className="h2 text-(--black)">Configure domain & authentication</h2>
                <p className="body-1 text-(--black-75)">Set your institution's email domain so members can be auto-detected at login.</p>
            </div>

            <div className="flex flex-col gap-6">
                {/* Section 1: Institutional email domain */}
                <div className="bg-white border border-(--border-card) rounded-(--radius-18) p-[18px] flex flex-col gap-6">
                    <div className="flex flex-col gap-2">
                        <h4 className="body-1 font-bold text-(--black)">Institutional email domain</h4>
                        <p className="body-2 text-(--black-75)">Users entering an email from this domain will be automatically linked to your institution.</p>
                    </div>
                    
                    <div className="flex gap-4 items-end">
                        <div className="flex-1">
                            <Input label="Email domain" placeholder="@gmail.com" required />
                        </div>
                        <Button className="h-12 px-6 rounded-(--radius-8) body-2" rightIcon={<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M12 5l7 7-7 7"/></svg>}>
                            Verify domain
                        </Button>
                    </div>

                    <div className="bg-[#fafafa] border border-(--border-card) rounded-[10px] p-[14px] flex flex-col gap-2">
                        <p className="body-1 font-medium text-(--black)">How domain verification works</p>
                        <p className="body-2 text-(--black-75)">
                            Add a TXT record to your DNS settings, or click "Verify domain" above to simulate verification for this demo.
                        </p>
                    </div>
                </div>

                {/* Section 2: Additional domains */}
                <div className="bg-white border border-(--border-card) rounded-(--radius-18) p-[18px] flex flex-col gap-6">
                    <div className="flex items-center justify-between">
                        <div className="flex flex-col gap-2">
                            <h4 className="body-1 font-bold text-(--black)">Additional domains</h4>
                            <p className="body-2 text-(--black-75)">Add more domains if your institution uses multiple email domains.</p>
                        </div>
                        <Button size="small" variant="primary" className="h-10 px-4 flex items-center gap-2 rounded-(--radius-8)" leftIcon={<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 5v14M5 12h14"/></svg>}>
                            Add domain
                        </Button>
                    </div>
                    <div className="border border-(--border-card) border-dashed rounded-[10px] h-16 flex items-center justify-center bg-[#fafafa]">
                        <p className="body-2 text-(--black-50)">No additional domains added</p>
                    </div>
                </div>

                {/* Section 3: SSO */}
                <div className="bg-white border border-(--border-card) rounded-(--radius-18) p-[18px] flex flex-col gap-6">
                    <div className="flex items-center justify-between">
                        <div className="flex flex-col gap-2">
                            <h4 className="body-1 font-bold text-(--black)">Single Sign-On (SSO)</h4>
                            <p className="body-2 text-(--black-75)">Allow your team to sign in using your institution's identity provider.</p>
                        </div>
                        {/* Toggle Switch */}
                        <div className="w-[46px] h-[26px] bg-(--black-25) rounded-full relative cursor-pointer">
                            <div className="absolute left-[3px] top-[3px] w-5 h-5 bg-white rounded-full transition-transform" />
                        </div>
                    </div>

                    <div className="bg-[rgba(217,119,6,0.05)] border border-[rgba(217,119,6,0.5)] rounded-[14px] p-4 flex items-center gap-3">
                        <div>
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#D97706" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <circle cx="12" cy="12" r="10" />
                                <line x1="12" y1="16" x2="12" y2="12" />
                                <line x1="12" y1="8" x2="12.01" y2="8" />
                            </svg>
                        </div>
                        <p className="body-2 text-(--black-75)">Without SSO, members will sign in using email & password.</p>
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

