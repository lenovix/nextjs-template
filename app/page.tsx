"use client";
import React, { useState } from "react";
import './styles/style.css'

const FetchWebsite = ({ url }: { url: string }) => {
  const [hasError, setHasError] = useState(false);

  const handleIframeError = () => {
    setHasError(true);
  };

  return (
    <div>
      {hasError ? (
        <div className="error">
          An error occurred while loading the website.
        </div>
      ) : (
        <iframe
          src={url}
          title="Webpage Viewer"
          style={{ width: "100%", height: "600px", border: "none" }}
          onError={handleIframeError}
        />
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
