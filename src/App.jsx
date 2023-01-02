import Header from "./components/Header";
import Card from "./components/Card";
import CardList from "./components/CardList";
import "./App.css";

export default function App() {
  return (
    <main className="h-full w-full font-spartan bg-cyan-200 space-y-8">
      <Header />
       <CardList />
    </main>
  );
}
