import React, { useState } from 'react';
import { FormStep } from './FormStep';
import { StepProps } from '../types';
import { Search, Loader2 } from 'lucide-react';
import { validateAddress } from '../services/address';

export function AddressStep({ data, onUpdate, onNext }: StepProps) {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    
    try {
      const propertyDetails = await validateAddress(data.address);
      onUpdate({ 
        squareFootage: propertyDetails.squareFootage,
        address: propertyDetails.address 
      });
      onNext();
    } catch (err) {
      setError('Unable to validate address. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <FormStep>
      <h2 className="text-4xl font-bold mb-6 gold-gradient">
        Let's Get Started
      </h2>
      <p className="text-gray-400 mb-8">
        Enter your address to get an accurate quote for your insulation needs.
      </p>

      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label 
            htmlFor="address" 
            className="block text-sm font-medium text-gray-300 mb-2"
          >
            Property Address
          </label>
          <div className="relative">
            <input
              type="text"
              id="address"
              value={data.address}
              onChange={(e) => onUpdate({ address: e.target.value })}
              className="w-full px-4 py-3 rounded-lg input-dark focus:ring-2 focus:ring-gold-light focus:border-transparent transition-all duration-300"
              placeholder="Enter your full address"
              required
            />
            {loading ? (
              <Loader2 className="absolute right-3 top-3 text-gray-500 animate-spin" size={20} />
            ) : (
              <Search className="absolute right-3 top-3 text-gray-500" size={20} />
            )}
          </div>
        </div>

        {error && (
          <p className="text-red-400 text-sm">{error}</p>
        )}

        <button
          type="submit"
          disabled={loading || !data.address}
          className="w-full bg-gradient-to-r from-gold-dark via-gold to-gold-light text-dark py-3 px-6 rounded-lg font-medium hover:opacity-90 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-300"
        >
          {loading ? 'Validating Address...' : 'Continue'}
        </button>
      </form>
    </FormStep>
  );
}