"use client";

<<<<<<< HEAD
=======
import Sidebar from "@/components/Sidebar";
import Header from "@/components/Header";
>>>>>>> c982e1fd69a4f72bbe24196cbe06f93e329bfa46
import SessionLoader from "@/components/SessionLoader";

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  return (
    <SessionLoader>
      <div style={{ display: "flex", height: "100vh" }}>
<<<<<<< HEAD
        <div style={{ flex: 1, display: "flex", flexDirection: "column" }}>
          {/* <Header />  ← ELIMINADO */}
=======
        <Sidebar />

        <div style={{ flex: 1, display: "flex", flexDirection: "column" }}>
          <Header />
>>>>>>> c982e1fd69a4f72bbe24196cbe06f93e329bfa46
          <main style={{ flex: 1, padding: "20px" }}>{children}</main>
        </div>
      </div>
    </SessionLoader>
  );
}
