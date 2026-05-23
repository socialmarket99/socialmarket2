export default function ListingCard({ item }) {
  return (
    <div className="card">
      <h3>{item.platform}</h3>
      <p>Account: {item.name}</p>
      <p>Price: ${item.price}</p>
      <p>Seller: {item.seller}</p>

      <button onClick={() => alert("Contact " + item.seller)}>
        Buy Now
      </button>
    </div>
  );
}
