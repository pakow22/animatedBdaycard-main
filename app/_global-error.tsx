"use client";

export default function GlobalError({ error, reset }: any) {
  return (
    <html>
      <body style={{ padding: 40, fontFamily: "sans-serif" }}>
        <h1>Something went wrong.</h1>
        <pre>{String(error)}</pre>
        <button
          onClick={() => reset()}
          style={{ marginTop: 20, padding: "10px 20px", cursor: "pointer" }}
        >
          Try again
        </button>
      </body>
    </html>
  );
}
