import { useEffect } from "react";
import { useRouter } from "next/router";

export default function NotFound() {
  const router = useRouter();
  useEffect(() => {
    const timeout = setTimeout(() => { router.push("/"); }, 3500);
    return () => clearTimeout(timeout);
  }, [router]);

  return (
    <div className="flex flex-col items-center mt-56 justify-center text-center">
      <h1 className="text-6xl outline-bold font-bold mb-4">404</h1>
      <p className="text-xl font-semibold mb-2">Page Not Found</p>
      <p className="text-zinc-600">Redirecting to homepage...</p>
    </div>
  );
}
