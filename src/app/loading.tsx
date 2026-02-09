export default function Loading() {
  return (
    <div className="min-h-[60vh] flex items-center justify-center">
      <div className="text-center">
        <div className="w-12 h-12 mx-auto mb-4 border-4 border-green-primary/20 border-t-green-primary rounded-full animate-spin" />
        <p className="text-neutral-500 text-sm">Loading...</p>
      </div>
    </div>
  );
}
