import React from 'react';

interface StepperProps {
    steps: string[];
    currentStep: number;
}

export const Stepper: React.FC<StepperProps> = ({ steps, currentStep }) => {
    return (
        <div className="bg-white border-b border-(--border-card) py-3 flex justify-center sticky top-[68px] z-40">
            <div className="flex items-center gap-2">
                {steps.map((label, index) => {
                    const stepNumber = index + 1;
                    const isActive = stepNumber === currentStep;
                    const isCompleted = stepNumber < currentStep;

                    return (
                        <React.Fragment key={label}>
                            <div className="flex items-center gap-2">
                                {/* Step Circle */}
                                <div
                                    className={`w-6 h-6 rounded-full flex items-center justify-center text-[12px] font-bold border transition-all ${isActive
                                        ? 'bg-(--primary-10) text-(--primary) border-(--primary)'
                                        : isCompleted
                                            ? 'bg-(--primary) text-white border-(--primary)'
                                            : 'bg-white text-(--black-25) border-(--black-25)'
                                        }`}
                                >
                                    {isCompleted ? (
                                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                                            <polyline points="20 6 9 17 4 12" />
                                        </svg>
                                    ) : (
                                        stepNumber
                                    )}
                                </div>

                                {/* Step Label */}
                                <span
                                    className={`text-[14px] font-bold transition-all ${isActive ? 'text-(--primary)' : 'text-(--black-50)'
                                        }`}
                                >
                                    {label}
                                </span>
                            </div>

                            {/* Divider */}
                            {index < steps.length - 1 && (
                                <div className={`w-14 h-px transition-all ${isCompleted ? 'bg-(--primary)' : 'bg-(--black-25)'
                                    }`} />
                            )}
                        </React.Fragment>
                    );
                })}
            </div>
        </div>
    );
};
