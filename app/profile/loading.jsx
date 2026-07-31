export default function ProfileLoading() {
  return (
    <div className='flex min-h-screen items-center justify-center bg-white px-4 py-16 pt-20'>
      <div className='w-full max-w-5xl rounded-2xl border border-slate-200 bg-white p-6 shadow-sm'>
        <div className='animate-pulse space-y-6'>
          <div className='h-24 rounded-2xl bg-slate-100' />
          <div className='grid gap-4 md:grid-cols-[220px_minmax(0,1fr)]'>
            <div className='h-80 rounded-2xl bg-slate-100' />
            <div className='h-80 rounded-2xl bg-slate-100' />
          </div>
        </div>
      </div>
    </div>
  );
}
