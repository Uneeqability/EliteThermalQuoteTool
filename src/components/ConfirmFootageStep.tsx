import React, { useState } from 'react';
import { FormStep } from './FormStep';
import { StepProps } from '../types';
import { Home, Edit3, Calendar, Building2 } from 'lucide-react';

export function ConfirmFootageStep({ data, onUpdate, onNext, onBack }: StepProps) {
  const [isEditing, setIsEditing] = useState(false);
  const [manualFootage, setManualFootage] = useState(data.squareFootage.toString());

  const handleManualSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const footage = parseInt(manualFootage, 10);
    if (footage > 0) {
      onUpdate({ squareFootage: footage });
      onNext();
    }
  };

  if (isEditing) {
    return (
      <FormStep onBack={onBack}>
        <h2 className="text-4xl font-bold mb-6 gold-gradient">
          Enter Square Footage
        </h2>
        <p className="text-gray-400 mb-8">
          Please enter your home's correct square footage:
        </p>

        <form onSubmit={handleManualSubmit} className="space-y-6">
          <div>
            <label htmlFor="footage" className="block text-sm font-medium text-gray-300 mb-2">
              Square Footage
            </label>
            <div className="relative">
              <input
                type="number"
                id="footage"
                value={manualFootage}
                onChange={(e) => setManualFootage(e.target.value)}
                className="w-full px-4 py-3 rounded-lg input-dark focus:ring-2 focus:ring-gold-light focus:border-transparent transition-all duration-300"
                placeholder="Enter square footage"
                min="1"
                required
              />
              <Edit3 className="absolute right-3 top-3 text-gray-500" size={20} />
            </div>
          </div>

          <button
            type="submit"
            className="w-full bg-gradient-to-r from-gold-dark via-gold to-gold-light text-dark py-3 px-6 rounded-lg font-medium hover:opacity-90 transition-all duration-300"
          >
            Continue
          </button>
        </form>
      </FormStep>
    );
  }

  return (
    <FormStep onBack={onBack}>
      <h2 className="text-4xl font-bold mb-6 gold-gradient">
        Confirm Your Home's Details
      </h2>
      <p className="text-gray-400 mb-8">
        We found the following information for your property:
      </p>

      <div className="bg-dark-lighter p-8 rounded-xl mb-8 space-y-8">
        <div className="text-center">
          <Home className="w-12 h-12 text-gold mx-auto mb-4" />
          <p className="text-gray-400 mb-2">Square Footage</p>
          <p className="text-4xl font-bold text-white">
            {data.squareFootage.toLocaleString()} sq ft
          </p>
        </div>

        {data.propertyType && (
          <div className="text-center">
            <Building2 className="w-12 h-12 text-gold mx-auto mb-4" />
            <p className="text-gray-400 mb-2">Property Type</p>
            <p className="text-2xl font-bold text-white">
              {data.propertyType}
            </p>
          </div>
        )}

        {data.yearBuilt && (
          <div className="text-center">
            <Calendar className="w-12 h-12 text-gold mx-auto mb-4" />
            <p className="text-gray-400 mb-2">Year Built</p>
            <p className="text-2xl font-bold text-white">
              {data.yearBuilt}
            </p>
          </div>
        )}
      </div>

      <div className="space-y-4">
        <button
          onClick={() => onNext()}
          className="w-full bg-gradient-to-r from-gold-dark via-gold to-gold-light text-dark py-3 px-6 rounded-lg font-medium hover:opacity-90 transition-all duration-300"
        >
          Confirm Square Footage
        </button>
        <button
          onClick={() => setIsEditing(true)}
          className="w-full bg-dark-lighter text-white py-3 px-6 rounded-lg font-medium hover:bg-dark transition-all duration-300"
        >
          This Information is Incorrect
        </button>
      </div>
    </FormStep>
  );
}