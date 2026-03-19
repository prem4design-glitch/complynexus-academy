import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Stepper } from '../../components/Stepper';
import logo from '../../assets/logo.png';

import { InstitutionDetailsStep } from '../../components/institution-creation/InstitutionDetailsStep';
import { AdminStep } from '../../components/institution-creation/AdminStep';
import { DomainSSOStep } from '../../components/institution-creation/DomainSSOStep';
import { TeamStep } from '../../components/institution-creation/TeamStep';
import { ReviewStep } from '../../components/institution-creation/ReviewStep';

const CreateInstitutionPage: React.FC = () => {
    const navigate = useNavigate();
    const [currentStep, setCurrentStep] = useState(1);
    const steps = ['Institution', 'Admin', 'Domain & SSO', 'Team', 'Review'];

    const handleContinue = () => {
        if (currentStep < steps.length) {
            setCurrentStep(currentStep + 1);
        } else {
            navigate('/admin/dashboard');
        }
    };

    const handleBack = () => {
        if (currentStep > 1) {
            setCurrentStep(currentStep - 1);
        }
    };

    const renderStep = () => {
        switch (currentStep) {
            case 1:
                return <InstitutionDetailsStep onContinue={handleContinue} />;
            case 2:
                return <AdminStep onContinue={handleContinue} onBack={handleBack} />;
            case 3:
                return <DomainSSOStep onContinue={handleContinue} onBack={handleBack} />;
            case 4:
                return <TeamStep onContinue={handleContinue} onBack={handleBack} />;
            case 5:
                return <ReviewStep onContinue={handleContinue} onBack={handleBack} onEditStep={setCurrentStep} />;
            default:
                return <InstitutionDetailsStep onContinue={handleContinue} />;
        }
    };

    return (
        <div className="min-h-screen bg-(--bg-page) flex flex-col">
            {/* Top Header */}
            <header className="bg-white border-b border-(--border-card) px-6 py-4 lg:px-[224px] flex items-center justify-between sticky top-0 z-50">
                <div className="flex items-center">
                    <img src={logo} alt="ComplyNexus" className="h-[34px]" />
                </div>
                <div className="flex items-center gap-2">
                    <span className="body-2 text-(--black-50)">Step {currentStep} of 5</span>
                    <button
                        onClick={() => navigate('/signup')}
                        className="body-2 text-(--primary) font-(--weight-semibold) hover:underline"
                    >
                        Cancel
                    </button>
                </div>
            </header>

            {/* Progress Stepper */}
            <Stepper currentStep={currentStep} steps={steps} />

            {/* Main Content */}
            <main className="flex-1 flex flex-col items-center py-12 px-6">
                <div className="max-w-[664px] w-full">
                    {renderStep()}
                </div>
            </main>
        </div>
    );
};

export default CreateInstitutionPage;
