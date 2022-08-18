import Nav from "./components/Nav";
import Hero from "./components/Hero";

const App = () => {
  return (
    <div className="bg-gray-100">
      <div className="mx-auto max-w-7xl flex flex-col h-screen">
        <Nav />
        <Hero />
      </div>
    </div>
  );
};

export default App;
