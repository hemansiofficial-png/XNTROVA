"use client";
import { useState } from "react";
import { SERVICE_OPTIONS } from "@/data/content";
export default function LeadForm({ id = "lead", compact = false }) {
  const [status, setStatus] = useState("idle"), [err, setErr] = useState("");
  async function onSubmit(e) {
    e.preventDefault(); setStatus("sending"); setErr("");
    const form = e.currentTarget, data = Object.fromEntries(new FormData(form));
    try {
      const r = await fetch("/api/lead", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(data) });
      if (!r.ok) throw new Error((await r.json()).error || "Something went wrong");
      setStatus("done"); form.reset();
    } catch (x) { setErr(x.message); setStatus("error"); }
  }
  if (status === "done") return <div className="card form-ok" role="status"><h3>Thank you!</h3><p>We have received your details and will get back to you shortly.</p></div>;
  return (
    <form className="card form" onSubmit={onSubmit}>
      <h3>Get a Free Digital Audit</h3>
      <p className="muted">Tell us about your business and we will get back to you shortly.</p>
      <label htmlFor={`${id}-name`}>Name<input id={`${id}-name`} name="name" required minLength={2} autoComplete="name" /></label>
      <label htmlFor={`${id}-email`}>Email<input id={`${id}-email`} name="email" type="email" required autoComplete="email" /></label>
      <label htmlFor={`${id}-phone`}>Phone<input id={`${id}-phone`} name="phone" type="tel" autoComplete="tel" /></label>
      <label htmlFor={`${id}-svc`}>Service<select id={`${id}-svc`} name="service" defaultValue="">
        <option value="" disabled>Select a service</option>{SERVICE_OPTIONS.map(s => <option key={s}>{s}</option>)}</select></label>
      {!compact && <label htmlFor={`${id}-msg`}>Message<textarea id={`${id}-msg`} name="message" rows={3} /></label>}
      <input name="website" tabIndex={-1} autoComplete="off" className="hp" aria-hidden="true" />
      <button className="btn" disabled={status === "sending"}>{status === "sending" ? "Sending..." : "Request My Audit"}</button>
      {err && <p className="err" role="alert">{err}</p>}
    </form>
  );
}
