import Header from "./Header";

const App = () => {
    const name = "James Paolo Rili";
    return (
        <>
        <Header/>
        <div className="content">
            <p className="text-3xl font-bold">{name}</p>
        </div>
        </>
  );
};

export default App;
