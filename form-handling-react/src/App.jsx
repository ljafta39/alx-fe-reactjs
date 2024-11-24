import React from "react";
import { QueryClient, QueryClientProvider } from "react-query";
import PostsComponent from "./components/PostsComponent";
import RegistrationForm from "./components/RegistrationForm";
import { ReactQueryDevtools } from "react-query/devtools";



const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
  <div>
    <h1>User Registration and Posts</h1>
    <RegistrationForm />
    <PostsComponent />
  </div>
  <ReactQueryDevtools initialIsOpen={false} />
</QueryClientProvider>
  );
}

export default App;
