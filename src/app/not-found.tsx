import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-bg px-6">
      <div className="glass text-center px-12 py-16 max-w-md w-full">
        <div
          className="font-display text-8xl font-black mb-4"
          style={{
            background: "linear-gradient(135deg, #4fc3f7, #26c6da, #42a5f5)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            backgroundClip: "text",
          }}
        >
          404
        </div>
        <p className="text-text-dim text-lg mb-2">Page not found</p>
        <p className="text-text-dim text-sm mb-10">
          The page you&apos;re looking for doesn&apos;t exist or has been moved.
        </p>
        <Link
          href="/"
          className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-sm font-medium transition-all duration-300"
          style={{
            background:
              "linear-gradient(135deg, rgba(79,195,247,0.25), rgba(38,198,218,0.2))",
            border: "1px solid rgba(79,195,247,0.4)",
            color: "#e8edf5",
          }}
        >
          ← Back to Home
        </Link>
      </div>
    </div>
  );
}
