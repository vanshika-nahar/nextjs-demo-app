'use client';

import { FormEvent, useState } from 'react';

const roles = [
  'contractor',
  'principal',
  'provider',
  'operations',
  'underwriter',
  'sales',
];

interface UserFormData {
  name: string;
  email: string;
  phoneNumber: string;
  role: string;
}

export default function UserPage() {
  const [formData, setFormData] = useState<UserFormData>({
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
    field: keyof UserFormData,
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

    console.log('User created:', formData);
    setSubmitted(true);
  };

  return (
    <main className="min-h-screen bg-gray-50 px-6 py-10">
      <div className="mx-auto max-w-2xl rounded-lg bg-white p-8 shadow">
        <h1 className="mb-6 text-2xl font-bold">
          Add User
        </h1>

        <form onSubmit={handleSubmit} className="space-y-5">
          <div>
            <label
              htmlFor="name"
              className="mb-2 block font-medium"
            >
              Name
            </label>

            <input
              id="name"
              data-testid="user-name-input"
              type="text"
              value={formData.name}
              onChange={(event) =>
                handleChange('name', event.target.value)
              }
              className="w-full rounded border px-3 py-2"
              placeholder="Enter name"
            />
          </div>

          <div>
            <label
              htmlFor="email"
              className="mb-2 block font-medium"
            >
              Email
            </label>

            <input
              id="email"
              data-testid="user-email-input"
              type="email"
              value={formData.email}
              onChange={(event) =>
                handleChange('email', event.target.value)
              }
              className="w-full rounded border px-3 py-2"
              placeholder="Enter email"
            />
          </div>

          <div>
            <label
              htmlFor="phone"
              className="mb-2 block font-medium"
            >
              Phone Number
            </label>

            <input
              id="phone"
              data-testid="user-phone-input"
              type="tel"
              value={formData.phoneNumber}
              onChange={(event) =>
                handleChange('phoneNumber', event.target.value)
              }
              className="w-full rounded border px-3 py-2"
              placeholder="Enter phone number"
            />
          </div>

          <div>
            <label
              htmlFor="role"
              className="mb-2 block font-medium"
            >
              Role
            </label>

            <select
              id="role"
              data-testid="user-role-select"
              value={formData.role}
              onChange={(event) =>
                handleChange('role', event.target.value)
              }
              className="w-full rounded border px-3 py-2"
            >
              <option value="">Select role</option>

              {roles.map((role) => (
                <option key={role} value={role}>
                  {role}
                </option>
              ))}
            </select>
          </div>

          <button
            type="submit"
            data-testid="user-submit-button"
            disabled={!isFormValid}
            className="rounded bg-black px-5 py-2 text-white disabled:cursor-not-allowed disabled:opacity-50"
          >
            Create User
          </button>

          {submitted && (
            <p
              data-testid="user-success-message"
              className="font-medium text-green-600"
            >
              User created successfully.
            </p>
          )}
        </form>
      </div>
    </main>
  );
}
