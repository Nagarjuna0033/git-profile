import { useState } from 'react';
import { Button } from '@/components/ui/button';

type PromptFieldProps = {
  onSubmit: (value: string) => void;
  placeholder?: string;
};

export function PromptField({ onSubmit, placeholder = 'Username' }: PromptFieldProps) {
  const [input, setInput] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim()) return;
    onSubmit(input.trim());
    setInput('');
  };

  return (
    <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full max-w-2xl p-4">
      <form
        onSubmit={handleSubmit}
        className="rounded-xl border border-border bg-background focus-within:ring-1 focus-within:ring-ring transition outline-none"
      >
        <div className="p-3 space-y-3">
          <input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder={placeholder}
            className="w-full resize-none bg-transparent text-foreground placeholder-muted-foreground focus:outline-none"
          />

          <div className="flex items-center justify-between text-sm text-muted-foreground">
            <div className="flex items-center gap-1 hover:text-foreground cursor-pointer">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-4 h-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15.172 7l-6.586 6.586a2 2 0 002.828 2.828l6.586-6.586a4 4 0 00-5.656-5.656l-6.586 6.586a6 6 0 108.486 8.486L20.5 13"
                />
              </svg>
              <span className="font-semibold">Templates</span>
            </div>

            <Button
              type="submit"
              variant="ghost"
              aria-label="Send"
              disabled={!input.trim()}
              className={`w-11 h-11 rounded-full flex items-center justify-center shadow ${
                input.trim() ? 'bg-accent hover:bg-accent/80' : 'opacity-50 cursor-not-allowed'
              }`}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-5 h-5"
                fill="none"
                stroke="white"
                strokeWidth={1}
                strokeLinecap="round"
                strokeLinejoin="round"
                viewBox="0 0 24 24"
              >
                <path d="M3.714 3.048a.498.498 0 0 0-.683.627l2.843 7.627a2 2 0 0 1 0 1.396l-2.842 7.627a.498.498 0 0 0 .682.627l18-8.5a.5.5 0 0 0 0-.904z" />
                <path d="M6 12h16" />
              </svg>
            </Button>
          </div>
        </div>
      </form>
    </div>
  );
}
