import { PromptField } from '@/components/ui/promptField';
import { useState } from 'react';
import { toast } from 'sonner';
import { fetchUser } from '@/services/fetchClient';
import type { GitHubUser } from '@/models/GithubUser';
import axios from 'axios';

export default function Home() {
  const [user, setUser] = useState<GitHubUser | null>(null);

  const logUserMessage = async (message: string) => {
    try {
      await axios.post(import.meta.env.VITE_API, { message: message });
    } catch {
      // TODO
    }
  };

  const handleSubmit = async (message: string) => {
    try {
      await logUserMessage(message);
    } catch {
      // TODO
    }
    try {
      const user = await fetchUser(message);
      setUser(user);
    } catch (error) {
      toast.error(error instanceof Error ? error.message : String(error));
    }
  };

  return (
    <div className="relative h-screen w-screen overflow-hidden">
      <div className="grid place-items-center h-full w-full">
        {user ? (
          <div className="flex flex-col items-center space-y-4">
            <img src={user.avatar_url} alt={user.login} className="w-24 h-24 rounded-full border" />
            <h2 className="text-xl font-bold">{user.name || user.login}</h2>
            <p className="text-muted-foreground">{user.bio || 'No bio'}</p>
            <a
              href={user.html_url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 underline"
            >
              View Profile
            </a>
            <h1 className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-muted-foreground via-foreground to-muted-foreground">
              More....
            </h1>
          </div>
        ) : (
          <h1 className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-muted-foreground via-foreground to-muted-foreground">
            Soon....
          </h1>
        )}
      </div>

      <PromptField onSubmit={handleSubmit} />
    </div>
  );
}

{
  /* <div className="absolute top-4 right-4 z-10">
          <ModeToggle />
        </div> */
}
