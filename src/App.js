import "./index.css";
import "./css/utils.css";
import { Navbar, Header, Features , Download, Subscribe, Faq, Footer} from "./components/indexs"; 
// Importing from an external source

function App() {
  return (
    <div>
      <main>
        <header className="header-bg">
          <Navbar />
          <Header />
        </header>
          <Features/>
          <Download/>
          <Subscribe/>
          <Faq/>
          <Footer/>
      </main>
    </div>
  );
}

export default App;
