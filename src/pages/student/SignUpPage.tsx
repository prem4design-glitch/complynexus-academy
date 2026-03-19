import React, { useState } from 'react';
import { FormLayout } from '../../components/FormLayout';
import { Button } from '../../components/Button';
import { Input } from '../../components/Input';
import { Link, useNavigate } from 'react-router-dom';

const SignUpPage: React.FC = () => {
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-(--bg-page) flex flex-col items-center justify-center p-6 lg:p-12">
      <FormLayout
        heading="Start Reading. Get Certified."
        subheading="Join ComplyNexus Academy for certifications."
      >
        <div className="flex flex-col w-full gap-(--gap-24)">
          {/* Social Login & Divider Section */}
          <div className="flex flex-col w-full gap-(--gap-24)">
            <Button
              variant="primary"
              className="w-full h-(--button-height) body-1 flex items-center justify-center gap-(--gap-12) border border-(--black-25)/30 hover:bg-(--grey-3) rounded-(--radius-8)">
              Sign Up with Google
            </Button>

            <div className="flex items-center gap-(--gap-12) w-full h-5">
              <div className="bg-(--black-25) flex-1 h-[1.238px]" />
              <span className="body-2 font-(--weight-regular) text-(--black-50)">OR</span>
              <div className="bg-(--black-25) flex-1 h-[1.238px]" />
            </div>
          </div>

          {/* Core Form Section */}
          <div className="flex flex-col w-full gap-(--gap-18)">
            <div className="flex flex-col gap-(--gap-18)">
              <Input
                label="Full Name"
                placeholder="Enter Full Name"
                required
                className="max-w-none"
              />
              <Input
                label="Email address"
                type="email"
                placeholder="you@example.com"
                required
                className="max-w-none"
              />
              <Input
                label="Password"
                type={showPassword ? 'text' : 'password'}
                placeholder="Enter Password"
                required
                className="max-w-none"
                rightIcon={
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="text-(--black-50) hover:text-(--black) transition-colors"
                  >
                    <PasswordIcon isVisible={showPassword} />
                  </button>
                }
              />
            </div>

            <Button variant="primary" className="w-full h-(--input-height) body-1 rounded-(--radius-8)">
              Continue
            </Button>
          </div>

          {/* Footer & Secondary Actions Section */}
          <div className="flex flex-col gap-(--gap-34)">
            <div className="text-center">
              <p className="body-1 font-(--weight-medium) text-(--black-50)">
                Already have an account?{' '}
                <Link to="/signin" className="text-(--primary) font-(--weight-semibold) hover:underline">
                  Sign in
                </Link>
              </p>
            </div>

            <button 
              onClick={() => navigate('/institution/create')}
              className="w-full flex items-center gap-3 p-4 bg-white border border-(--border-card) rounded-(--radius-14) hover:bg-slate-50 transition-colors"
            >
              <div className="w-12 h-12 rounded-(--radius-8) bg-(--primary-10) flex items-center justify-center text-(--primary) shrink-0">
                <InstitutionIcon />
              </div>
              <div className="w-full flex flex-col items-start text-left gap-(--gap-8)">
                <h4 className="body-1 text-(--black) leading-tight font-(--weight-bold)">Create an institution</h4>
                <p className="body-2 text-(--black-50) leading-tight whitespace-nowrap">Set up a workspace for your team or institution</p>
              </div>
              <div className="ml-auto">
                <svg className="text-(--black-25)" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M9 18l6-6-6-6" />
                </svg>
              </div>
            </button>
          </div>
        </div>
      </FormLayout>
    </div>
  );
};

export default SignUpPage;

// --- Sub-components for cleaner JSX ---

const PasswordIcon: React.FC<{ isVisible: boolean }> = ({ isVisible }) => (
  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M10.0009 13.6092C8.00924 13.6092 6.39258 11.9926 6.39258 10.0009C6.39258 8.00924 8.00924 6.39258 10.0009 6.39258C11.9926 6.39258 13.6092 8.00924 13.6092 10.0009C13.6092 11.9926 11.9926 13.6092 10.0009 13.6092ZM10.0009 7.64258C8.70091 7.64258 7.64258 8.70091 7.64258 10.0009C7.64258 11.3009 8.70091 12.3592 10.0009 12.3592C11.3009 12.3592 12.3592 11.3009 12.3592 10.0009C12.3592 8.70091 11.3009 7.64258 10.0009 7.64258Z" fill="currentColor" />
    <path d="M10.0004 17.5158C6.86706 17.5158 3.90872 15.6824 1.87539 12.4991C0.992057 11.1241 0.992057 8.88242 1.87539 7.49909C3.91706 4.31576 6.87539 2.48242 10.0004 2.48242C13.1254 2.48242 16.0837 4.31576 18.1171 7.49909C19.0004 8.87409 19.0004 11.1158 18.1171 12.4991C16.0837 15.6824 13.1254 17.5158 10.0004 17.5158ZM10.0004 3.73242C7.30872 3.73242 4.73372 5.34909 2.93372 8.17409C2.30872 9.14909 2.30872 10.8491 2.93372 11.8241C4.73372 14.6491 7.30872 16.2658 10.0004 16.2658C12.6921 16.2658 15.2671 14.6491 17.0671 11.8241C17.6921 10.8491 17.6921 9.14909 17.0671 8.17409C15.2671 5.34909 12.6921 3.73242 10.0004 3.73242Z" fill="currentColor" />
    {isVisible && <path d="M3 3l14 14" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />}
  </svg>
);

const InstitutionIcon: React.FC = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M22 19V22H2V19C2 18.45 2.45 18 3 18H21C21.55 18 22 18.45 22 19Z" fill="currentColor" stroke="currentColor" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M7 11H5V18H7V11Z" fill="currentColor" />
    <path d="M11 11H9V18H11V11Z" fill="currentColor" />
    <path d="M15 11H13V18H15V11Z" fill="currentColor" />
    <path d="M19 11H17V18H19V11Z" fill="currentColor" />
    <path d="M23 22.75H1C0.59 22.75 0.25 22.41 0.25 22C0.25 21.59 0.59 21.25 1 21.25H23C23.41 21.25 23.75 21.59 23.75 22C23.75 22.41 23.41 22.75 23 22.75Z" fill="currentColor" />
    <path d="M21.37 5.74984L12.37 2.14984C12.17 2.06984 11.83 2.06984 11.63 2.14984L2.63 5.74984C2.28 5.88984 2 6.29984 2 6.67984V9.99984C2 10.5498 2.45 10.9998 3 10.9998H21C21.55 10.9998 22 10.5498 22 9.99984V6.67984C22 6.29984 21.72 5.88984 21.37 5.74984ZM12 8.49984C11.17 8.49984 10.5 7.82984 10.5 6.99984C10.5 6.16984 11.17 5.49984 12 5.49984C12.83 5.49984 13.5 6.16984 13.5 6.99984C13.5 7.82984 12.83 8.49984 12 8.49984Z" fill="currentColor" />
  </svg>
);
