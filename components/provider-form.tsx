"use client";

import { FormEvent, useState } from 'react';

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';

const roles = [
  'contractor',
  'principal',
  'provider',
  'operations',
  'underwriter',
  'sales',
];

interface ProviderFormData {
  name: string;
  email: string;
  phoneNumber: string;
  role: string;
}

export default function ProviderForm() {
  const [formData, setFormData] = useState<ProviderFormData>({
    name: '',
    email: '',
    phoneNumber: '',
    role: '',
  });

  const [submitted, setSubmitted] = useState(false);

  const isFormValid =
    formData.name.trim() !== '' &&
    /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email) &&
    /^[6-9]\d{9}$/.test(formData.phoneNumber) &&
    roles.includes(formData.role);

  const handleChange = (
    field: keyof ProviderFormData,
    value: string,
  ): void => {
    setFormData((previous) => ({
      ...previous,
      [field]: value,
    }));

    setSubmitted(false);
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>): void => {
    event.preventDefault();

    if (!isFormValid) {
      return;
    }

    console.log('Provider created:', formData);
    setSubmitted(true);
  };

  return (
    <main className="min-h-screen bg-muted/40 px-4 py-10">
      <div className="mx-auto max-w-3xl rounded-lg border bg-background p-6 shadow-sm">
        <div className="mb-6">
          <h1 className="text-2xl font-semibold">Onboard Provider</h1>

          <p className="mt-1 text-sm text-muted-foreground">
            Enter the provider details to onboard a new provider.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid gap-6 md:grid-cols-2">
            <div className="space-y-2">
              <Label htmlFor="provider-name">Provider Name</Label>

              <Input
                id="provider-name"
                name="providerName"
                placeholder="Enter provider name"
                data-testid="provider-name-input"
                value={formData.name}
                onChange={(e) => handleChange('name', e.target.value)}
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="provider-email">Provider Email</Label>

              <Input
                id="provider-email"
                name="providerEmail"
                placeholder="Enter provider email"
                data-testid="provider-email-input"
                value={formData.email}
                onChange={(e) => handleChange('email', e.target.value)}
              />
            </div>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            <div className="space-y-2">
              <Label htmlFor="provider-phone">Provider Phone Number</Label>

              <Input
                id="provider-phone"
                name="providerPhone"
                placeholder="Enter provider phone number"
                data-testid="provider-phone-input"
                value={formData.phoneNumber}
                onChange={(e) =>
                  handleChange('phoneNumber', e.target.value)
                }
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="provider-role">Provider Role</Label>

              <Input
                id="provider-role"
                name="providerRole"
                placeholder="Enter provider role"
                data-testid="provider-role-input"
                value={formData.role}
                onChange={(e) => handleChange('role', e.target.value)}
              />
            </div>
          </div>

          <Button
            type="submit"
            disabled={!isFormValid}
            data-testid="submit-button"
          >
            Submit
          </Button>

          {submitted && (
            <p className="mt-4 text-green-600">
              Provider created successfully!
            </p>
          )}
        </form>
      </div>
    </main>
  );
}