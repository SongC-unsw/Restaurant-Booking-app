export default function SearchBar({ handleSearch }) {
  const onHandleSearch = (e) => {
    e.preventDefault();
    handleSearch();
    // TODO: implement handleSearch in parent component
  };
  return (
    <div>
      <form onSubmit={onHandleSearch}>
        <input type="text" placeholder="Search for a restaurant" />
        <input type="text" placeholder="Location" />
        <input type="datetime" name="" id="" />
        <input type="number" placeholder="Number of guests" />
        <button type="submit">Search</button>
      </form>
    </div>
  );
}
