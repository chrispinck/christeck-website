"use client";

import { useState, type FormEvent } from "react";
import { useRouter } from "next/navigation";
import { supabase } from "@/lib/supabase";

export default function AdminLoginPage() {
const router = useRouter();
const [email, setEmail] = useState("");
const [password, setPassword] = useState("");
const [error, setError] = useState("");
const [loading, setLoading] = useState(false);

async function handleSubmit(event: FormEvent<HTMLFormElement>) {
event.preventDefault();
setError("");
setLoading(true);

try {
  const { error: loginError } =
    await supabase.auth.signInWithPassword({
      email: email.trim().toLowerCase(),
      password,
    });

if (loginError) {
  console.error("Supabase login error:", loginError.message);
  setError("Unable to sign in. Check your email and password.");
  return;
}

  router.replace("/admin");
  router.refresh();
} catch {
  setError("Unable to connect. Please try again.");
} finally {
  setLoading(false);
}

}

return ( <main className="flex min-h-screen items-center justify-center bg-slate-50 px-4 py-12"> <div className="w-full max-w-md rounded-2xl border border-slate-200 bg-white p-8 shadow-sm"> <p className="text-sm font-semibold uppercase tracking-[0.2em] text-teal-700">
CHRISTECK </p>

    <h1 className="mt-3 text-3xl font-bold text-slate-900">
      Admin Login
    </h1>

    <p className="mt-2 text-sm text-slate-600">
      Sign in to manage website enquiries.
    </p>

    {error && (
      <p
        role="alert"
        className="mt-5 rounded-lg bg-red-50 p-3 text-sm text-red-700"
      >
        {error}
      </p>
    )}

    <form onSubmit={handleSubmit} className="mt-6 space-y-5">
      <div>
        <label
          htmlFor="email"
          className="mb-2 block text-sm font-medium text-slate-700"
        >
          Email address
        </label>

        <input
          id="email"
          type="email"
          autoComplete="username"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
          required
          className="w-full rounded-lg border border-slate-300 px-4 py-3 text-slate-900 outline-none focus:border-teal-600 focus:ring-2 focus:ring-teal-100"
        />
      </div>

      <div>
        <label
          htmlFor="password"
          className="mb-2 block text-sm font-medium text-slate-700"
        >
          Password
        </label>

        <input
          id="password"
          type="password"
          autoComplete="current-password"
          value={password}
          onChange={(event) => setPassword(event.target.value)}
          required
          className="w-full rounded-lg border border-slate-300 px-4 py-3 text-slate-900 outline-none focus:border-teal-600 focus:ring-2 focus:ring-teal-100"
        />
      </div>

      <button
        type="submit"
        disabled={loading}
        className="w-full rounded-lg bg-teal-700 px-4 py-3 font-semibold text-white transition hover:bg-teal-800 disabled:cursor-not-allowed disabled:opacity-60"
      >
        {loading ? "Signing in..." : "Sign In"}
      </button>
    </form>

    <p className="mt-6 text-center text-xs text-slate-500">
      Authorised CHRISTECK administrators only.
    </p>
  </div>
</main>

);
}