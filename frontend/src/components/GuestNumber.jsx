import { Input } from "./ui/input";
import { Button } from "./ui/button";

export default function GuestNumber({ guests, setGuests }) {
  const incrementGuests = () => {
    if (guests < 20) {
      setGuests(Number(guests) + 1);
    }
  };

  const decrementGuests = () => {
    if (guests > 1) {
      setGuests(Number(guests) - 1);
    }
  };

  const handleInputChange = (e) => {
    const value = Number(e.target.value);
    if (value >= 1 && value <= 20) {
      setGuests(value);
    }
  };

  return (
    <div className="flex items-center gap-2">
      <Button
        variant="outline"
        size="icon"
        onClick={decrementGuests}
        disabled={guests <= 1}
        className="h-12"
      >
        -
      </Button>
      <Input
        type="number"
        value={guests}
        onChange={handleInputChange}
        className="w-20 h-12 text-center"
        min={1}
        max={20}
      />
      <Button
        variant="outline"
        size="icon"
        onClick={incrementGuests}
        disabled={guests >= 20}
        className="h-12"
      >
        +
      </Button>
    </div>
  );
}
