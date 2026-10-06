import React, { useState } from "react";
import { Eye, EyeOff } from "lucide-react";

interface LoginFormValues {
  email: string;
  password: string;
  rememberMe: boolean;
}

interface LoginPageProps {
  onLogin?: (values: LoginFormValues) => void;
  onGoogleLogin?: () => void;
  onForgotPassword?: () => void;
  onSignUp?: () => void;
}

const GoogleIcon: React.FC = () => (
  <svg className="h-4 w-4" viewBox="0 0 48 48">
    <path
      fill="#FFC107"
      d="M43.6 20.5H42V20H24v8h11.3c-1.6 4.6-6 8-11.3 8-6.6 0-12-5.4-12-12s5.4-12 12-12c3.1 0 5.8 1.1 8 3l6-6C34.5 5.1 29.5 3 24 3 12.4 3 3 12.4 3 24s9.4 21 21 21 21-9.4 21-21c0-1.4-.1-2.7-.4-3.5z"
    />
    <path
      fill="#FF3D00"
      d="M6.3 14.7l6.6 4.8C14.6 15.5 18.9 13 24 13c3.1 0 5.8 1.1 8 3l6-6C34.5 5.1 29.5 3 24 3 16.3 3 9.7 7.3 6.3 14.7z"
    />
    <path
      fill="#4CAF50"
      d="M24 45c5.4 0 10.3-2.1 14-5.5l-6.5-5.3C29.5 36 26.9 37 24 37c-5.3 0-9.7-3.4-11.3-8l-6.6 5.1C9.6 40.5 16.2 45 24 45z"
    />
    <path
      fill="#1976D2"
      d="M43.6 20.5H42V20H24v8h11.3c-.8 2.3-2.2 4.3-4.1 5.7l6.5 5.3C41.2 36 44 30.5 44 24c0-1.4-.1-2.7-.4-3.5z"
    />
  </svg>
);

export const LoginPage: React.FC<LoginPageProps> = ({
  onLogin,
  onGoogleLogin,
  onForgotPassword,
  onSignUp,
}) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(true);
  const [showPassword, setShowPassword] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onLogin?.({ email, password, rememberMe });
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-sky-50 p-4">
      <div className="w-full max-w-sm rounded-2xl bg-white p-8 shadow-sm">
        <h1 className="mb-6 text-center text-xl font-semibold text-gray-900">
          Login To Your Account
        </h1>

        <form onSubmit={handleSubmit} className="space-y-4">
          <button
            type="button"
            onClick={onGoogleLogin}
            className="flex w-full items-center justify-center gap-2 rounded-lg border border-gray-200 py-2.5 text-sm font-medium text-gray-600 hover:bg-gray-50"
          >
            <GoogleIcon />
            Login with Google
          </button>

          <div className="relative flex items-center py-1">
            <div className="flex-1 border-t border-gray-100" />
            <span className="px-3 text-[11px] font-medium uppercase tracking-wide text-gray-400">
              Or login with email
            </span>
            <div className="flex-1 border-t border-gray-100" />
          </div>

          <div>
            <label className="mb-1.5 block text-xs font-medium text-gray-500">Email</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="cooper@example.com"
              required
              className="w-full rounded-lg border border-gray-200 px-3 py-2 text-sm text-gray-700 placeholder:text-gray-400 focus:border-emerald-400 focus:outline-none focus:ring-1 focus:ring-emerald-400"
            />
          </div>

          <div>
            <label className="mb-1.5 block text-xs font-medium text-gray-500">Password</label>
            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="••••••••"
                required
                className="w-full rounded-lg border border-gray-200 px-3 py-2 pr-9 text-sm text-gray-700 placeholder:text-gray-400 focus:border-emerald-400 focus:outline-none focus:ring-1 focus:ring-emerald-400"
              />
              <button
                type="button"
                onClick={() => setShowPassword((v) => !v)}
                aria-label={showPassword ? "Hide password" : "Show password"}
                className="absolute right-2.5 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
              >
                {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
              </button>
            </div>
          </div>

          <div className="flex items-center justify-between">
            <label className="flex items-center gap-2 text-sm text-gray-600">
              <input
                type="checkbox"
                checked={rememberMe}
                onChange={(e) => setRememberMe(e.target.checked)}
                className="h-4 w-4 rounded border-gray-300 text-emerald-500 focus:ring-emerald-400"
              />
              Remember Me
            </label>
            <button
              type="button"
              onClick={onForgotPassword}
              className="text-sm font-medium text-emerald-600 hover:underline"
            >
              Forgot Password?
            </button>
          </div>

          <button
            type="submit"
            className="w-full rounded-lg bg-emerald-500 py-2.5 text-sm font-medium text-white hover:bg-emerald-600"
          >
            Log In
          </button>
        </form>

        <p className="mt-5 text-center text-sm text-gray-500">
          Don't have an account?{" "}
          <button type="button" onClick={onSignUp} className="font-medium text-emerald-600 hover:underline">
            Sign Up
          </button>
        </p>
      </div>
    </div>
  );
};

export default LoginPage;