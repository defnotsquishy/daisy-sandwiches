"use client";

import { FormEvent, useEffect, useRef, useState } from "react";
import { business } from "@/lib/site-data";

type FormKind = "catering" | "trailer" | "general";
type Errors = Record<string, string>;

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export function EnquiryForm({ kind = "catering" }: { kind?: FormKind }) {
  const [errors, setErrors] = useState<Errors>({});
  const [status, setStatus] = useState("");
  const [draftUrl, setDraftUrl] = useState("");
  const emailLinkRef = useRef<HTMLAnchorElement>(null);
  const isEvent = kind !== "general";

  useEffect(() => {
    if (draftUrl) emailLinkRef.current?.focus();
  }, [draftUrl]);

  function validate(data: FormData) {
    const next: Errors = {};
    const required = isEvent
      ? ["name", "email", "eventType", "date", "guests", "location", "message"]
      : ["name", "email", "message"];

    for (const field of required) {
      if (!String(data.get(field) ?? "").trim())
        next[field] = "Please complete this field.";
    }
    const email = String(data.get("email") ?? "");
    if (email && !emailPattern.test(email))
      next.email = "Enter an email address in the format name@example.com.";
    const guests = String(data.get("guests") ?? "");
    if (guests && Number(guests) < 1)
      next.guests = "Enter an approximate number of at least 1.";
    return next;
  }

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("");
    setDraftUrl("");
    const form = event.currentTarget;
    const data = new FormData(form);
    const next = validate(data);
    setErrors(next);

    if (Object.keys(next).length) {
      const first = form.querySelector<HTMLElement>(
        `[name="${Object.keys(next)[0]}"]`,
      );
      first?.focus();
      setStatus("Check the highlighted fields and try again.");
      return;
    }

    const subject =
      kind === "trailer"
        ? "Trailer enquiry"
        : kind === "catering"
          ? "Catering enquiry"
          : "Website enquiry";
    const labels: Record<string, string> = {
      name: "Name",
      email: "Email",
      phone: "Phone",
      eventType: "Event type",
      date: "Date",
      guests: "Approximate guests",
      location: "Location",
      dietary: "Dietary requirements",
      message: "Message",
    };
    const lines = Object.entries(labels)
      .map(
        ([key, label]) => [label, String(data.get(key) ?? "").trim()] as const,
      )
      .filter(([, value]) => value)
      .map(([label, value]) => `${label}: ${value}`);
    const recipient =
      kind === "trailer" ? business.trailerEmail : business.email;
    setDraftUrl(
      `mailto:${recipient}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(lines.join("\n\n"))}`,
    );
    setStatus(
      "Your enquiry is ready. Open it in your email app to review and send.",
    );
  }

  function fieldError(name: string) {
    return errors[name] ? (
      <span className="field-error" id={`${kind}-${name}-error`}>
        {errors[name]}
      </span>
    ) : null;
  }

  function invalidProps(name: string) {
    return errors[name]
      ? {
          "aria-invalid": true as const,
          "aria-describedby": `${kind}-${name}-error`,
        }
      : {};
  }

  return (
    <form className="enquiry-form" noValidate onSubmit={handleSubmit}>
      <div className="form-grid">
        <label>
          <span>Name</span>
          <input name="name" autoComplete="name" {...invalidProps("name")} />
          {fieldError("name")}
        </label>
        <label>
          <span>Email</span>
          <input
            name="email"
            type="email"
            autoComplete="email"
            inputMode="email"
            {...invalidProps("email")}
          />
          {fieldError("email")}
        </label>
        <label>
          <span>
            Phone <small>optional</small>
          </span>
          <input name="phone" type="tel" autoComplete="tel" inputMode="tel" />
        </label>
        {isEvent ? (
          <>
            <label>
              <span>Event type</span>
              {/* Platform-owned popup styling is intentionally accepted for this short, static choice list. */}
              <select
                name="eventType"
                defaultValue=""
                {...invalidProps("eventType")}
              >
                <option value="" disabled>
                  Select one
                </option>
                <option>Office meeting</option>
                <option>Celebration</option>
                <option>Private function</option>
                <option>Community event</option>
                <option>Other</option>
              </select>
              {fieldError("eventType")}
            </label>
            <label>
              <span>Date</span>
              {/* The native UK-locale date picker is intentional; the site does not require authored calendar geometry. */}
              <input name="date" type="date" {...invalidProps("date")} />
              {fieldError("date")}
            </label>
            <label>
              <span>Approximate number of guests</span>
              <input
                name="guests"
                type="number"
                min="1"
                inputMode="numeric"
                {...invalidProps("guests")}
              />
              {fieldError("guests")}
            </label>
            <label className="form-grid__wide">
              <span>Location</span>
              <input
                name="location"
                autoComplete="street-address"
                {...invalidProps("location")}
              />
              {fieldError("location")}
            </label>
            <label className="form-grid__wide">
              <span>
                Dietary requirements <small>optional</small>
              </span>
              <textarea name="dietary" rows={3} />
            </label>
          </>
        ) : null}
        <label className="form-grid__wide">
          <span>Message</span>
          <textarea name="message" rows={6} {...invalidProps("message")} />
          {fieldError("message")}
        </label>
      </div>
      <div className="form-actions">
        <button className="button button--primary" type="submit">
          Prepare enquiry email
        </button>
        <p>
          This prepares an email draft; nothing is sent until you review and
          send it.
        </p>
      </div>
      <p className="form-status" role="status" aria-live="polite">
        {status}
      </p>
      {draftUrl ? (
        <a
          ref={emailLinkRef}
          className="button button--secondary form-email-link"
          href={draftUrl}
        >
          Open email app
        </a>
      ) : null}
    </form>
  );
}
