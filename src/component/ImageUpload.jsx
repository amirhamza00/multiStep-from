import React, { useState } from "react";
import ImageCrop from "./ImageCrop";

const ImageUpload = ({ setInput, data, handleNext, handlePrev }) => {
  return (
    <div className="mt-10">
      <div className="my-5">
        <div>
          {data.profilePhoto && (
            <>
              <h4 className="text-gray-500 font-medium my-2">
                Profile Image Preview:
              </h4>

              <img src={data.profilePhoto} alt="" />
            </>
          )}
        </div>
      </div>

      <div className="my-5">
        <div>
          {data.signaturePhoto && (
            <>
              <h4 className="text-gray-500 font-medium my-2">
                Signature Image Preview:
              </h4>
              <img src={data.signaturePhoto} alt="" />
            </>
          )}
        </div>
      </div>
      <ImageCrop
        onChange={(image) =>
          setInput((prev) => ({ ...prev, profilePhoto: image }))
        }
      />
      <ImageCrop
        onChange={(image) =>
          setInput((prev) => ({ ...prev, signaturePhoto: image }))
        }
      />

      <div className="flex justify-end gap-5 mt-10">
        <button
          onClick={handlePrev}
          className="bg-gray-600 py-2 px-5 text-white"
        >
          Previous
        </button>

        {data.profilePhoto && data.signaturePhoto ? (
          <button
            onClick={handleNext}
            className="bg-violet-600 py-2 px-5 text-white"
          >
            Submit
          </button>
        ) : (
          <button className="bg-violet-600 py-2 px-5 text-white">
            Fill All Input
          </button>
        )}
      </div>
    </div>
  );
};

export default ImageUpload;
