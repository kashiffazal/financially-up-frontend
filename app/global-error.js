"use client";

import "./globals.css";

const GlobalError = () => {
  return (
    // global-error must include html and body tags
    <html>
      <body className="flex justify-center items-center h-screen">
        <div className="text-center">
          <h2 className="text-2xl mb-4">Something went wrong!</h2>
          <button
            className="border-2 border-emerald-700 rounded-[8px] bg-emerald-700 hover:bg-white text-white p-4 hover:text-emerald-700 transition-all cursor-pointer"
            onClick={() => window.location.reload()}
          >
            Try again
          </button>
        </div>
      </body>
    </html>
  );
};

export default GlobalError;
