import Competencies from "./03-Competencies";
import WhoAmI from "./02-Who";
import Projects from "./04-Projetos";

export default function LeftTab() {
  return (
    <>
      <div>
        <nav>
          <WhoAmI />
        </nav>
        <nav>
          <Competencies />
        </nav>
        <nav>
          <Projects />
        </nav>
      </div>
    </>
  );
}
