import Header from "./components/Header";
import CardList from "./components/CardList";
import CardDataProvider from "./context/CardDataProvider";
import "./App.css";

export default function App() {
  return (
    <main className="h-full w-full font-spartan bg-cyan-200 space-y-8 ">
      <CardDataProvider>
        <Header />
        <CardList />
      </CardDataProvider>
    </main>
  );
}
