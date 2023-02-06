import React, { useState } from "react";
import LoadingBar from "react-top-loading-bar";
import AccountInfo from "../../component/AccountInfo";
import ImageUpload from "../../component/ImageUpload";
import PersonalInfo from "../../component/PersonalInfo";
import { FaUnlock } from "react-icons/fa";
import { MdOutlineAccountCircle } from "react-icons/md";
import { AiOutlineCamera } from "react-icons/ai";
import { BsCheckLg } from "react-icons/bs";

const Login = () => {
  const [step, setStep] = useState(1);
  const [progress, setProgress] = useState(25);

  const [allInput, setAllInput] = useState({
    email: "",
    userName: "",
    password: "",
    confirmPassword: "",

    firstName: "",
    lastName: "",
    contactNo: "",
    altContact: "",

    profilePhoto: "",
    signaturePhoto: "",
  });

  const handleNext = () => {
    setStep((prev) => prev + 1);
    setProgress((prev) => prev + 25);
  };

  const handlePrevious = () => {
    setStep((prev) => prev - 1);
    setProgress((prev) => prev - 25);
  };

  return (
    <div className="flex justify-center">
      <div className="p-8 w-2/4">
        <div className="text-center">
          <h3 className="font-medium text-violet-600 text-3xl uppercase">
            Sign Up Your User Account
          </h3>
          <h6 className="text-base text-gray-400 my-2">
            Fill all form Field to go to next step
          </h6>
        </div>

        {/* step */}

        <div className="relative mt-16">
          <div className="w-full bg-gray-200 rounded h-1 dark:bg-gray-700">
            <div
              class="bg-violet-700 h-1 rounded"
              style={{ width: `${progress}%` }}
            ></div>
          </div>
          <div className="absolute -top-6 left-2 flex justify-around w-full">
            <div className="bg-violet-700 w-14 h-14 rounded-full flex justify-center items-center">
              <FaUnlock className="text-lg text-white" />
            </div>

            <div
              className={
                step >= 2
                  ? "bg-violet-700 w-14 h-14 rounded-full flex justify-center items-center"
                  : "bg-gray-300 w-14 h-14 rounded-full flex justify-center items-center"
              }
            >
              <MdOutlineAccountCircle className="text-lg text-white" />
            </div>

            <div
              className={
                step >= 3
                  ? "bg-violet-700 w-14 h-14 rounded-full flex justify-center items-center"
                  : "bg-gray-300 w-14 h-14 rounded-full flex justify-center items-center"
              }
            >
              <AiOutlineCamera className="text-lg text-white" />
            </div>

            <div
              className={
                step >= 4
                  ? "bg-violet-700 w-14 h-14 rounded-full flex justify-center items-center"
                  : "bg-gray-300 w-14 h-14 rounded-full flex justify-center items-center"
              }
            >
              <BsCheckLg className="text-lg text-white" />
            </div>
          </div>
        </div>

        {/* bar */}

        <div className="mt-20">
          <div className="w-full bg-gray-200 rounded h-5 dark:bg-gray-700">
            <div
              class="bg-violet-600 h-5 rounded"
              style={{ width: `${progress}%` }}
            ></div>
          </div>
        </div>

        <div className="mt-20">
          <div>
            <div className="flex justify-between">
              <h3 className="text-lg text-violet-700 font-semibold">
                {step === 1
                  ? "Account Information"
                  : step === 2
                  ? "Personal Information"
                  : step === 3
                  ? "Image Upload"
                  : "Finish"}
              </h3>
              <h3 className="text-2xl text-gray-500 font-semibold">
                Step {step} - 4
              </h3>
            </div>
          </div>

          {step === 1 ? (
            <AccountInfo
              setInput={setAllInput}
              data={allInput}
              handleNext={handleNext}
            />
          ) : step === 2 ? (
            <PersonalInfo
              setInput={setAllInput}
              data={allInput}
              handleNext={handleNext}
              handlePrev={handlePrevious}
            />
          ) : step === 3 ? (
            <ImageUpload
              setInput={setAllInput}
              data={allInput}
              handleNext={handleNext}
              handlePrev={handlePrevious}
            />
          ) : (
            <>
              <div className="text-center mt-10">
                <h4 className="text-violet-700 text-3xl font-bold ">
                  SUCCESS !
                </h4>

                <h6 className="text-violet-700 text-base font-semibold mt-20">
                  You Have Successfully Signed Up
                </h6>
              </div>
            </>
          )}
        </div>
        {/* <div>
          {step === 4 ? (
            <div className="text-center my-10 ">
              <h3 className="text-violet-500 text-lg mt-10 font-semibold">
                You Have Successfully Signed Up
              </h3>
            </div>
          ) : (
            <div className="flex justify-end gap-5 mt-10">
              {" "}
              {step > 1 && (
                <button
                  onClick={handlePrevious}
                  className="bg-gray-600 py-2 px-5 text-white"
                >
                  Previous
                </button>
              )}
              <button
                onClick={handleNext}
                className="bg-violet-600 py-2 px-5 text-white"
              >
                {step >= 3 ? "Submit" : "Next"}
              </button>
            </div>
          )}
        </div> */}
      </div>
    </div>
  );
};

export default Login;
