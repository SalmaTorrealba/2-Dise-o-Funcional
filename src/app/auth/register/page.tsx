"use client";
<<<<<<< HEAD

import "./register.css";
import { useState, type ChangeEvent, type FormEvent } from "react";
=======
import "./register.css";
import { useState } from "react";
import NavBar from "@/components/NavBar";
>>>>>>> c982e1fd69a4f72bbe24196cbe06f93e329bfa46

export default function RegisterPage() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    company: "",
    password: "",
    confirmPassword: "",
  });

<<<<<<< HEAD
  function handleChange(e: ChangeEvent<HTMLInputElement>) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
=======
  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
>>>>>>> c982e1fd69a4f72bbe24196cbe06f93e329bfa46
    e.preventDefault();
    alert("Registro enviado (falta conectar backend)");
  }

  return (
    <>
<<<<<<< HEAD
      <div className="min-h-screen flex items-center justify-center register-background">
        <div className="register-container bg-white shadow-lg rounded-lg p-10 w-full max-w-md">
    <h2 className="register-title">CREA TU CUENTA</h2>

<form onSubmit={handleSubmit} className="register-form">

  <div>
    <label className="register-label">NOMBRE COMPLETO</label>
    <input
      name="name"
      type="text"
      className="register-input"
      placeholder="Ej. Juan Pérez"
      onChange={handleChange}
    />
  </div>

  <div>
    <label className="register-label">CORREO ELECTRÓNICO</label>
    <input
      name="email"
      type="email"
      className="register-input"
      placeholder="Ej. juan.perez@empresa.com"
      onChange={handleChange}
    />
  </div>

  <div>
    <label className="register-label">EMPRESA / ORGANIZACIÓN</label>
    <input
      name="company"
      type="text"
      className="register-input"
      placeholder="(Opcional)"
      onChange={handleChange}
    />
  </div>

  <div>
    <label className="register-label">CONTRASEÑA</label>
    <input
      name="password"
      type="password"
      className="register-input"
      onChange={handleChange}
    />
  </div>

  <div>
    <label className="register-label">CONFIRMAR CONTRASEÑA</label>
    <input
      name="confirmPassword"
      type="password"
      className="register-input"
      onChange={handleChange}
    />
  </div>

  <div className="register-checkbox">
    <input type="checkbox" />
    <span>ACEPTO LOS TÉRMINOS Y CONDICIONES</span>
  </div>

  <button type="submit" className="register-button">
    REGISTRARME
  </button>

</form>

<div className="register-footer">
  <a href="#">AYUDA</a> | <a href="#">SOPORTE</a>

</div>
        
=======
      <NavBar />

     <div className="min-h-screen flex items-center justify-center register-background">
        <div className="bg-white shadow-lg rounded-lg p-10 w-full max-w-md">

          <h2 className="text-2xl font-bold text-center mb-6 text-gray-800">
            CREA TU CUENTA
          </h2>

          <form onSubmit={handleSubmit} className="register-form">

            <div>
              <label className="register-label">NOMBRE COMPLETO</label>
              <input
                name="name"
                type="text"
                className="register-input"
                onChange={handleChange}
              />
            </div>

            <div>
              <label className="register-label">CORREO ELECTRÓNICO</label>
              <input
                name="email"
                type="email"
                className="register-input"
                onChange={handleChange}
              />
            </div>

            <div>
              <label className="register-label">EMPRESA / ORGANIZACIÓN</label>
              <input
                name="company"
                type="text"
                className="register-input"
                onChange={handleChange}
              />
            </div>

            <div>
              <label className="register-label">CONTRASEÑA</label>
              <input
                name="password"
                type="password"
                className="register-input"
                onChange={handleChange}
              />
            </div>

            <div>
              <label className="register-label">CONFIRMAR CONTRASEÑA</label>
              <input
                name="confirmPassword"
                type="password"
                className="register-input"
                onChange={handleChange}
              />
            </div>

            <button
              type="submit"
              className="w-full bg-[#F57C00] hover:bg-[#EF6C00] text-white font-semibold py-2 rounded-md transition"
            >
              REGISTRARME
            </button>

          </form>

>>>>>>> c982e1fd69a4f72bbe24196cbe06f93e329bfa46
        </div>
      </div>
    </>
  );
}
