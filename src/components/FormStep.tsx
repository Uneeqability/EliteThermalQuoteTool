import React from 'react';

interface Props {
  children: React.ReactNode;
  onBack?: () => void;
}

export function FormStep({ children, onBack }: Props) {
  return (
    <div className="w-full max-w-2xl mx-auto form-card rounded-2xl shadow-2xl p-8 transition-all">
      {onBack && (
        <button
          onClick={onBack}
          className="mb-6 text-gray-400 hover:text-gold-light flex items-center gap-2 transition-colors duration-300"
        >
          ← Back
        </button>
      )}
      {children}
    </div>
  );
}