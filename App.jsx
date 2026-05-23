import { useEffect, useMemo, useState } from "react";

export default function App() {
  const [user, setUser] = useState(null);
  const [loginForm, setLoginForm] = useState({ name: "" });

  const [listings, setListings] = useState(() => {
    const saved = localStorage.getItem("listings");
    return saved
      ? JSON.parse(saved)
      : [
          {
            id: 1,
            title: "YouTube Tech Channel",
            followers: "120K subscribers",
            price: "$850",
            desc: "Tech reviews and tutorials channel",
            seller: "Admin",
          },
          {
            id: 2,
            title: "Instagram Travel Page",
            followers: "45K followers",
            price: "$300",
            desc: "Travel photos and reels page",
            seller: "Admin",
          },
        ];
  });

  useEffect(() => {
    localStorage.setItem("listings", JSON.stringify(listings));
  }, [listings]);

  const [form, setForm] = useState({
    title: "",
    followers: "",
    price: "",
    desc: "",
  });

  function login() {
    if (!loginForm.name) return;
    setUser({ name: loginForm.name });
  }

  function logout() {
    setUser(null);
  }

  function addListing() {
    if (!form.title || !form.price) return;

    const newItem = {
      id: Date.now(),
      ...form,
      seller: user?.name || "Guest",
    };

    setListings([newItem, ...listings]);
    setForm({ title: "", followers: "", price: "", desc: "" });
  }

  function buyItem(item) {
    alert(`Buying: ${item.title} (Demo)`);
  }

  if (!user) {
    return (
      <div style={styles.center}>
        <div style={styles.card}>
          <h2>Login Marketplace</h2>
          <input
            style={styles.input}
            placeholder="Enter name"
            value={loginForm.name}
            onChange={(e) => setLoginForm({ name: e.target.value })}
          />
          <button style={styles.button} onClick={login}>
            Enter
          </button>
        </div>
      </div>
    );
  }

  return (
    <div style={styles.page}>
      <div style={styles.header}>
        <h2>Digital Marketplace</h2>
        <div>
          Hi, {user.name}{" "}
          <button style={styles.button} onClick={logout}>
            Logout
          </button>
        </div>
      </div>

      <div style={styles.card}>
        <h3>Create Listing</h3>

        <input
          style={styles.input}
          placeholder="Title"
          value={form.title}
          onChange={(e) => setForm({ ...form, title: e.target.value })}
        />
        <input
          style={styles.input}
          placeholder="Followers"
          value={form.followers}
          onChange={(e) => setForm({ ...form, followers: e.target.value })}
        />
        <input
          style={styles.input}
          placeholder="Price"
          value={form.price}
          onChange={(e) => setForm({ ...form, price: e.target.value })}
        />
        <input
          style={styles.input}
          placeholder="Description"
          value={form.desc}
          onChange={(e) => setForm({ ...form, desc: e.target.value })}
        />

        <button style={styles.button} onClick={addListing}>
          Publish
        </button>
      </div>

      <div style={styles.grid}>
        {listings.map((item) => (
          <div key={item.id} style={styles.card}>
            <h3>{item.title}</h3>
            <p>Seller: {item.seller}</p>
            <p>{item.followers}</p>
            <p>{item.desc}</p>
            <b>{item.price}</b>
            <button style={styles.button} onClick={() => buyItem(item)}>
              Buy Now
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

const styles = {
  page: {
    background: "#000",
    color: "white",
    minHeight: "100vh",
    padding: 20,
    fontFamily: "Arial",
  },
  header: {
    display: "flex",
    justifyContent: "space-between",
    marginBottom: 20,
  },
  center: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "100vh",
    background: "#000",
    color: "white",
  },
  card: {
    background: "#111",
    padding: 20,
    marginBottom: 20,
    borderRadius: 10,
  },
  input: {
    display: "block",
    width: "100%",
    padding: 10,
    margin: "10px 0",
  },
  button: {
    padding: 10,
    background: "green",
    color: "white",
    border: "none",
    cursor: "pointer",
    marginTop: 10,
  },
  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit,minmax(250px,1fr))",
    gap: 10,
  },
};
