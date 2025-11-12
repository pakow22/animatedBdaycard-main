"use client";

export default function ErrorPage({ error, reset }: any) {
  return (
    <div style={{ padding: 40, fontFamily: "sans-serif" }}>
      <h1>Error</h1>
      <p>{String(error)}</p>
      <button
        onClick={() => reset()}
        style={{ marginTop: 20, padding: "10px 20px", cursor: "pointer" }}
      >
        Reload
      </button>
    </div>
  );
}
