"use client";

import React from "react";
import { UploadButton } from "@/utils/uploadthing";
const UploadIMG = () => {
  const [file, setFile] = React.useState<string | null>(null);
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <UploadButton
        endpoint="imageUploader"
        onClientUploadComplete={(res) => {
          // Do something with the response
          setFile(res[0].url);
        }}
        onUploadError={(error: Error) => {
          // Do something with the error.
          alert(`ERROR! ${error.message}`);
        }}
      />
      {file && (
        <div className="flex">
          <p className="text-2xl mt-4 text-center  ">{file}</p>
          <button
            className="ml-4 bg-yellow-500 px-4 py-2 rounded"
            onClick={() => {
              navigator.clipboard.writeText(file);
            }}
          >
            Copy
          </button>
        </div>
      )}
    </main>
  );
};

export default UploadIMG;
