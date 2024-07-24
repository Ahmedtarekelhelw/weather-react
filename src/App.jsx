// Components
import Card from "./components/Card";
import SearchInputs from "./components/SearchInputs";

// Hooks
import useFetchWeather from "./hooks/useFetchWeather";

function App() {
  const { cards, coord, error, fetchWeather, loading, setCorrd, setError } =
    useFetchWeather();

  return (
    <div className="card-container">
      <div className="header">
        <h3 className="header-text">City Information</h3>
        <p className="header-paragraph">
          Explore city details based on latitude and longitude.
        </p>
      </div>
      {error && <p className="error">{error}</p>}
      <SearchInputs
        setCorrd={setCorrd}
        loading={loading}
        coord={coord}
        fetchWeather={fetchWeather}
        setError={setError}
      />

      <div className="cards">
        {cards.length > 0 &&
          cards?.map((card) => (
            <Card key={card.id} cardData={card} loading={loading} />
          ))}
        {loading && <p className="loading">Loading....</p>}
      </div>
    </div>
  );
}

export default App;
