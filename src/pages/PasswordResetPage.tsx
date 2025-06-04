import React from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';

import AppLogo from '@/components/AppLogo';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { toast } from "@/components/ui/use-toast";

const passwordResetSchema = z.object({
  newPassword: z.string().min(8, { message: "Password must be at least 8 characters." }),
  confirmPassword: z.string(),
}).refine(data => data.newPassword === data.confirmPassword, {
  message: "Passwords don't match",
  path: ["confirmPassword"],
});

type PasswordResetFormValues = z.infer<typeof passwordResetSchema>;

const PasswordResetPage = () => {
  console.log('PasswordResetPage loaded');
  const navigate = useNavigate();
  const { token } = useParams<{ token?: string }>(); // Example: if token is in URL

  React.useEffect(() => {
    if (token) {
        console.log("Password reset token:", token);
        // Here you would typically validate the token with your backend
        toast({ title: "Token Found", description: "Please enter your new password."});
    } else {
        // toast({ title: "Invalid Link", description: "Password reset token not found or invalid.", variant: "destructive"});
        // navigate("/login"); // Or to a specific error page
    }
  }, [token, navigate]);


  const form = useForm<PasswordResetFormValues>({
    resolver: zodResolver(passwordResetSchema),
    defaultValues: {
      newPassword: "",
      confirmPassword: "",
    },
  });

  const onSubmit = (data: PasswordResetFormValues) => {
    console.log('Password reset attempt with new password.');
    // Simulate API call to reset password
    toast({
      title: "Password Reset Successful!",
      description: "Your password has been updated. Please login with your new password.",
    });
    navigate('/login');
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 dark:bg-gray-900 p-4">
      <div className="mb-8">
        <AppLogo size="large" />
      </div>
      <Card className="w-full max-w-md">
        <CardHeader className="text-center">
          <CardTitle className="text-2xl">Reset Your Password</CardTitle>
          <CardDescription>Enter and confirm your new password below.</CardDescription>
        </CardHeader>
        <CardContent>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
              <FormField
                control={form.control}
                name="newPassword"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>New Password</FormLabel>
                    <FormControl>
                      <Input type="password" placeholder="••••••••" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="confirmPassword"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Confirm New Password</FormLabel>
                    <FormControl>
                      <Input type="password" placeholder="••••••••" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <Button type="submit" className="w-full" disabled={form.formState.isSubmitting}>
                {form.formState.isSubmitting ? 'Resetting...' : 'Reset Password'}
              </Button>
            </form>
          </Form>
        </CardContent>
        <CardFooter className="flex justify-center">
          <Link to="/login">
            <Button variant="link">Back to Login</Button>
          </Link>
        </CardFooter>
      </Card>
    </div>
  );
};

export default PasswordResetPage;