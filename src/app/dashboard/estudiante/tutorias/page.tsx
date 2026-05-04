"use client";

import { useState } from "react";
import styles from "./tutorias.module.css";
import StudentTopBar from "@/components/students/StudentTopBar";

export default function TutoriasAlumno() {
  const tutorias = [
    { id: 1, fecha: "2026-05-10", hora: "16:00", profesor: "Prof. García", estado: "Confirmada" },
    { id: 2, fecha: "2026-05-15", hora: "10:00", profesor: "Prof. López", estado: "Pendiente" },
  ];

  const [solicitando, setSolicitando] = useState(false);
  const [fecha, setFecha] = useState("");
  const [hora, setHora] = useState("");

  function solicitar() {
    console.log("Solicitud enviada:", { fecha, hora });
    alert("Solicitud enviada correctamente");
    setSolicitando(false);
  }

  return (
    <div className={styles.page}>
      <StudentTopBar/>
      <h1 className={styles.title}>Mis Tutorías</h1>

      <div className={styles.header}>
        <button className={styles.btnNueva} onClick={() => setSolicitando(true)}>
          Solicitar nueva tutoría
        </button>
      </div>

      {/* TABLA */}
      <table className={styles.table}>
        <thead>
          <tr>
            <th>Fecha</th>
            <th>Hora</th>
            <th>Profesor</th>
            <th>Estado</th>
          </tr>
        </thead>

        <tbody>
          {tutorias.map((t) => (
            <tr key={t.id}>
              <td>{t.fecha}</td>
              <td>{t.hora}</td>
              <td>{t.profesor}</td>
              <td>{t.estado}</td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* PANEL SOLICITAR */}
      {solicitando && (
        <div className={styles.panel}>
          <h2 className={styles.panelTitle}>Solicitar Tutoría</h2>

          <div className={styles.group}>
            <label>Fecha</label>
            <input type="date" value={fecha} onChange={(e) => setFecha(e.target.value)} />
          </div>

          <div className={styles.group}>
            <label>Hora</label>
            <input type="time" value={hora} onChange={(e) => setHora(e.target.value)} />
          </div>

          <button className={styles.btnEnviar} onClick={solicitar}>
            Enviar solicitud
          </button>

          <button className={styles.btnCancelar} onClick={() => setSolicitando(false)}>
            Cancelar
          </button>
        </div>
      )}
    </div>
  );
}
