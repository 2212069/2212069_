import React, { useEffect, useState } from "react";

function App() {
  const [doctors, setDoctors] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8008/doctors")
      .then((res) => res.json())
      .then((data) => setDoctors(data))
      .catch((err) => console.error("Error fetching doctors:", err));
  }, []);

  return (
    <div style={{ padding: "20px", fontFamily: "Arial" }}>
      <h1>Doctors List</h1>
      {doctors.length > 0 ? (
        <ul>
          {doctors.map((doc) => (
            <li key={doc.id}>
              <strong>{doc.name}</strong> - {doc.specialization}
            </li>
          ))}
        </ul>
      ) : (
        <p>No doctors found</p>
      )}
    </div>
  );
}

export default App;
