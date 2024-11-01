import React from 'react';
import { FormStep } from './FormStep';
import { StepProps } from '../types';

export function RoofTypeStep({ data, onUpdate, onNext, onBack }: StepProps) {
  const handleSelection = (type: string) => {
    onUpdate({ roofType: type });
    onNext();
  };

  return (
    <FormStep onBack={onBack}>
      <h2 className="text-4xl font-bold mb-6 gold-gradient">
        Select Your Roof Type
      </h2>
      
      <div className="mb-8">
        <img
          src="https://chooseelite.com/wp-content/uploads/2024/10/roof-renderings-choice.png"
          alt="Roof Types"
          className="w-full rounded-lg shadow-md"
        />
      </div>

      <div className="space-y-4">
        <p className="text-gray-400 mb-4">
          Please select the letter that best matches your roof type:
        </p>
        
        {['A', 'B', 'C', 'D', 'E', 'F'].map((letter) => (
          <button
            key={letter}
            onClick={() => handleSelection(letter)}
            className="w-full bg-dark-lighter text-white py-3 px-6 rounded-lg font-medium hover:bg-dark border border-gold/20 hover:border-gold transition-all duration-300 flex items-center justify-between"
          >
            <span>Type {letter}</span>
            <span className="text-gold">→</span>
          </button>
        ))}
      </div>
    </FormStep>
  );
}