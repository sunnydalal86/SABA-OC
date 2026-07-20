"use client";

import { useState } from "react";
import { Button } from "./Button";

const purposes = [
  "General Inquiry",
  "Membership",
  "Sponsorship",
  "Events",
  "Volunteering",
  "Partnerships",
  "Media",
  "Other",
] as const;

type FormState = "idle" | "submitting" | "success" | "error";

export function ContactForm() {
  const [state, setState] = useState<FormState>("idle");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setState("submitting");

    const form = e.currentTarget;
    const data = new FormData(form);

    try {
      const body = new URLSearchParams();
      data.forEach((value, key) => {
        body.append(key, String(value));
      });

      // Netlify Forms (Next.js runtime v5): POST to static HTML for form handling
      const res = await fetch("/__forms.html", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: body.toString(),
      });

      if (!res.ok) throw new Error("Submit failed");
      setState("success");
      form.reset();
    } catch {
      setState("error");
    }
  }

  if (state === "success") {
    return (
      <div
        className="rounded-sm border border-border bg-white p-8"
        role="status"
        aria-live="polite"
      >
        <h3 className="font-serif text-2xl text-navy">Thank you</h3>
        <p className="mt-3 text-muted">
          Your message has been received. A member of the SABA-OC team will be in
          touch shortly.
        </p>
        <Button className="mt-6" type="button" onClick={() => setState("idle")}>
          Send another message
        </Button>
      </div>
    );
  }

  return (
    <form
      name="contact"
      method="POST"
      onSubmit={handleSubmit}
      className="rounded-sm border border-border bg-white p-6 sm:p-8"
    >
      <input type="hidden" name="form-name" value="contact" />
      <p className="hidden">
        <label>
          Don’t fill this out: <input name="bot-field" />
        </label>
      </p>

      <div className="grid gap-5 sm:grid-cols-2">
        <Field label="Full name" name="name" required autoComplete="name" />
        <Field
          label="Email"
          name="email"
          type="email"
          required
          autoComplete="email"
        />
        <Field
          label="Organization"
          name="organization"
          autoComplete="organization"
        />
        <Field
          label="Phone (optional)"
          name="phone"
          type="tel"
          autoComplete="tel"
        />
        <div className="sm:col-span-2">
          <label htmlFor="purpose" className="block text-sm font-medium text-navy">
            How can we help?
          </label>
          <select
            id="purpose"
            name="purpose"
            required
            className="mt-2 w-full rounded-sm border border-border bg-ivory px-3 py-2.5 text-sm text-charcoal"
            defaultValue=""
          >
            <option value="" disabled>
              Select a topic
            </option>
            {purposes.map((p) => (
              <option key={p} value={p}>
                {p}
              </option>
            ))}
          </select>
        </div>
        <div className="sm:col-span-2">
          <label htmlFor="message" className="block text-sm font-medium text-navy">
            Message
          </label>
          <textarea
            id="message"
            name="message"
            required
            rows={5}
            className="mt-2 w-full rounded-sm border border-border bg-ivory px-3 py-2.5 text-sm text-charcoal"
          />
        </div>
        <div className="sm:col-span-2">
          <label className="flex items-start gap-3 text-sm text-muted">
            <input
              type="checkbox"
              name="consent"
              required
              className="mt-1 size-4 rounded border-border"
            />
            <span>
              I agree to be contacted by SABA-OC regarding my inquiry. See our{" "}
              <a href="/privacy" className="text-navy underline underline-offset-2">
                Privacy
              </a>{" "}
              page for more information.
            </span>
          </label>
        </div>
      </div>

      {state === "error" ? (
        <p className="mt-4 text-sm text-red-700" role="alert">
          Something went wrong. Please try again or email the sponsorship contact
          listed on the Sponsors page if urgent.
        </p>
      ) : null}

      <Button type="submit" className="mt-6" disabled={state === "submitting"}>
        {state === "submitting" ? "Sending…" : "Send message"}
      </Button>
    </form>
  );
}

function Field({
  label,
  name,
  type = "text",
  required,
  autoComplete,
}: {
  label: string;
  name: string;
  type?: string;
  required?: boolean;
  autoComplete?: string;
}) {
  return (
    <div>
      <label htmlFor={name} className="block text-sm font-medium text-navy">
        {label}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        required={required}
        autoComplete={autoComplete}
        className="mt-2 w-full rounded-sm border border-border bg-ivory px-3 py-2.5 text-sm text-charcoal"
      />
    </div>
  );
}
