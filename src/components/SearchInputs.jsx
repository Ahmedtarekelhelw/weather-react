const SearchInputs = ({ setCorrd, coord, fetchWeather, loading, setError }) => {
  const handleChange = (e) => {
    setCorrd({
      ...coord,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // get the form values
    const formData = Object.fromEntries(new FormData(e.target));

    // check if the lat & lon is true values
    if (formData.lat != 0 && formData.lon != 0) {
      fetchWeather();
      return;
    }
    setError("plaese Enter a valid lat and Long");
  };
  return (
    <form onSubmit={handleSubmit}>
      <label>Latitude</label>
      <input
        name="lat"
        step="any"
        type="number"
        placeholder="Enter latitude"
        value={coord.lat}
        onChange={(e) => handleChange(e)}
      />
      <label>Longitude</label>
      <input
        name="lon"
        type="number"
        placeholder="Enter longitude"
        value={coord.lon}
        step="any"
        onChange={(e) => handleChange(e)}
      />
      <button type="submit" disabled={loading}>
        {loading ? "Loading..." : "Search"}
      </button>
    </form>
  );
};

export default SearchInputs;
