export default function Login({ user, setUser }) {
  return (
    <div className="card">
      <input
        placeholder="Enter username"
        value={user}
        onChange={(e) => setUser(e.target.value)}
      />
    </div>
  );
}
