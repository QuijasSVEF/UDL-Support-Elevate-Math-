import React from 'react';
import { useForm } from 'react-hook-form';
import { User } from 'lucide-react';
import { FormField } from './forms/FormField';
import { Button } from './ui/Button';
import { cn } from '../utils/cn';

interface LoginFormData {
  username: string;
}

interface Props {
  onLogin: (username: string) => void;
}

export function TeacherLogin({ onLogin }: Props) {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting }
  } = useForm<LoginFormData>();

  return (
    <div className="min-h-screen flex items-center justify-center bg-svef-beige/30">
      <div className="max-w-md w-full bg-white rounded-lg shadow-lg p-8">
        <div className="flex flex-col items-center mb-8">
          <User className="w-12 h-12 text-svef-purple mb-4" />
          <h1 className="font-oswald text-2xl font-medium text-svef-gray">Welcome to UDL Support</h1>
          <p className="font-open-sans text-sm text-svef-brown mt-1">Enter your username to continue</p>
        </div>

        <form onSubmit={handleSubmit((data) => onLogin(data.username))} className="space-y-6">
          <FormField label="Username" error={errors.username?.message}>
            <input
              type="text"
              {...register('username', {
                required: 'Username is required',
                minLength: { value: 3, message: 'Username must be at least 3 characters' }
              })}
              className={cn(
                "mt-1 block w-full rounded-md border shadow-sm focus:ring-svef-green focus:border-svef-green",
                errors.username ? "border-red-300" : "border-gray-300"
              )}
            />
          </FormField>

          <Button type="submit" isLoading={isSubmitting}>
            Sign In
          </Button>
        </form>
      </div>
    </div>
  );
}