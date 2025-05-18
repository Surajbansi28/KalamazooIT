import Expertise from "./components/expertise/expertise";
import Introduction from "./components/introduction/introduction";
import Navbar from "./components/navbar/navbar";
import Work from "./components/work/work";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Introduction />
      <Work />
      <Expertise/>
    </main>
  );
}
