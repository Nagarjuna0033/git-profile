import { PromptField } from '@/components/ui/promptField';

export default function Home() {
  return (
    <div className="relative h-screen w-screen overflow-hidden">
      <div className="grid place-items-center h-full w-full">
        {/* <div className="absolute top-4 right-4 z-10">
                  <ModeToggle />
                </div> */}
        <h1 className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-gray-400 via-slate-300 to-gray-500">
          Soon...
        </h1>
      </div>

      <PromptField
        onSubmit={(message) => {
          console.log('User input:', message);
        }}
      />
    </div>
  );
}
