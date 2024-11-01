import React from 'react';
import { FormStep } from './FormStep';
import { CheckCircle } from 'lucide-react';

export function ThankYouStep() {
  return (
    <FormStep>
      <div className="text-center">
        <div className="inline-block p-3 bg-dark-lighter rounded-full mb-4">
          <CheckCircle className="w-8 h-8 text-gold" />
        </div>
        <h2 className="text-3xl font-bold text-white mb-4">
          Thank You!
        </h2>
        <p className="text-gray-300 mb-8">
          Thank you for considering Elite Thermal for your insulation needs. A member of our team will be in touch shortly to schedule your installation.
        </p>
        <p className="text-sm text-gray-400">
          Your quote has been sent to your email address.
        </p>
      </div>
    </FormStep>
  );
}