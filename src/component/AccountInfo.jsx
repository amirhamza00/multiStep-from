import React, { useState } from "react";
import { AiFillEye } from "react-icons/ai";

const AccountInfo = ({ setInput, data, handleNext, handlePrev }) => {
  const [showPassword, setShowPassword] = useState({
    passwordMain: false,
    confirmPassword: false,
  });

  return (
    <div>
      <div className="flex my-5 flex-col">
        <label htmlFor="" className="text-gray-500 font-medium mb-2">
          Email: *
        </label>
        <input
          value={data.email}
          onChange={(e) =>
            setInput((prev) => ({ ...prev, email: e.target.value }))
          }
          type="email"
          placeholder="Email Id"
          className="border border-gray-300 h-10 bg-slate-200 px-2 w-full"
        />
      </div>

      <div className="flex my-5 flex-col">
        <label htmlFor="" className="text-gray-500 font-medium mb-2">
          Username: *
        </label>
        <input
          onChange={(e) =>
            setInput((prev) => ({ ...prev, userName: e.target.value }))
          }
          value={data.userName}
          type="text"
          placeholder="User Name"
          className="border border-gray-300 h-10 bg-slate-200 px-2 w-full"
        />
      </div>

      <div className="flex my-5 flex-col">
        <label htmlFor="" className="text-gray-500 font-medium mb-2">
          Password: *
        </label>
        <div className="relative">
          {" "}
          <input
            value={data.password}
            onChange={(e) =>
              setInput((prev) => ({ ...prev, password: e.target.value }))
            }
            type={showPassword.passwordMain ? "text" : "password"}
            placeholder="Password"
            className="border border-gray-300 h-10 bg-slate-200 px-2 w-full"
          />
          <AiFillEye
            onClick={() =>
              setShowPassword((prev) => ({
                ...prev,
                passwordMain: !showPassword.passwordMain,
              }))
            }
            className="text-2xl absolute top-2 right-5 cursor-pointer text-gray-500"
          />
        </div>
      </div>

      <div className="flex my-5 flex-col">
        <label htmlFor="" className="text-gray-500 font-medium mb-2">
          Confirm Password: *
        </label>
        <div className="relative">
          <input
            value={data.confirmPassword}
            onChange={(e) =>
              setInput((prev) => ({ ...prev, confirmPassword: e.target.value }))
            }
            type={showPassword.confirmPassword ? "text" : "password"}
            placeholder="Confirm Password"
            className={
              data.password === data.confirmPassword
                ? "border border-gray-300 h-10 bg-slate-200 px-2 w-full"
                : "border border-red-600 h-10 bg-slate-200 px-2 w-full"
            }
          />
          <AiFillEye
            onClick={() =>
              setShowPassword((prev) => ({
                ...prev,
                confirmPassword: !showPassword.confirmPassword,
              }))
            }
            className="text-2xl absolute top-2 right-5 cursor-pointer text-gray-500"
          />
        </div>
      </div>

      <div className="flex justify-end gap-5">
        <>
          {data.email &&
          data.userName &&
          data.password &&
          data.confirmPassword ? (
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

export default AccountInfo;
