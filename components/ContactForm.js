"use client";

import { useState } from "react";
import { getContactDetails } from "@/lib/content";

const initialState = {
  name: "",
  email: "",
  subject: "",
  message: ""
};

export default function ContactForm() {
  const contact = getContactDetails();
  const [form, setForm] = useState(initialState);
  const [status, setStatus] = useState("idle");

  function handleChange(event) {
    const { name, value } = event.target;
    setForm((current) => ({
      ...current,
      [name]: value
    }));
  }

  function handleSubmit(event) {
    event.preventDefault();

    const subject = form.subject.trim() || "Prise de contact depuis le site Ask for Success";
    const body = [`Nom : ${form.name}`, `Email : ${form.email}`, "", form.message.trim()].join("\n");

    const query = new URLSearchParams({
      subject,
      body
    }).toString();

    window.location.href = `mailto:${contact.email}?${query}`;
    setStatus("redirected");
  }

  return (
    <section className="section-panel p-7 sm:p-8">
      <div className="max-w-2xl">
        <p className="text-sm font-semibold uppercase tracking-[0.24em] text-afs-primary">Formulaire</p>
        <h2 className="mt-4 text-3xl font-semibold">Préparer un message</h2>
        <p className="mt-4 text-sm leading-7 text-afs-text/75">
          Ce formulaire prépare un email réel vers l&apos;équipe AFS. En cliquant sur le bouton,
          votre messagerie s&apos;ouvrira avec les informations déjà remplies.
        </p>
      </div>

      <form className="mt-8 grid gap-5" onSubmit={handleSubmit}>
        <div className="grid gap-5 sm:grid-cols-2">
          <Field
            label="Nom complet"
            name="name"
            value={form.name}
            onChange={handleChange}
            placeholder="Votre nom"
            autoComplete="name"
            required
          />
          <Field
            label="Email"
            name="email"
            type="email"
            value={form.email}
            onChange={handleChange}
            placeholder="vous@exemple.com"
            autoComplete="email"
            required
          />
        </div>
        <Field
          label="Sujet"
          name="subject"
          value={form.subject}
          onChange={handleChange}
          placeholder="Objet du message"
        />
        <label className="grid gap-2 text-sm font-medium text-afs-text">
          Message
          <textarea
            name="message"
            rows="6"
            value={form.message}
            onChange={handleChange}
            placeholder="Décrivez votre besoin"
            required
            className="rounded-3xl border border-afs-line bg-afs-soft px-5 py-4 transition focus:border-afs-primary focus:bg-white"
          />
        </label>
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
          <button type="submit" className="button-primary">
            Ouvrir ma messagerie
          </button>
          <div aria-live="polite" className="space-y-1 text-sm">
            {status === "redirected" ? (
              <p className="text-afs-primary">
                Votre messagerie devrait s&apos;ouvrir. Si rien ne se passe, utilisez l&apos;email direct ci-dessous.
              </p>
            ) : (
              <p className="text-afs-text/55">
                Aucun faux envoi n&apos;est simulé: vous validez ensuite depuis votre messagerie.
              </p>
            )}
            <p className="text-afs-text/65">
              Email direct:{" "}
              <a href={`mailto:${contact.email}`} className="font-medium text-afs-primary underline-offset-4 hover:underline">
                {contact.email}
              </a>
            </p>
          </div>
        </div>
      </form>
    </section>
  );
}

function Field({ label, name, type = "text", value, onChange, placeholder, autoComplete, required = false }) {
  return (
    <label className="grid gap-2 text-sm font-medium text-afs-text">
      {label}
      <input
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        autoComplete={autoComplete}
        required={required}
        className="rounded-full border border-afs-line bg-afs-soft px-5 py-4 transition focus:border-afs-primary focus:bg-white"
      />
    </label>
  );
}
