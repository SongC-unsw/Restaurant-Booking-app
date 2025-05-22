import DatePicker from "./DatePicker";
import GuestNumber from "./GuestNumber";
import { useState, useEffect } from "react";

export default function SearchBar({ handleSearch }) {
  const [date, setDate] = useState(new Date());
  const [guests, setGuests] = useState(2);
  const [searchTerm, setSearchTerm] = useState("");
  const [location, setLocation] = useState("");

  const onHandleSearch = (e) => {
    e.preventDefault();
    handleSearch({
      searchTerm,
      location,
      date,
      guests,
    });
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <form
        onSubmit={onHandleSearch}
        className="flex flex-col md:flex-row gap-4 items-end"
      >
        <div className="flex-1">
          <input
            type="text"
            placeholder="Search for a restaurant"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full h-12 px-3 rounded-md border"
          />
        </div>
        <div className="flex-1">
          <input
            type="text"
            placeholder="Location"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            className="w-full h-12 px-3 rounded-md border"
          />
        </div>
        <DatePicker selected={date} setDate={setDate} />
        <GuestNumber guests={guests} setGuests={setGuests} />
        <button
          type="submit"
          className="bg-primary text-white px-6 py-2 rounded-md hover:bg-primary/90"
        >
          Search
        </button>
      </form>
    </div>
  );
}
