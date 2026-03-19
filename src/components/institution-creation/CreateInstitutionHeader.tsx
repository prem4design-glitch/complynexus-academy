import React from 'react';
import { useNavigate } from 'react-router-dom';
import logo from '../../assets/logo.png';

interface CreateInstitutionHeaderProps {
    currentStep: number;
    totalSteps: number;
}

export const CreateInstitutionHeader: React.FC<CreateInstitutionHeaderProps> = ({ currentStep, totalSteps }) => {
    const navigate = useNavigate();

    return (
        <header className="bg-white border-b border-(--border-card) px-6 py-4 lg:px-[224px] flex items-center justify-between sticky top-0 z-50">
            <div className="flex items-center">
                <img src={logo} alt="ComplyNexus" className="h-[34px]" />
            </div>
            <div className="flex items-center gap-2">
                <span className="body-2 text-(--black-50)">Step {currentStep} of {totalSteps}</span>
                <button
                    onClick={() => navigate('/signup')}
                    className="body-2 text-(--primary) font-(--weight-semibold) hover:underline"
                >
                    Cancel
                </button>
            </div>
        </header>
    );
};
