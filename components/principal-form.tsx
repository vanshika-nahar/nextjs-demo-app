'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';

type PrincipalFormData = {
  principalName: string;
  shortName: string;
  pan: string;
  gstin: string;
  address: string;
  contactPerson: string;
  email: string;
  phone: string;
};

type PrincipalFormErrors = Partial<
  Record<keyof PrincipalFormData, string>
>;

const initialFormData: PrincipalFormData = {
  principalName: '',
  shortName: '',
  pan: '',
  gstin: '',
  address: '',
  contactPerson: '',
  email: '',
  phone: '',
};

const validatePan = (pan: string): boolean => {
  return /^[A-Z]{5}[0-9]{4}[A-Z]$/.test(pan);
};

const validateGstin = (gstin: string): boolean => {
  return /^\d{2}[A-Z]{5}\d{4}[A-Z][A-Z\d]Z[A-Z\d]$/.test(gstin);
};

const validateEmail = (email: string): boolean => {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
};

const validatePhone = (phone: string): boolean => {
  return /^[6-9]\d{9}$/.test(phone);
};

export default function PrincipalForm() {
  const [formData, setFormData] =
    useState<PrincipalFormData>(initialFormData);

  const [errors, setErrors] = useState<PrincipalFormErrors>({});

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (
    field: keyof PrincipalFormData,
    value: string,
  ) => {
    setFormData((previous) => ({
      ...previous,
      [field]: value,
    }));

    setErrors((previous) => ({
      ...previous,
      [field]: undefined,
    }));

    setSubmitted(false);
  };

  const validateForm = (): PrincipalFormErrors => {
    const validationErrors: PrincipalFormErrors = {};

    if (!formData.principalName.trim()) {
      validationErrors.principalName = 'Principal name is required';
    }

    if (!formData.shortName.trim()) {
      validationErrors.shortName = 'Short name is required';
    }

    if (!formData.pan.trim()) {
      validationErrors.pan = 'PAN is required';
    } else if (!validatePan(formData.pan.toUpperCase())) {
      validationErrors.pan = 'Enter a valid PAN';
    }

    if (
      formData.gstin.trim() &&
      !validateGstin(formData.gstin.toUpperCase())
    ) {
      validationErrors.gstin = 'Enter a valid GSTIN';
    }

    if (!formData.address.trim()) {
      validationErrors.address = 'Address is required';
    }

    if (!formData.contactPerson.trim()) {
      validationErrors.contactPerson = 'Contact person is required';
    }

    if (!formData.email.trim()) {
      validationErrors.email = 'Email is required';
    } else if (!validateEmail(formData.email)) {
      validationErrors.email = 'Enter a valid email address';
    }

    if (!formData.phone.trim()) {
      validationErrors.phone = 'Phone number is required';
    } else if (!validatePhone(formData.phone)) {
      validationErrors.phone = 'Enter a valid 10-digit phone number';
    }

    return validationErrors;
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const validationErrors = validateForm();

    setErrors(validationErrors);

    if (Object.keys(validationErrors).length > 0) {
      setSubmitted(false);
      return;
    }

    console.log('Principal created:', formData);
    setSubmitted(true);
  };

  const handleCancel = () => {
    setFormData(initialFormData);
    setErrors({});
    setSubmitted(false);
  };

  const hasErrors = Object.values(errors).some(
    (error) => Boolean(error),
  );
  const isFormValid =
    formData.principalName.trim() !== '' &&
    formData.shortName.trim() !== '' &&
    formData.pan.trim() !== '' &&
    validatePan(formData.pan.toUpperCase()) &&
    formData.address.trim() !== '' &&
    formData.contactPerson.trim() !== '' &&
    formData.email.trim() !== '' &&
    validateEmail(formData.email) &&
    formData.phone.trim() !== '' &&
    validatePhone(formData.phone) &&
    (!formData.gstin.trim() ||
      validateGstin(formData.gstin.toUpperCase())) &&
    !hasErrors;

  return (
    <Card className="mx-auto w-full max-w-2xl">
      <CardHeader>
        <CardTitle style={{
          'fontSize': '20px',
          'fontWeight': 'bold',
        }}>Add Principal / Tender Issuing Authority</CardTitle>
      </CardHeader>

      <div style={{
        height: '1px',
        backgroundColor: '#e5e7eb',
        margin: '0 1rem',
      }} />

      <CardContent>
        <form
          onSubmit={handleSubmit}
          className="space-y-5"
          noValidate
        >
          <div className="space-y-2">
            <Label htmlFor="principal-name">
              Principal Name <span className="text-destructive">*</span>
            </Label>

            <Input
              id="principal-name"
              data-testid="principal-name-input"
              value={formData.principalName}
              onChange={(event) =>
                handleChange('principalName', event.target.value)
              }
              placeholder="Enter principal name"
              aria-invalid={Boolean(errors.principalName)}
            />

            {errors.principalName && (
              <p className="text-sm text-destructive">
                {errors.principalName}
              </p>
            )}
          </div>

          <div className="space-y-2">
            <Label htmlFor="principal-short-name">
              Short Name <span className="text-destructive">*</span>
            </Label>

            <Input
              id="principal-short-name"
              data-testid="principal-short-name-input"
              value={formData.shortName}
              onChange={(event) =>
                handleChange('shortName', event.target.value)
              }
              placeholder="Enter short name"
              aria-invalid={Boolean(errors.shortName)}
            />

            {errors.shortName && (
              <p className="text-sm text-destructive">
                {errors.shortName}
              </p>
            )}
          </div>

          <div className="space-y-2">
            <Label htmlFor="principal-pan">
              PAN <span className="text-destructive">*</span>
            </Label>

            <Input
              id="principal-pan"
              data-testid="principal-pan-input"
              value={formData.pan}
              onChange={(event) =>
                handleChange(
                  'pan',
                  event.target.value.toUpperCase(),
                )
              }
              placeholder="ABCDE1234F"
              maxLength={10}
              aria-invalid={Boolean(errors.pan)}
            />

            {errors.pan && (
              <p className="text-sm text-destructive">
                {errors.pan}
              </p>
            )}
          </div>

          <div className="space-y-2">
            <Label htmlFor="principal-gstin">GSTIN</Label>

            <Input
              id="principal-gstin"
              data-testid="principal-gstin-input"
              value={formData.gstin}
              onChange={(event) =>
                handleChange(
                  'gstin',
                  event.target.value.toUpperCase(),
                )
              }
              placeholder="27ABCDE1234F1Z5"
              maxLength={15}
              aria-invalid={Boolean(errors.gstin)}
            />

            {errors.gstin && (
              <p className="text-sm text-destructive">
                {errors.gstin}
              </p>
            )}
          </div>

          <div className="space-y-2">
            <Label htmlFor="principal-address">
              Address <span className="text-destructive">*</span>
            </Label>

            <Input
              id="principal-address"
              data-testid="principal-address-input"
              value={formData.address}
              onChange={(event) =>
                handleChange('address', event.target.value)
              }
              placeholder="Enter address"
              aria-invalid={Boolean(errors.address)}
            />

            {errors.address && (
              <p className="text-sm text-destructive">
                {errors.address}
              </p>
            )}
          </div>

          <div className="space-y-2">
            <Label htmlFor="principal-contact-person">
              Contact Person <span className="text-destructive">*</span>
            </Label>

            <Input
              id="principal-contact-person"
              data-testid="principal-contact-person-input"
              value={formData.contactPerson}
              onChange={(event) =>
                handleChange(
                  'contactPerson',
                  event.target.value,
                )
              }
              placeholder="Enter contact person"
              aria-invalid={Boolean(errors.contactPerson)}
            />

            {errors.contactPerson && (
              <p className="text-sm text-destructive">
                {errors.contactPerson}
              </p>
            )}
          </div>

          <div className="space-y-2">
            <Label htmlFor="principal-email">
              Email <span className="text-destructive">*</span>
            </Label>

            <Input
              id="principal-email"
              data-testid="principal-email-input"
              type="email"
              value={formData.email}
              onChange={(event) =>
                handleChange('email', event.target.value)
              }
              placeholder="contact@example.com"
              aria-invalid={Boolean(errors.email)}
            />

            {errors.email && (
              <p className="text-sm text-destructive">
                {errors.email}
              </p>
            )}
          </div>

          <div className="space-y-2">
            <Label htmlFor="principal-phone">
              Phone Number <span className="text-destructive">*</span>
            </Label>

            <Input
              id="principal-phone"
              data-testid="principal-phone-input"
              type="tel"
              value={formData.phone}
              onChange={(event) =>
                handleChange(
                  'phone',
                  event.target.value.replace(/\D/g, ''),
                )
              }
              placeholder="9876543210"
              maxLength={10}
              aria-invalid={Boolean(errors.phone)}
            />

            {errors.phone && (
              <p className="text-sm text-destructive">
                {errors.phone}
              </p>
            )}
          </div>

          {submitted && (
            <p
              data-testid="principal-success-message"
              className="text-sm text-green-600"
            >
              Principal created successfully.
            </p>
          )}

          <div className="flex justify-end gap-3 pt-2">
            <Button
              type="button"
              variant="outline"
              data-testid="principal-cancel-button"
              onClick={handleCancel}
            >
              Cancel
            </Button>

            <Button
              type="submit"
              data-testid="principal-submit-button"
              disabled={!isFormValid}
            >
              Submit
            </Button>
          </div>
        </form>
      </CardContent>
    </Card>
  );
}