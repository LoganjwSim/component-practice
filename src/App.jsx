import Footer from "./components/Footer";
import Header from "./components/Header";
import Main from "./components/Main";
import Side from "./components/Side"

const App = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <div className="grow flex flex-row-reverse md:flex-row">
        <Side />
        <Main />
      </div>
      <Footer />
    </div>
  );
};

export default App;
