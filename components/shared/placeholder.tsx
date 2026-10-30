/**
 * Marks a value the client has not confirmed yet (see docs/content-status.md).
 * Visible in development and on Vercel preview deployments. Any other production
 * build (Vercel or not) renders the fallback, so visitors never see "TBD".
 */
export function Placeholder({ label, fallback = null }: { label: string; fallback?: React.ReactNode }) {
  if (process.env.NODE_ENV === "production" && process.env.VERCEL_ENV !== "preview") {
    return <>{fallback}</>;
  }
  return (
    <span className="rounded-md border border-dashed border-gold-800 bg-sun-100 px-1.5 py-0.5 text-xs font-medium text-gold-800">
      TBD: {label}
    </span>
  );
}
