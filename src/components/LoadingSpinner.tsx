import React from 'react';
import { Sun } from 'lucide-react';

const LoadingSpinner: React.FC = () => {
    return (
        <div className="flex items-center justify-center min-h-[50vh] w-full">
            <div className="relative">
                <Sun className="w-12 h-12 text-gold animate-spin-slow" />
                <div className="absolute inset-0 blur-md bg-gold/20 rounded-full animate-pulse"></div>
            </div>
        </div>
    );
};

export default LoadingSpinner;
