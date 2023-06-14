import React, { useEffect, useState } from "react";
// import { Link } from "react-router-dom";
import Detail from "./Detail";

function Home() {
  const [data, setData] = useState(null);
  const [selectedItem, setSelectedItem] = useState(null);
  const [isLoading, setisLoading] = useState(true);
  const [error, setError] = useState(true);

  useEffect(() => {
    fetch("https://swapi.dev/api/people")
      .then((res) => res.json())
      .then((value) => setData(value));
    setisLoading(false);
    setError(false);
  }, []);
  return (
    <>
      <div className="root">
        {data ? (
          <>
            {data.results.map((result) => (
              <>
                <div className="card">
                  <div className="content">
                    <p className="heading">
                      Name of Actor: <i>{result.name}</i>
                    </p>
                    <p className="heading">
                      Height of Actor:<i> {result.height}</i>
                    </p>
                    <p className="heading">
                      Date of Birth: <i>{result.birth_year}</i>
                    </p>
                    <button
                      onClick={() => setSelectedItem(result)}
                      className="btn"
                    >
                      Detail
                    </button>
                  </div>
                </div>
              </>
            ))}
          </>
        ) : (
          (() => {
            if (isLoading) {
              <h1>Loading ....</h1>;
            }
            if (error) {
              <h1>Error fetching data</h1>;
            }
          })()
        )}
      </div>
      {selectedItem && <Detail detail={selectedItem} />}
    </>
  );
}

export default Home;
