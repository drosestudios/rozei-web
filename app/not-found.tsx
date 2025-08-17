"use client";

import { useEffect } from "react";
import { redirect } from "next/navigation";

export default function NotFound() {
  useEffect(() => {
    const timeout = setTimeout(() => { redirect("/"); }, 3000);
    return () => clearTimeout(timeout);
  }, []);

  return (
    <div className="flex flex-col items-center justify-center my-60 text-center">
      <h1 className="text-6xl outline-bold font-bold mb-4">404</h1>
      <p className="text-xl font-semibold">Page Not Found</p>
      <p className="text-zinc-600">Redirecting to homepage...</p>
    </div>
  );
}
