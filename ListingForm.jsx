import { useState } from "react";

export default function ListingForm({ addListing }) {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [platform, setPlatform] = useState("Instagram");

  return (
    <div className="card">
      <select onChange={(e) => setPlatform(e.target.value)}>
        <option>Instagram</option>
        <option>TikTok</option>
        <option>Facebook</option>
      </select>

      <input
        placeholder="Account name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

      <input
        placeholder="Price"
        value={price}
        onChange={(e) => setPrice(e.target.value)}
      />

      <button onClick={() => addListing(name, price, platform)}>
        Add Listing
      </button>
    </div>
  );
}
