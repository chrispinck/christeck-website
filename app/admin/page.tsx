"use client";

import { useEffect, useMemo, useState } from "react";
import { useRouter } from "next/navigation";
import { supabase } from "@/lib/supabase";

type Lead = {
  id: string;
  created_at: string;
  name: string;
  company: string | null;
  email: string;
  phone: string | null;
  service: string | null;
  message: string;
  source_page: string | null;
  referrer: string | null;
  utm_source: string | null;
  utm_medium: string | null;
  utm_campaign: string | null;
  status: string | null;
  notes: string | null;
};

type LeadUpdate = {
  status?: string | null;
  notes?: string | null;
};

const statuses = [
  { value: "new", label: "New" },
  { value: "contacted", label: "Contacted" },
  { value: "qualified", label: "Qualified" },
  { value: "won", label: "Won" },
  { value: "lost", label: "Lost" },
];

export default function AdminDashboardPage() {
  const router = useRouter();

  const [leads, setLeads] = useState<Lead[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [search, setSearch] = useState("");
  const [statusFilter, setStatusFilter] = useState("All");
  const [selectedLead, setSelectedLead] = useState<Lead | null>(null);
  const [saving, setSaving] = useState(false);

  useEffect(() => {
    let active = true;

    async function loadLeads() {
      try {
        const {
          data: { user },
          error: authError,
        } = await supabase.auth.getUser();

        if (!active) return;

        if (authError || !user) {
          router.replace("/admin/login");
          return;
        }

        // Verify administrator access.
        // Database RLS policies must also enforce authorization.
        const { data: isAdmin, error: adminError } = await supabase
          .from("christeck_admins")
          .select("user_id")
          .eq("user_id", user.id)
          .maybeSingle();

        if (!active) return;

        if (adminError || !isAdmin) {
          setError(
            "This account is not authorised to access the dashboard."
          );
          setLoading(false);
          return;
        }

        const { data, error: leadsError } = await supabase
          .from("leads")
          .select(
            "id, created_at, name, company, email, phone, service, message, source_page, referrer, utm_source, utm_medium, utm_campaign, status, notes"
          )
          .order("created_at", { ascending: false });

        if (!active) return;

        if (leadsError) {
          console.error("Load leads error:", leadsError.message);
          setError(
            "Unable to load enquiries. Please check the database permissions."
          );
        } else {
          setLeads((data ?? []) as Lead[]);
        }
      } catch (err) {
        console.error("Dashboard loading error:", err);

        if (active) {
          setError("Unable to load the dashboard. Please try again.");
        }
      } finally {
        if (active) {
          setLoading(false);
        }
      }
    }

    void loadLeads();

    return () => {
      active = false;
    };
  }, [router]);

  const filteredLeads = useMemo(() => {
    const term = search.trim().toLowerCase();

    return leads.filter((lead) => {
      const matchesSearch =
        !term ||
        [lead.name, lead.company, lead.email, lead.service]
          .filter(Boolean)
          .some((value) => value!.toLowerCase().includes(term));

      const matchesStatus =
        statusFilter === "All" ||
        (lead.status || "new") === statusFilter;

      return matchesSearch && matchesStatus;
    });
  }, [leads, search, statusFilter]);

  async function updateLead(lead: Lead, updates: LeadUpdate) {
    if (saving) return;

    setSaving(true);
    setError("");

    try {
      const {
        data: { user },
        error: authError,
      } = await supabase.auth.getUser();

      if (authError || !user) {
        router.replace("/admin/login");
        return;
      }

      // Verify administrator access before attempting a change.
      const { data: isAdmin, error: adminError } = await supabase
        .from("christeck_admins")
        .select("user_id")
        .eq("user_id", user.id)
        .maybeSingle();

      if (adminError || !isAdmin) {
        setError("You are not authorised to update enquiries.");
        return;
      }

      // Save the enquiry status or internal notes.
      const { data: updatedRows, error: updateError } = await supabase
        .from("leads")
        .update(updates)
        .eq("id", lead.id)
        .select("id");

      if (updateError) {
        console.error("Update lead error:", updateError.message);
        setError(`Unable to save changes: ${updateError.message}`);
        return;
      }

      if (!updatedRows || updatedRows.length === 0) {
        setError(
          "No enquiry was updated. Check your administrator permissions."
        );
        return;
      }

      const updatedLead = { ...lead, ...updates };

      setLeads((current) =>
        current.map((item) =>
          item.id === lead.id ? updatedLead : item
        )
      );

      setSelectedLead((current) =>
        current?.id === lead.id ? updatedLead : current
      );
    } catch (err) {
      console.error("Unexpected lead update error:", err);
      setError(
        "An unexpected error occurred while saving. Please try again."
      );
    } finally {
      setSaving(false);
    }
  }

  async function signOut() {
    const { error: signOutError } = await supabase.auth.signOut();

    if (signOutError) {
      console.error("Sign-out error:", signOutError.message);
      setError("Unable to sign out. Please try again.");
      return;
    }

    router.replace("/admin/login");
    router.refresh();
  }

  const newCount = leads.filter(
    (lead) => !lead.status || lead.status === "new"
  ).length;

  const contactedCount = leads.filter(
    (lead) => lead.status === "contacted"
  ).length;

  const qualifiedCount = leads.filter(
    (lead) => lead.status === "qualified"
  ).length;

  if (loading) {
    return (
      <main className="flex min-h-screen items-center justify-center bg-slate-50 text-slate-600">
        Loading CHRISTECK dashboard...
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-slate-50 px-4 py-8 sm:px-8">
      <div className="mx-auto max-w-7xl">
        <header className="mb-8 flex flex-wrap items-center justify-between gap-4">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-teal-700">
              CHRISTECK
            </p>

            <h1 className="mt-2 text-3xl font-bold text-slate-900">
              Lead Dashboard
            </h1>

            <p className="mt-1 text-sm text-slate-600">
              Manage website enquiries and follow-ups.
            </p>
          </div>

          <button
            onClick={signOut}
            className="rounded-lg border border-slate-300 bg-white px-4 py-2 text-sm font-semibold text-slate-700 hover:bg-slate-100"
          >
            Sign Out
          </button>
        </header>

        {error && (
          <div
            role="alert"
            className="mb-6 rounded-lg border border-red-200 bg-red-50 p-4 text-sm text-red-700"
          >
            {error}
          </div>
        )}

        <section className="mb-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {[
            { label: "Total Enquiries", value: leads.length },
            { label: "New Enquiries", value: newCount },
            { label: "Contacted", value: contactedCount },
            { label: "Qualified", value: qualifiedCount },
          ].map((item) => (
            <article
              key={item.label}
              className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm"
            >
              <p className="text-sm text-slate-500">{item.label}</p>
              <p className="mt-3 text-3xl font-bold text-slate-900">
                {item.value}
              </p>
            </article>
          ))}
        </section>

        <section className="rounded-2xl border border-slate-200 bg-white shadow-sm">
          <div className="flex flex-col gap-4 border-b border-slate-200 p-5 sm:flex-row">
            <input
              type="search"
              value={search}
              onChange={(event) => setSearch(event.target.value)}
              placeholder="Search name, company, email or service..."
              className="min-w-0 flex-1 rounded-lg border border-slate-300 px-4 py-3 text-sm text-slate-900 outline-none focus:border-teal-600"
            />

            <select
              value={statusFilter}
              onChange={(event) => setStatusFilter(event.target.value)}
              className="rounded-lg border border-slate-300 bg-white px-4 py-3 text-sm text-slate-900"
              aria-label="Filter by lead status"
            >
              <option value="All">All statuses</option>
              {statuses.map((status) => (
                <option key={status.value} value={status.value}>
                  {status.label}
                </option>
              ))}
            </select>
          </div>

          {filteredLeads.length === 0 ? (
            <div className="p-10 text-center text-sm text-slate-500">
              {leads.length === 0
                ? "No enquiries are available."
                : "No enquiries match your search."}
            </div>
          ) : (
            <div className="overflow-x-auto">
              <table className="w-full min-w-[850px] text-left text-sm">
                <thead className="bg-slate-50 text-slate-600">
                  <tr>
                    <th className="px-5 py-4 font-semibold">Customer</th>
                    <th className="px-5 py-4 font-semibold">Service</th>
                    <th className="px-5 py-4 font-semibold">Date</th>
                    <th className="px-5 py-4 font-semibold">Status</th>
                    <th className="px-5 py-4 font-semibold">Details</th>
                  </tr>
                </thead>

                <tbody className="divide-y divide-slate-100">
                  {filteredLeads.map((lead) => (
                    <tr key={lead.id} className="hover:bg-slate-50">
                      <td className="px-5 py-4">
                        <p className="font-semibold text-slate-900">
                          {lead.name}
                        </p>
                        <p className="mt-1 text-slate-500">
                          {lead.company || "Individual"}
                        </p>
                        <p className="mt-1 text-slate-500">{lead.email}</p>
                      </td>

                      <td className="px-5 py-4 text-slate-700">
                        {lead.service || "Not specified"}
                      </td>

                      <td className="px-5 py-4 text-slate-600">
                        {new Date(lead.created_at).toLocaleDateString("en-IN")}
                      </td>

                      <td className="px-5 py-4">
                        <select
                          value={lead.status || "new"}
                          disabled={saving}
                          onChange={(event) =>
                            void updateLead(lead, {
                              status: event.target.value,
                            })
                          }
                          className="rounded-lg border border-slate-300 bg-white px-3 py-2 text-slate-800 disabled:cursor-not-allowed disabled:opacity-60"
                          aria-label={`Status for ${lead.name}`}
                        >
                          {statuses.map((status) => (
                            <option key={status.value} value={status.value}>
                              {status.label}
                            </option>
                          ))}
                        </select>
                      </td>

                      <td className="px-5 py-4">
                        <button
                          onClick={() => setSelectedLead(lead)}
                          className="font-semibold text-teal-700 hover:text-teal-900"
                        >
                          View enquiry
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </section>

        {selectedLead && (
          <div
            className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/40 p-4"
            role="dialog"
            aria-modal="true"
            aria-labelledby="lead-detail-title"
          >
            <div className="max-h-[90vh] w-full max-w-2xl overflow-y-auto rounded-2xl bg-white p-6 shadow-xl">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <h2
                    id="lead-detail-title"
                    className="text-2xl font-bold text-slate-900"
                  >
                    {selectedLead.name}
                  </h2>

                  <p className="mt-1 text-sm text-slate-500">
                    {selectedLead.company || "Individual"}
                  </p>
                </div>

                <button
                  onClick={() => setSelectedLead(null)}
                  className="rounded-lg px-3 py-2 text-slate-500 hover:bg-slate-100"
                  aria-label="Close enquiry details"
                >
                  ✕
                </button>
              </div>

              <dl className="mt-6 grid gap-4 sm:grid-cols-2">
                <div>
                  <dt className="text-xs font-semibold uppercase text-slate-500">
                    Email
                  </dt>
                  <dd className="mt-1 break-words text-slate-900">
                    {selectedLead.email}
                  </dd>
                </div>

                <div>
                  <dt className="text-xs font-semibold uppercase text-slate-500">
                    Phone
                  </dt>
                  <dd className="mt-1 text-slate-900">
                    {selectedLead.phone || "Not provided"}
                  </dd>
                </div>

                <div>
                  <dt className="text-xs font-semibold uppercase text-slate-500">
                    Service
                  </dt>
                  <dd className="mt-1 text-slate-900">
                    {selectedLead.service || "Not specified"}
                  </dd>
                </div>

                <div>
                  <dt className="text-xs font-semibold uppercase text-slate-500">
                    Source page
                  </dt>
                  <dd className="mt-1 break-words text-slate-900">
                    {selectedLead.source_page || "Not recorded"}
                  </dd>
                </div>

                <div>
                  <dt className="text-xs font-semibold uppercase text-slate-500">
                    Referrer
                  </dt>
                  <dd className="mt-1 break-words text-slate-900">
                    {selectedLead.referrer || "Not recorded"}
                  </dd>
                </div>

                <div>
                  <dt className="text-xs font-semibold uppercase text-slate-500">
                    Campaign
                  </dt>
                  <dd className="mt-1 break-words text-slate-900">
                    {[
                      selectedLead.utm_source,
                      selectedLead.utm_medium,
                      selectedLead.utm_campaign,
                    ]
                      .filter(Boolean)
                      .join(" / ") || "Not recorded"}
                  </dd>
                </div>
              </dl>

              <section className="mt-6">
                <h3 className="text-sm font-semibold text-slate-700">
                  Customer message
                </h3>

                <p className="mt-2 whitespace-pre-wrap rounded-lg bg-slate-50 p-4 text-sm leading-6 text-slate-800">
                  {selectedLead.message}
                </p>
              </section>

              <section className="mt-6">
                <label
                  htmlFor="lead-notes"
                  className="text-sm font-semibold text-slate-700"
                >
                  Internal notes
                </label>

                <textarea
                  id="lead-notes"
                  defaultValue={selectedLead.notes || ""}
                  key={selectedLead.id}
                  rows={4}
                  maxLength={5000}
                  disabled={saving}
                  className="mt-2 w-full rounded-lg border border-slate-300 p-3 text-sm text-slate-900 outline-none focus:border-teal-600 disabled:opacity-60"
                  placeholder="Record follow-up actions or discussion notes..."
                  onBlur={(event) => {
                    const value = event.target.value;

                    if (value !== (selectedLead.notes || "")) {
                      void updateLead(selectedLead, { notes: value });
                    }
                  }}
                />

                <p className="mt-2 text-xs text-slate-500">
                  Notes are saved when you leave the notes field.
                </p>
              </section>

              <div className="mt-6 flex justify-end">
                <button
                  onClick={() => setSelectedLead(null)}
                  className="rounded-lg bg-teal-700 px-5 py-2.5 font-semibold text-white hover:bg-teal-800"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </main>
  );
}