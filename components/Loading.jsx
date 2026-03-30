// app/loading.tsx
export default function Loading() {
  return (
    <div className="flex h-screen items-center justify-center bg-transparent">
      {/* Tailwind Spinner */}
      <div className="h-16 w-16 animate-spin rounded-full border-4 border-solid border-slate-400 border-t-transparent"></div>
    </div>
  )
}
