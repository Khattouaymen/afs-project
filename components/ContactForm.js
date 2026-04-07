"use client";

import { useState } from "react";

const initialState = {
  name: "",
  email: "",
  subject: "",
  message: ""
};

export default function ContactForm() {
  const [form, setForm] = useState(initialState);
  const [submitted, setSubmitted] = useState(false);

  function handleChange(event) {
    const { name, value } = event.target;
    setForm((current) => ({
      ...current,
      [name]: value
    }));
  }

  function handleSubmit(event) {
    event.preventDefault();
    setSubmitted(true);
    setForm(initialState);
  }

  return (
    <section className="section-panel p-7 sm:p-8">
      <div className="max-w-2xl">
        <p className="text-sm font-semibold uppercase tracking-[0.24em] text-afs-primary">Formulaire</p>
        <h2 className="mt-4 text-3xl font-semibold">Envoyer un message</h2>
        <p className="mt-4 text-sm leading-7 text-afs-text/75">
          Formulaire frontend uniquement. Le composant est prêt à être branché plus tard sur un service backend, une API ou un outil CRM.
        </p>
      </div>

      <form className="mt-8 grid gap-5" onSubmit={handleSubmit}>
        <div className="grid gap-5 sm:grid-cols-2">
          <Field label="Nom complet" name="name" value={form.name} onChange={handleChange} placeholder="Votre nom" />
          <Field label="Email" name="email" type="email" value={form.email} onChange={handleChange} placeholder="vous@exemple.com" />
        </div>
        <Field label="Sujet" name="subject" value={form.subject} onChange={handleChange} placeholder="Objet du message" />
        <label className="grid gap-2 text-sm font-medium text-afs-text">
          Message
          <textarea
            name="message"
            rows="6"
            value={form.message}
            onChange={handleChange}
            placeholder="Décrivez votre besoin"
            className="rounded-3xl border border-afs-line bg-afs-soft px-5 py-4 outline-none transition focus:border-afs-primary focus:bg-white"
          />
        </label>
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
          <button type="submit" className="button-primary">
            Envoyer la demande
          </button>
          {submitted ? (
            <p className="text-sm text-afs-primary">
              Envoi simulé avec succès. Aucun backend n’est connecté pour le moment.
            </p>
          ) : (
            <p className="text-sm text-afs-text/55">Aucune donnée n’est transmise en dehors du frontend.</p>
          )}
        </div>
      </form>
    </section>
  );
}

function Field({ label, name, type = "text", value, onChange, placeholder }) {
  return (
    <label className="grid gap-2 text-sm font-medium text-afs-text">
      {label}
      <input
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className="rounded-full border border-afs-line bg-afs-soft px-5 py-4 outline-none transition focus:border-afs-primary focus:bg-white"
      />
    </label>
  );
}
