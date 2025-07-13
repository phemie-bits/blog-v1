"use client";

export default function Loading() {
  return (
    <div
      style={{
        display: "flex",
        height: "100vh",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#f9fafb",
        flexDirection: "column",
      }}
    >
      <div
        style={{
          width: "48px",
          height: "48px",
          border: "6px solid #cbd5e1",
          borderTop: "6px solid #3b82f6",
          borderRadius: "50%",
          animation: "spin 1s linear infinite",
        }}
      />
      <p style={{ marginTop: "16px", color: "#4b5563", fontSize: "16px" }}>
        Loading, please wait...
      </p>

      <style>
        {`
          @keyframes spin {
            0% { transform: rotate(0deg); }
            100% { transform: rotate(360deg); }
          }
        `}
      </style>
    </div>
  );
}
