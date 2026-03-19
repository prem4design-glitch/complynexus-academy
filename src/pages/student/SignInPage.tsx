import React, { useState } from 'react';
import { FormLayout } from '../../components/FormLayout';
import { Button } from '../../components/Button';
import { Input } from '../../components/Input';
import { Link, useNavigate } from 'react-router-dom';

const SignInPage: React.FC = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');

  const handleSignIn = () => {
    if (email === 'admin@gmail.com') {
      navigate('/signin/institution-discovery');
    } else {
      navigate('/signin/password');
    }
  };
  return (
    <div className="min-h-screen bg-(--bg-page) flex flex-col items-center justify-center p-6 lg:p-12">
      <FormLayout
        heading="Sign in to ComplyNexus Academy"
        subheading="Enter your work or personal email to get started"
      >
        <div className="flex flex-col w-full gap-(--gap-24)">
          <div className="flex flex-col w-full gap-(--gap-18)">
            <Input
              label="Email address"
              type="email"
              placeholder="you@example.com"
              required
              hint="Enter your work or personal email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
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
                Don't have an account?{' '}
                <Link to="/signup" className="text-(--primary) font-(--weight-semibold) hover:underline">
                  Sign up
                </Link>
              </p>
            </div>
          </div>
        </div>
      </FormLayout >
    </div >
  );
};

export default SignInPage;
