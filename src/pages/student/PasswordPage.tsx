import React, { useState } from 'react';
import { FormLayout } from '../../components/FormLayout';
import { Button } from '../../components/Button';
import { Input } from '../../components/Input';
import { Link, useNavigate } from 'react-router-dom';

const PasswordPage: React.FC = () => {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const [password, setPassword] = useState('');

  const handleSignIn = () => {
    if (password === 'user123') {
      navigate('/student/dashboard');
    } else if (password === 'admin123') {
      navigate('/admin/dashboard');
    }
  };
  return (
    <div className="min-h-screen bg-(--bg-page) flex flex-col items-center justify-center p-6 lg:p-12">
      <FormLayout
        heading="Enter your password"
        subheading="Sign in to your ComplyNexus Academy account."
      >
        <div className="flex flex-col w-full gap-(--gap-24)">
          <div className="flex flex-col w-full gap-(--gap-18)">
            <div className="flex flex-col gap-(--gap-8)">
              <Input
                label="Password"
                type={showPassword ? 'text' : 'password'}
                placeholder="Enter Password"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
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
              <div className="flex justify-end">
                <Link to="/forgot-password" className="body-2 text-(--primary) font-(--weight-semibold) hover:underline">
                  Forgot password?
                </Link>
              </div>
            </div>
          </div>

          <Button 
            className="w-full h-(--input-height) body-1 rounded-(--radius-8)"
            onClick={handleSignIn}
          >
            Sign In
          </Button>

          <div className="flex flex-col gap-(--gap-34)">
            <div className="text-center">
              <p className="body-1 font-(--weight-medium) text-(--black-50)">
                Not you?{' '}
                <Link to="/signin" className="text-(--primary) font-(--weight-semibold) hover:underline">
                  Sign in with a different account
                </Link>
              </p>
            </div>
          </div>
        </div>
      </FormLayout>
    </div>
  );
};

const PasswordIcon: React.FC<{ isVisible: boolean }> = ({ isVisible }) => (
  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M10.0009 13.6092C8.00924 13.6092 6.39258 11.9926 6.39258 10.0009C6.39258 8.00924 8.00924 6.39258 10.0009 6.39258C11.9926 6.39258 13.6092 8.00924 13.6092 10.0009C13.6092 11.9926 11.9926 13.6092 10.0009 13.6092ZM10.0009 7.64258C8.70091 7.64258 7.64258 8.70091 7.64258 10.0009C7.64258 11.3009 8.70091 12.3592 10.0009 12.3592C11.3009 12.3592 12.3592 11.3009 12.3592 10.0009C12.3592 8.70091 11.3009 7.64258 10.0009 7.64258Z" fill="currentColor" />
    <path d="M10.0004 17.5158C6.86706 17.5158 3.90872 15.6824 1.87539 12.4991C0.992057 11.1241 0.992057 8.88242 1.87539 7.49909C3.91706 4.31576 6.87539 2.48242 10.0004 2.48242C13.1254 2.48242 16.0837 4.31576 18.1171 7.49909C19.0004 8.87409 19.0004 11.1158 18.1171 12.4991C16.0837 15.6824 13.1254 17.5158 10.0004 17.5158ZM10.0004 3.73242C7.30872 3.73242 4.73372 5.34909 2.93372 8.17409C2.30872 9.14909 2.30872 10.8491 2.93372 11.8241C4.73372 14.6491 7.30872 16.2658 10.0004 16.2658C12.6921 16.2658 15.2671 14.6491 17.0671 11.8241C17.6921 10.8491 17.6921 9.14909 17.0671 8.17409C15.2671 5.34909 12.6921 3.73242 10.0004 3.73242Z" fill="currentColor" />
    {isVisible && <path d="M3 3l14 14" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />}
  </svg>
);

export default PasswordPage;
