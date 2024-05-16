import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import Title from "../components/Title";

export default function Dashboard() {
  return (
    <>
      <Title text="Dashboard" />
      <Navbar />
      <Hero />
    </>
  );
}
