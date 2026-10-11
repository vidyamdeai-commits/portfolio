/**
 * Marks a value the client has not confirmed yet (see docs/content-status.md).
 * Visible in development and previews; renders the fallback in production.
 */
export function Placeholder({ label, fallback = null }: { label: string; fallback?: React.ReactNode }) {
  if (process.env.NODE_ENV === "production" && process.env.VERCEL_ENV === "production") {
    return <>{fallback}</>;
  }
  return (
    <span className="rounded-md border border-dashed border-gold-800 bg-sun-100 px-1.5 py-0.5 text-xs font-medium text-gold-800">
      TBD: {label}
    </span>
  );
}
