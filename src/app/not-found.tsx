import Link from "next/link";
import { ArrowLeft, Leaf } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-[70vh] flex items-center justify-center px-4">
      <div className="text-center max-w-lg">
        <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-green-primary/10 flex items-center justify-center">
          <Leaf className="w-10 h-10 text-green-primary" />
        </div>
        <h1 className="text-6xl font-extrabold font-heading text-green-dark mb-2">
          404
        </h1>
        <h2 className="text-2xl font-bold font-heading text-neutral-900 mb-4">
          Page Not Found
        </h2>
        <p className="text-neutral-600 mb-8 leading-relaxed">
          The page you&apos;re looking for doesn&apos;t exist or has been moved.
          Let&apos;s get you back on track.
        </p>
        <Link
          href="/"
          className="inline-flex items-center gap-2 bg-green-primary text-white px-6 py-3 rounded-lg font-semibold hover:bg-green-dark transition-colors"
        >
          <ArrowLeft className="w-5 h-5" />
          Back to Home
        </Link>
      </div>
    </div>
  );
}
