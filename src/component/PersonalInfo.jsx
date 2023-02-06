import React from "react";

const PersonalInfo = ({ setInput, data, handlePrev, handleNext }) => {
  const handleKeyDown = (e) => {
    if (e.key === " ") {
      e.preventDefault();
    }
  };
  return (
    <div>
      <div className="flex my-5 flex-col">
        <label htmlFor="" className="text-gray-500 font-medium mb-2">
          First Name: *
        </label>
        <input
          value={data.firstName}
          onChange={(e) =>
            setInput((prev) => ({ ...prev, firstName: e.target.value }))
          }
          onKeyDown={handleKeyDown}
          type="text"
          placeholder="First Name"
          className="border border-gray-300 h-10 bg-slate-200 px-2 w-full"
        />
      </div>

      <div className="flex my-5 flex-col">
        <label htmlFor="" className="text-gray-500 font-medium mb-2">
          Last Name: *
        </label>
        <input
          value={data.lastName}
          onChange={(e) =>
            setInput((prev) => ({ ...prev, lastName: e.target.value }))
          }
          onKeyDown={handleKeyDown}
          type="text"
          placeholder="Last Name"
          className="border border-gray-300 h-10 bg-slate-200 px-2 w-full"
        />
      </div>

      <div className="flex my-5 flex-col">
        <label htmlFor="" className="text-gray-500 font-medium mb-2">
          Contact No.: *
        </label>
        <input
          value={data.contactNo}
          onChange={(e) =>
            setInput((prev) => ({ ...prev, contactNo: e.target.value }))
          }
          type="number"
          placeholder="Contact No."
          className="border border-gray-300 h-10 bg-slate-200 px-2 w-full"
        />
      </div>

      <div className="flex my-5 flex-col">
        <label htmlFor="" className="text-gray-500 font-medium mb-2">
          Alternative Contact No.: *
        </label>
        <input
          value={data.altContact}
          onChange={(e) =>
            setInput((prev) => ({ ...prev, altContact: e.target.value }))
          }
          type="number"
          placeholder="Alternative Contact No."
          className="border border-gray-300 h-10 bg-slate-200 px-2 w-full"
        />
      </div>

      <div className="flex justify-end gap-5">
        <button
          onClick={handlePrev}
          className="bg-gray-600 py-2 px-5 text-white"
        >
          Previous
        </button>
        <>
          {data.firstName &&
          data.lastName &&
          data.contactNo &&
          data.altContact ? (
            <button
              onClick={handleNext}
              className="bg-violet-600 py-2 px-5 text-white"
            >
              Next
            </button>
          ) : (
            <button className="bg-violet-600 py-2 px-5 text-white">
              Fill All Input
            </button>
          )}
        </>
      </div>
    </div>
  );
};

export default PersonalInfo;
