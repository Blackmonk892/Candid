import { Route, Routes } from "react-router";
import "./App.css";
import { Toaster } from "react-hot-toast";

function App() {
  const { isSignedIn } = useUser();
  return (
    <>
      <Routes>
        <h1>Welcome to Candid</h1>
        <Route path="/" element={<HomePage />} />

        <Route
          path="/problems"
          element={isSignedIn ? <ProblemsPage /> : <Navigate to={"/"} />}
        />
      </Routes>

      <Toaster />
    </>
  );
}

export default App;
