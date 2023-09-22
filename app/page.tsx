"use client";
import React, { useEffect, useState } from "react";
import './styles/style.css'

const FetchWebsite = ({ url }: { url: string }) => {
  const [hasError, setHasError] = useState(false);

  useEffect(() => {
    const abortController = new AbortController();

    const getSiteAvailability = async () => {
      try {
	await fetch(url, { mode: 'no-cors', signal: abortController.signal });
	setHasError(false);
      } catch (err) {
	setHasError(true);
      }
    }

    getSiteAvailability();

    return () => abortController.abort();
  }, [url]);

  return (
    <div>
      {hasError ? (
        <div className="error">
          An error occurred while loading the website.
        </div>
      ) : (
	<iframe
	  src={url}
	  style={{
	    width: "100%",
	    height: "600px",
	    border: "none"
	  }}
	  ></iframe>
      )}
    </div>
  );
};

const Home = () => {
  const [url, setUrl] = useState("");

  return (
    <div>
      <h1 className="title">Webpage Viewer</h1>
      <div>
        <input
          type="text"
          value={url}
          onChange={(e) => setUrl(e.target.value)}
          placeholder="Enter URL"
        />
      </div>
      <div>{url && <FetchWebsite url={url} />}</div>
    </div>
  );
};

export default Home;
