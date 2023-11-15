import React from 'react';
import SignUpForm from './form/sign-up-form';

const SignUpPage: React.FC = () => {
    return (
        <div className="signup-page relative min-h-screen flex justify-center items-start">
            <img
                src="https://iwa-network.org/wp-content/uploads/2019/07/everglades-73423_1920-1024x683.jpg"
                alt="Background Image"
                className="absolute inset-0 w-full h-full object-cover z-0"
            />
            <div className="relative z-10 max-w-8xl w-full px-4">
                <SignUpForm />
            </div>
        </div>
    );
};

export default SignUpPage;
