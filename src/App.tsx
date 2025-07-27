import './App.css';
import { ThemeProvider } from '@/components/theme/theme-provider';
import { PromptField } from './components/ui/promptField';

function App() {
  return (
    <>
      <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
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

          {/* <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full max-w-2xl p-4">
            <form className="rounded-xl border border-neutral-700 bg-[#0d0d0d] focus-within:ring-1 focus-within:ring-blue-500 focus-within:ring-offset-0 transition outline-none">
              <div className="p-3 space-y-3">
                <input
                  placeholder="Username"
                  className="w-full resize-none bg-transparent text-white placeholder-neutral-500 focus:outline-none"
                />
                <div className="flex items-center justify-between text-sm text-neutral-400 ">
                  <div className="flex items-center gap-1 hover:text-white cursor-pointer">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-4 h-4"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth="2"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M15.172 7l-6.586 6.586a2 2 0 002.828 2.828l6.586-6.586a4 4 0 00-5.656-5.656l-6.586 6.586a6 6 0 108.486 8.486L20.5 13"
                      />
                    </svg>
                    <span className="font-semibold">Select</span>
                  </div>

                  <Button
                    variant={'ghost'}
                    aria-label="Send"
                    className="w-11 h-11 bg-red rounded-full text-black flex items-center justify-center shadow"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="white"
                      stroke-width="1"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      className="lucide lucide-send-horizontal-icon lucide-send-horizontal"
                    >
                      <path d="M3.714 3.048a.498.498 0 0 0-.683.627l2.843 7.627a2 2 0 0 1 0 1.396l-2.842 7.627a.498.498 0 0 0 .682.627l18-8.5a.5.5 0 0 0 0-.904z" />
                      <path d="M6 12h16" />
                    </svg>
                  </Button>
                </div>
              </div>
            </form> 
          </div> */}
        </div>
      </ThemeProvider>
    </>
  );
}

export default App;
