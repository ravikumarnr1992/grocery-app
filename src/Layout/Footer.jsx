import React from "react";

const Footer = () => {
  return (
    <div className="fixed bottom-0 border-t border-gray-100 w-full">
      <div className="lg:pb-0 xl:pb-0 bg-gray-200">
        <div className="mx-auto max-w-screen-2xl px-4 sm:px-10">
          <div className="mx-auto max-w-screen-2xl px-3 sm:px-10 flex justify-center py-4">
            <p className="text-sm text-gray-500 leading-6">
              Copyright 2024 @
              <a
                rel="noopener noreferrer"
                className="text-emerald-500"
                href="#"
              >
                Grocery Store
              </a>
              , All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
