'use client';

import { useState } from 'react';

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';

export default function CompanyPage() {
  const [date, setDate] = useState('');

  return (
    <main className="min-h-screen bg-muted/40 px-4 py-10">
      <div className="mx-auto max-w-3xl rounded-lg border bg-background p-6 shadow-sm">
        <div className="mb-6">
          <h1 className="text-2xl font-semibold">Onboard Company</h1>

          <p className="mt-1 text-sm text-muted-foreground">
            Enter the company details to onboard a new company.
          </p>
        </div>

        <form className="space-y-6">
          <div className="grid gap-6 md:grid-cols-2">
            <div className="space-y-2">
              <Label htmlFor="company-name">
                Company Name
              </Label>

              <Input
                id="company-name"
                name="companyName"
                placeholder="Enter company name"
                data-testid="company-name-input"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="diminutive-name">
                Diminutive Name
              </Label>

              <Input
                id="diminutive-name"
                name="diminutiveName"
                placeholder="Enter diminutive name"
                data-testid="diminutive-name-input"
              />
            </div>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            <div className="space-y-2">
              <Label htmlFor="cin">
                CIN
              </Label>

              <Input
                id="cin"
                name="cin"
                placeholder="Enter CIN"
                data-testid="cin-input"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="pan">
                PAN
              </Label>

              <Input
                id="pan"
                name="pan"
                placeholder="Enter PAN"
                data-testid="pan-input"
              />
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="address">
              Address
            </Label>

            <textarea
              id="address"
              name="address"
              placeholder="Enter company address"
              rows={4}
              className="flex min-h-[80px] w-full rounded-lg border border-input bg-transparent px-2.5 py-2 text-sm outline-none transition-colors placeholder:text-muted-foreground focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 disabled:cursor-not-allowed disabled:opacity-50 dark:bg-input/30"
              data-testid="address-input"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="date">
              Date
            </Label>

            <Input
              id="date"
              name="date"
              type="date"
              value={date}
              onChange={(event) => setDate(event.target.value)}
              data-testid="date-input"
            />
          </div>

          <div className="flex justify-end gap-3 border-t pt-6">
            <Button
              type="button"
              variant="outline"
              data-testid="cancel-button"
            >
              Cancel
            </Button>

            <Button
              type="submit"
              data-testid="submit-button"
            >
              Submit
            </Button>
          </div>
        </form>
      </div>
    </main>
  );
}