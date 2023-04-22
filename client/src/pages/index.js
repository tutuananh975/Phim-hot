import HomePage from "./home/HomePage";

import { QueryClient, QueryClientProvider } from "react-query";

export default function Home() {
  const queryClient = new QueryClient();
  return (
    <QueryClientProvider contextSharing={true} client={queryClient}>
      <HomePage />
    </QueryClientProvider>
  );
}
