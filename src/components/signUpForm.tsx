"use client";
import { SignUp } from "@/actions/signUp";
import { useActionState } from "react";
export function SignupForm() {
  const [state, action] = useActionState(SignUp, undefined);
  return (
    <form
      action={action}
      className="max-w-md mx-auto bg-white p-6 rounded-lg shadow-md space-y-4"
    >
      <div className="space-y-1">
        <label
          htmlFor="name"
          className="block text-sm font-medium text-gray-700"
        >
          Name
        </label>
        <input
          id="name"
          name="name"
          placeholder="Your Name"
          className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
        />
        {state?.errors.name && (
          <span className="text-sm text-red-500">{state?.errors.name}</span>
        )}
      </div>
      <div className="space-y-1">
        <label
          htmlFor="email"
          className="block text-sm font-medium text-gray-700"
        >
          Email
        </label>
        <input
          id="email"
          name="email"
          type="text"
          placeholder="Your Email"
          className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
        />
        {state?.errors.email && (
          <span className="text-sm text-red-500">{state?.errors.email}</span>
        )}
      </div>
      <div className="space-y-1">
        <label
          htmlFor="password"
          className="block text-sm font-medium text-gray-700"
        >
          Password
        </label>
        <input
          id="password"
          name="password"
          type="password"
          placeholder="Your Password"
          className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
        />
        {state?.errors.password && (
          <span className="text-sm text-red-500">{state?.errors.password}</span>
        )}
      </div>
      <button
        type="submit"
        className="w-full bg-blue-500 text-white font-medium py-2 px-4 rounded-md shadow-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2"
      >
        Sign Up
      </button>
    </form>
  );
}
