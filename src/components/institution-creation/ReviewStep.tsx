import React from 'react';
import { Button } from '../Button';

interface StepProps {
    onContinue: () => void;
    onBack?: () => void;
    onEditStep: (step: number) => void;
}

export const ReviewStep: React.FC<StepProps> = ({ onContinue, onBack, onEditStep }) => {
    return (
        <div className="flex flex-col gap-6">
            <div className="text-left flex flex-col gap-2">
                <h2 className="h2 text-(--black)">Review & launch</h2>
                <p className="body-1 text-(--black-75)">Verify your institution details before creating; you can update them later.</p>
            </div>

            {/* Single Large Review Card */}
            <div className="bg-white border border-(--border-card) rounded-(--radius-18) p-[18px] flex flex-col gap-8">
                {/* Section 1: Institution */}
                <div className="flex flex-col gap-4">
                    <div className="flex items-center justify-between">
                        <h4 className="body-1 font-bold text-(--black)">Institution</h4>
                        <Button variant="link" size="small" onClick={() => onEditStep(1)} className="h-auto font-bold !px-0" leftIcon={<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"/><path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"/></svg>}>
                            Edit
                        </Button>
                    </div>
                    <div className="border border-(--border-card) rounded-lg overflow-hidden">
                        <table className="w-full text-left body-2">
                            <tbody>
                                <tr className="border-b border-(--border-card)">
                                    <td className="px-4 py-3 text-(--black-75) border-r border-(--border-card) w-1/2">Name</td>
                                    <td className="px-4 py-3 text-(--black) font-medium text-right">trt</td>
                                </tr>
                                <tr className="border-b border-(--border-card)">
                                    <td className="px-4 py-3 text-(--black-75) border-r border-(--border-card)">Type</td>
                                    <td className="px-4 py-3 text-(--black) font-medium text-right">Non-Profit</td>
                                </tr>
                                <tr className="border-b border-(--border-card)">
                                    <td className="px-4 py-3 text-(--black-75) border-r border-(--border-card)">Industry</td>
                                    <td className="px-4 py-3 text-(--black) font-medium text-right">Financial Services</td>
                                </tr>
                                <tr>
                                    <td className="px-4 py-3 text-(--black-75) border-r border-(--border-card)">Size</td>
                                    <td className="px-4 py-3 text-(--black) font-medium text-right">11-50 employees</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>

                {/* Section 2: Admin account */}
                <div className="flex flex-col gap-4">
                    <div className="flex items-center justify-between">
                        <h4 className="body-1 font-bold text-(--black)">Admin account</h4>
                        <Button variant="link" size="small" onClick={() => onEditStep(2)} className="h-auto font-bold !px-0" leftIcon={<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"/><path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"/></svg>}>
                            Edit
                        </Button>
                    </div>
                    <div className="border border-(--border-card) rounded-lg overflow-hidden">
                        <table className="w-full text-left body-2">
                            <tbody>
                                <tr className="border-b border-(--border-card)">
                                    <td className="px-4 py-3 text-(--black-75) border-r border-(--border-card) w-1/2">Name</td>
                                    <td className="px-4 py-3 text-(--black) font-medium text-right">sdsd sds</td>
                                </tr>
                                <tr className="border-b border-(--border-card)">
                                    <td className="px-4 py-3 text-(--black-75) border-r border-(--border-card)">Email</td>
                                    <td className="px-4 py-3 text-(--black) font-medium text-right">user@gmail.com</td>
                                </tr>
                                <tr className="border-b border-(--border-card)">
                                    <td className="px-4 py-3 text-(--black-75) border-r border-(--border-card)">Role</td>
                                    <td className="px-4 py-3 text-right">
                                        <div className="flex justify-end items-center">
                                            <span className="px-2 py-0.5 bg-(--primary) text-white text-[10px] font-bold rounded-full uppercase inline-flex items-center gap-1">
                                                <svg width="10" height="10" viewBox="0 0 24 24" fill="white"><path d="M12 2L4.5 20.29l.71.71L12 18l6.79 3 .71-.71z"/></svg>
                                                Admin
                                            </span>
                                        </div>
                                    </td>
                                </tr>
                                <tr>
                                    <td className="px-4 py-3 text-(--black-75) border-r border-(--border-card)">Password</td>
                                    <td className="px-4 py-3 text-(--black) font-medium tracking-widest text-xs text-right">••••••••</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>

                {/* Section 3: Domain & SSO */}
                <div className="flex flex-col gap-4">
                    <div className="flex items-center justify-between">
                        <h4 className="body-1 font-bold text-(--black)">Domain & SSO</h4>
                        <Button variant="link" size="small" onClick={() => onEditStep(3)} className="h-auto font-bold !px-0" leftIcon={<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"/><path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"/></svg>}>
                            Edit
                        </Button>
                    </div>
                    <div className="border border-(--border-card) rounded-lg overflow-hidden">
                        <table className="w-full text-left body-2">
                            <tbody>
                                <tr className="border-b border-(--border-card)">
                                    <td className="px-4 py-3 text-(--black-75) border-r border-(--border-card) w-1/2">Name</td>
                                    <td className="px-4 py-3 text-(--black) font-medium text-right">sdsd sds</td>
                                </tr>
                                <tr className="border-b border-(--border-card)">
                                    <td className="px-4 py-3 text-(--black-75) border-r border-(--border-card)">Email domain</td>
                                    <td className="px-4 py-3 text-(--black) font-medium text-right">@gmail.com</td>
                                </tr>
                                <tr>
                                    <td className="px-4 py-3 text-(--black-75) border-r border-(--border-card)">Single Sign-On</td>
                                    <td className="px-4 py-3 text-(--black) font-medium flex items-center justify-end gap-2">
                                        <div className="w-2.5 h-2.5 bg-(--black-25) rounded-full" />
                                        Disabled
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>

                {/* Section 4: Team invitations */}
                <div className="flex flex-col gap-4">
                    <div className="flex items-center justify-between">
                        <h4 className="body-1 font-bold text-(--black)">Team invitations</h4>
                        <Button variant="link" size="small" onClick={() => onEditStep(4)} className="h-auto font-bold !px-0" leftIcon={<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"/><path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"/></svg>}>
                            Edit
                        </Button>
                    </div>
                    <div className="border border-(--border-card) border-dashed rounded-[10px] py-4 bg-[#fafafa]/50 flex items-center justify-center">
                        <p className="body-2 text-(--black-75)">No members invited — you can add them after setup.</p>
                    </div>
                </div>

                {/* What happens next */}
                <div className="bg-[#fafafa]/50 border border-(--border-card) rounded-[10px] p-[14px] flex flex-col gap-3">
                    <p className="body-1 font-medium text-(--black)">What happens when you click "Create Institution"</p>
                    <div className="flex flex-col gap-3">
                        {[
                            "Your institution workspace will be provisioned instantly",
                            "Invitation emails will be sent to all added members",
                            "You'll be redirected to your new admin dashboard"
                        ].map((text, i) => (
                            <div key={i} className="flex gap-3 items-center">
                                <div className="w-6 h-6 bg-(--black-75) rounded-full flex items-center justify-center text-white text-[10px] font-bold">
                                    {i + 1}
                                </div>
                                <p className="body-2 text-[#666]">{text}</p>
                            </div>
                        ))}
                    </div>
                </div>

                {/* TOS Agreement */}
                <div className="bg-[#fafafa]/50 border border-(--border-card) rounded-[10px] p-[14px] flex gap-3 items-start">
                    <div className="mt-0.5">
                        <div className="w-5 h-5 border-2 border-(--primary) rounded flex items-center justify-center bg-white">
                            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="(--primary)" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
                        </div>
                    </div>
                    <p className="body-2 text-(--black-75) leading-relaxed">
                        I agree to ComplyNexus Academy's <span className="text-(--primary) font-medium">Terms of Service</span> and <span className="text-(--primary) font-medium">Privacy Policy</span>. I confirm that I'm authorized to create an institution account.
                    </p>
                </div>
            </div>

            <div className="flex justify-between items-center mt-4">
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
                <Button onClick={onContinue} className="px-6 h-[48px] body-1 flex items-center justify-center rounded-(--radius-8)"
                    leftIcon={
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
                            <path d="m9 12 2 2 4-4"/>
                        </svg>
                    }
                >
                    Create Institution
                </Button>
            </div>
        </div>
    );
};
