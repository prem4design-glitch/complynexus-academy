import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Stepper } from '../../components/institution-creation/Stepper';

import { CreateInstitutionHeader } from '../../components/institution-creation/CreateInstitutionHeader';
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
            <CreateInstitutionHeader currentStep={currentStep} totalSteps={steps.length} />

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
