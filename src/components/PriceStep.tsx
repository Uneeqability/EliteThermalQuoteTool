import React from 'react';
import { FormStep } from './FormStep';
import { StepProps } from '../types';
import { DollarSign, Info, Calculator } from 'lucide-react';

export function PriceStep({ data, onNext, onBack }: StepProps) {
  const basePrice = data.squareFootage * 1.85;
  const pricePerSqFt = 1.85;

  return (
    <FormStep onBack={onBack}>
      <div className="text-center mb-8">
        <div className="inline-block p-3 bg-dark-lighter rounded-full mb-4">
          <DollarSign className="w-8 h-8 text-gold" />
        </div>
        <h2 className="text-3xl font-bold text-white mb-4">
          Your Estimated Price
        </h2>
      </div>

      <div className="bg-dark-lighter p-6 rounded-lg mb-8">
        <div className="space-y-6">
          <div className="flex flex-col gap-2">
            <div className="flex justify-between items-center text-gray-300">
              <span>Square Footage</span>
              <span>{data.squareFootage.toLocaleString()} sq ft</span>
            </div>
            <div className="flex justify-between items-center text-gray-300">
              <span>Price per sq ft</span>
              <span>${pricePerSqFt.toFixed(2)}</span>
            </div>
            <div className="flex justify-between items-center pt-3 border-t border-gold/20">
              <span className="text-white font-semibold">Base Price</span>
              <span className="text-gold text-xl font-bold">
                ${basePrice.toLocaleString(undefined, { maximumFractionDigits: 2 })}
              </span>
            </div>
          </div>
          
          <div className="flex items-center gap-2 bg-dark/50 p-3 rounded-lg">
            <Calculator className="w-5 h-5 text-gold" />
            <span className="text-sm text-gray-300">
              Base price includes standard R-38 insulation installation
            </span>
          </div>
        </div>
      </div>

      <div className="bg-dark-lighter border border-gold/20 rounded-lg p-4 mb-8">
        <div className="flex gap-3">
          <Info className="w-5 h-5 text-gold flex-shrink-0 mt-1" />
          <div className="text-sm text-gray-300">
            <p className="mb-2">
              This price may vary based on additional add-ons and variables that can affect the final cost.
            </p>
            <p>
              You may be eligible for federal or local tax incentives to help offset these costs.{' '}
              <a 
                href="https://www.energy.gov/energysaver/financing-and-incentives"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gold hover:underline"
              >
                Learn more about available incentives →
              </a>
            </p>
          </div>
        </div>
      </div>

      <button
        onClick={onNext}
        className="w-full bg-gradient-to-r from-gold-dark via-gold to-gold-light text-dark py-3 px-6 rounded-lg font-medium hover:opacity-90 transition-colors"
      >
        View Add-on Options
      </button>
    </FormStep>
  );
}