import React, { useState } from 'react';
import { FormStep } from './FormStep';
import { StepProps } from '../types';
import { Send } from 'lucide-react';

export function ContactStep({ data, onUpdate, onNext, onBack }: StepProps) {
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    onNext();
  };

  return (
    <FormStep onBack={onBack}>
      <h2 className="text-3xl font-bold text-white mb-6">
        Save Your Quote
      </h2>
      <p className="text-gray-300 mb-8">
        Enter your contact information to receive your personalized quote and have a team member reach out to schedule your installation.
      </p>

      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label htmlFor="firstName" className="block text-sm font-medium text-gray-300 mb-2">
              First Name
            </label>
            <input
              type="text"
              id="firstName"
              value={data.contact.firstName}
              onChange={(e) => onUpdate({ contact: { ...data.contact, firstName: e.target.value } })}
              className="w-full px-4 py-3 rounded-lg input-dark focus:ring-2 focus:ring-gold-light focus:border-transparent"
              required
            />
          </div>
          <div>
            <label htmlFor="lastName" className="block text-sm font-medium text-gray-300 mb-2">
              Last Name
            </label>
            <input
              type="text"
              id="lastName"
              value={data.contact.lastName}
              onChange={(e) => onUpdate({ contact: { ...data.contact, lastName: e.target.value } })}
              className="w-full px-4 py-3 rounded-lg input-dark focus:ring-2 focus:ring-gold-light focus:border-transparent"
              required
            />
          </div>
        </div>

        <div>
          <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
            Email Address
          </label>
          <input
            type="email"
            id="email"
            value={data.contact.email}
            onChange={(e) => onUpdate({ contact: { ...data.contact, email: e.target.value } })}
            className="w-full px-4 py-3 rounded-lg input-dark focus:ring-2 focus:ring-gold-light focus:border-transparent"
            required
          />
        </div>

        <div>
          <label htmlFor="phone" className="block text-sm font-medium text-gray-300 mb-2">
            Phone Number
          </label>
          <input
            type="tel"
            id="phone"
            value={data.contact.phone}
            onChange={(e) => onUpdate({ contact: { ...data.contact, phone: e.target.value } })}
            className="w-full px-4 py-3 rounded-lg input-dark focus:ring-2 focus:ring-gold-light focus:border-transparent"
            required
          />
        </div>

        <button
          type="submit"
          disabled={loading}
          className="w-full bg-gradient-to-r from-gold-dark via-gold to-gold-light text-dark py-3 px-6 rounded-lg font-medium hover:opacity-90 disabled:opacity-50 disabled:cursor-not-allowed transition-colors flex items-center justify-center gap-2"
        >
          {loading ? (
            'Sending...'
          ) : (
            <>
              <Send className="w-5 h-5" />
              Send Quote
            </>
          )}
        </button>
      </form>
    </FormStep>
  );
}