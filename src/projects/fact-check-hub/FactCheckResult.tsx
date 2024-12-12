import React from 'react';
import { CheckCircle, XCircle } from 'lucide-react';

interface FactCheckResultProps {
  result: string;
}

export const FactCheckResult: React.FC<FactCheckResultProps> = ({ result }) => {
  const isVerified = !result.includes("false");

  return (
    <div className={`p-4 mt-4 rounded-lg ${
      isVerified ? 'bg-green-50 border border-green-200' : 'bg-red-50 border border-red-200'
    }`}>
      <div className="flex items-center gap-2 mb-2">
        {isVerified ? (
          <CheckCircle className="w-5 h-5 text-green-600" />
        ) : (
          <XCircle className="w-5 h-5 text-red-600" />
        )}
        <h3 className={`font-medium ${
          isVerified ? 'text-green-600' : 'text-red-600'
        }`}>
          {isVerified ? 'Statement Verified' : 'Statement Incorrect'}
        </h3>
      </div>
      
      <p className="ml-7 text-gray-600">
        {result}
      </p>
    </div>
  );
};