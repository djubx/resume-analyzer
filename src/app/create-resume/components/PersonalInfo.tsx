'use client';

import { StepProps } from '../types';

export default function PersonalInfo({ data, onUpdate }: StepProps) {
  return (
    <div className="space-y-6">
      <h2 className="text-xl font-semibold mb-4">Personal Information</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <input
          type="text"
          placeholder="Full Name"
          value={data.contactInformation.fullName}
          onChange={(e) => onUpdate('contactInformation', 'fullName', e.target.value)}
          className="w-full p-2 border rounded-md"
        />
        <input
          type="email"
          placeholder="Email"
          value={data.contactInformation.email}
          onChange={(e) => onUpdate('contactInformation', 'email', e.target.value)}
          className="w-full p-2 border rounded-md"
        />
        <input
          type="tel"
          placeholder="Phone Number"
          value={data.contactInformation.phoneNumber}
          onChange={(e) => onUpdate('contactInformation', 'phoneNumber', e.target.value)}
          className="w-full p-2 border rounded-md"
        />
        <input
          type="text"
          placeholder="Location"
          value={data.contactInformation.location}
          onChange={(e) => onUpdate('contactInformation', 'location', e.target.value)}
          className="w-full p-2 border rounded-md"
        />
      </div>
    </div>
  );
} 