import React, { useState } from "react";
import {
  AiOutlineMenuFold,
  AiOutlineMenuUnfold,
  AiOutlineUp,
  AiOutlineDown,
  AiOutlineDashboard,
  AiOutlineForm,
  AiOutlineTable,
  AiOutlineCheckCircle,
  AiOutlineProfile,
  AiOutlineUser,
  AiOutlineWarning,
  AiOutlineHighlight,
} from "react-icons/ai";

const Sidebar = ({
  changePage,
  analysis,
  monitor,
  workplace,
  onFold,
  onUnfold,
  fold,
}) => {
  const [dashboard, setDashboard] = useState(true);
  const [form, setForm] = useState(false);
  const [list, setList] = useState(false);
  const [profile, setProfile] = useState(false);
  const [result, setResult] = useState(false);
  const [exception, setException] = useState(false);
  const [account, setAccount] = useState(false);
  const [graphic, setGraphic] = useState(false);
  const [searchList, setSearchList] = useState(false);

  return (
    <div
      className={`fixed  top-0 left-0 h-screen z-[-10] overflow-y-scroll scrollbar-hide shadow-2xl ${
        fold ? "w-[8%]" : "w-[8%]  md:w-[15%]"
      }`}
    >
      <span
        className="flex justify-between items-center mt-16 hover:text-blue-500 cursor-pointer mb-3"
        onClick={() => {
          onUnfold();
          setDashboard(!dashboard);
        }}
      >
        <p
          className={`flex items-center font-normal text-sm pl-4 ${
            dashboard && "text-blue-500"
          }`}
        >
          <AiOutlineDashboard />
          {!fold && <p className="pl-2  hidden md:block">Dashboard</p>}
        </p>
        {!fold &&
          (dashboard ? (
            <AiOutlineUp className="w-3 mr-4 hidden md:block" />
          ) : (
            <AiOutlineDown className="w-3 mr-4 hidden md:block" />
          ))}
      </span>
      {dashboard && (
        <span className="w-full text-sm  hidden md:block">
          <p
            className={`pl-8 py-3 cursor-pointer hover:text-blue-500 mb-2 ${
              analysis &&
              "text-blue-500 bg-[#e6f7ff] border-r-4 border-blue-500"
            }`}
            onClick={() => changePage("analysis")}
          >
            Analysis
          </p>
          <p
            className={`pl-8 py-3 cursor-pointer hover:text-blue-500 mb-2 ${
              monitor && "text-blue-500 bg-[#e6f7ff] border-r-4 border-blue-500"
            }`}
            onClick={() => changePage("monitor")}
          >
            Monitor
          </p>
          <p
            className={`pl-8 py-3 cursor-pointer hover:text-blue-500 mb-2 ${
              workplace &&
              "text-blue-500 bg-[#e6f7ff] border-r-4 border-blue-500"
            }`}
            onClick={() => changePage("workplace")}
          >
            Workplace
          </p>
        </span>
      )}

      <span
        className="flex justify-between items-center mt-7 hover:text-blue-500 cursor-pointer mb-3"
        onClick={() => {
          onUnfold();
          setForm(!form);
        }}
      >
        <p
          className={`flex items-center font-normal text-sm pl-4  ${
            form && "text-blue-500"
          }`}
        >
          <AiOutlineForm />
          {!fold && <p className="pl-2 hidden md:block">Form</p>}
        </p>
        {!fold &&
          (form ? (
            <AiOutlineUp className="w-3 mr-4 hidden md:block" />
          ) : (
            <AiOutlineDown className="w-3 mr-4 hidden md:block" />
          ))}
      </span>
      {form && (
        <span className="w-full text-sm hidden md:block">
          <p className="pl-8 pt-7 hover:text-blue-500 cursor-pointer mb-2">
            Basic Form
          </p>
          <p className="pl-8 pt-7 hover:text-blue-500 cursor-pointer mb-2">
            Step Form
          </p>
          <p className="pl-8 pt-7 hover:text-blue-500 cursor-pointer mb-2">
            Advanced Form
          </p>
        </span>
      )}

      <span
        className="flex justify-between items-center mt-7 hover:text-blue-500 cursor-pointer"
        onClick={() => {
          onUnfold();
          setList(!list);
        }}
      >
        <p
          className={`flex items-center font-normal text-sm pl-4 ${
            list && "text-blue-500"
          }`}
        >
          <AiOutlineTable />
          {!fold && <p className="pl-2 hidden md:block">List</p>}
        </p>
        {!fold &&
          (list ? (
            <AiOutlineUp className="w-3 mr-4 hidden md:block" />
          ) : (
            <AiOutlineDown className="w-3 mr-4 hidden md:block" />
          ))}
      </span>
      {list && (
        <span className="w-full text-sm hidden md:block">
          <span
            className="flex mt-7 text-sm items-center justify-between hover:text-blue-500 cursor-pointer "
            onClick={() => setSearchList(!searchList)}
          >
            <p className={`pl-8 hidden md:block ${searchList && "text-blue-500"}`}>
              Search List
            </p>
            {searchList ? (
              <AiOutlineUp className="w-3 mr-4 hidden md:block" />
            ) : (
              <AiOutlineDown className="w-3 mr-4 hidden md:block" />
            )}
          </span>
          {searchList && (
            <span className="text-sm w-full hidden md:block">
              <p className="pl-12 overflow-hidden pt-7 hover:text-blue-500 cursor-pointer">
                Search List(Articles)
              </p>
              <p className="pl-12 overflow-hidden pt-7 hover:text-blue-500 cursor-pointer">
                Search List(Projects)
              </p>
              <p className="pl-12 overflow-hidden pt-7 hover:text-blue-500 cursor-pointer">
                Search List(Applications)
              </p>
            </span>
          )}
          <p className="pl-8 pt-7 hover:text-blue-500 cursor-pointer">
            Search Table
          </p>
          <p className="pl-8 pt-7 hover:text-blue-500 cursor-pointer">
            Basic List
          </p>
          <p className="pl-8 pt-7 hover:text-blue-500 cursor-pointer">
            Card List
          </p>
        </span>
      )}

      <span
        className="flex justify-between items-center mt-7 hover:text-blue-500 cursor-pointer mb-3"
        onClick={() => {
          onUnfold();
          setProfile(!profile);
        }}
      >
        <p
          className={`flex items-center font-normal text-sm pl-4 ${
            profile && "text-blue-500"
          }`}
        >
          <AiOutlineProfile />
          {!fold && <p className="pl-2 hidden md:block">Profile</p>}
        </p>
        {!fold &&
          (profile ? (
            <AiOutlineUp className="w-3 mr-4 hidden md:block" />
          ) : (
            <AiOutlineDown className="w-3 mr-4 hidden md:block" />
          ))}
      </span>
      {profile && (
        <span className="w-full text-sm hidden md:block">
          <p className="pl-8 pt-7 hover:text-blue-500 cursor-pointer mb-2">
            Basic Profile
          </p>
          <p className="pl-8 pt-7 hover:text-blue-500 cursor-pointer mb-2">
            Advanced Profile
          </p>
        </span>
      )}

      <span
        className="flex justify-between items-center mt-7 hover:text-blue-500 cursor-pointer mb-3"
        onClick={() => {
          onUnfold();
          setResult(!result);
        }}
      >
        <p
          className={`flex items-center font-normal text-sm pl-4 ${
            result && "text-blue-500"
          }`}
        >
          <AiOutlineCheckCircle />
          {!fold && <p className="pl-2 hidden md:block">Result</p>}
        </p>
        {!fold &&
          (result ? (
            <AiOutlineUp className="w-3 mr-4 hidden md:block" />
          ) : (
            <AiOutlineDown className="w-3 mr-4 hidden md:block" />
          ))}
      </span>
      {result && (
        <span className="w-full text-sm hidden md:block">
          <p className="pl-8 pt-7 hover:text-blue-500 cursor-pointer mb-2">
            Success
          </p>
          <p className="pl-8 pt-7 hover:text-blue-500 cursor-pointer mb-2">
            Fail
          </p>
        </span>
      )}

      <span
        className="flex justify-between items-center mt-7 hover:text-blue-500 cursor-pointer mb-3"
        onClick={() => {
          onUnfold();
          setException(!exception);
        }}
      >
        <p
          className={`flex items-center font-normal text-sm pl-4 ${
            exception && "text-blue-500"
          }`}
        >
          <AiOutlineWarning />
          {!fold && <p className="pl-2 hidden md:block">Exception</p>}
        </p>
        {!fold &&
          (exception ? (
            <AiOutlineUp className="w-3 mr-4 hidden md:block" />
          ) : (
            <AiOutlineDown className="w-3 mr-4 hidden md:block" />
          ))}
      </span>
      {exception && (
        <span className="w-full text-sm hidden md:block">
          <p className="pl-8 pt-7 hover:text-blue-500 cursor-pointer mb-2">
            403
          </p>
          <p className="pl-8 pt-7 hover:text-blue-500 cursor-pointer mb-2">
            404
          </p>
          <p className="pl-8 pt-7 hover:text-blue-500 cursor-pointer mb-2">
            500
          </p>
        </span>
      )}

      <span
        className="flex justify-between items-center mt-7 hover:text-blue-500 cursor-pointer mb-3"
        onClick={() => {
          onUnfold();
          setAccount(!account);
        }}
      >
        <p
          className={`flex items-center font-normal text-sm pl-4 ${
            account && "text-blue-500"
          }`}
        >
          <AiOutlineUser />
          {!fold && <p className="pl-2 hidden md:block">Account</p>}
        </p>
        {!fold &&
          (account ? (
            <AiOutlineUp className="w-3 mr-4 hidden md:block" />
          ) : (
            <AiOutlineDown className="w-3 mr-4 hidden md:block" />
          ))}
      </span>
      {account && (
        <span className="w-full text-sm hidden md:block">
          <p className="pl-8 pt-7 hover:text-blue-500 cursor-pointer mb-2">
            Account Center
          </p>
          <p className="pl-8 pt-7 hover:text-blue-500 cursor-pointer mb-2">
            Account Settings
          </p>
        </span>
      )}

      <span
        className="flex justify-between items-center mt-7 hover:text-blue-500 cursor-pointer mb-3"
        onClick={() => {
          onUnfold();
          setGraphic(!graphic);
        }}
      >
        <p
          className={`flex items-center font-normal text-sm pl-4 ${
            graphic && "text-blue-500"
          }`}
        >
          <AiOutlineHighlight />
          {!fold && <p className="pl-2 hidden md:block">Graphic Editor</p>}
        </p>
        {!fold &&
          (graphic ? (
            <AiOutlineUp className="w-3 mr-4 hidden md:block" />
          ) : (
            <AiOutlineDown className="w-3 mr-4 hidden md:block" />
          ))}
      </span>
      {graphic && (
        <span className="w-full text-sm hidden md:block">
          <p className="pl-8 pt-7 hover:text-blue-500 cursor-pointer mb-2">
            Flow Editor
          </p>
          <p className="pl-8 pt-7 hover:text-blue-500 cursor-pointer mb-2">
            Mind Editor
          </p>
          <p className="pl-8 pt-7 hover:text-blue-500 cursor-pointer mb-2">
            Koni Editor
          </p>
        </span>
      )}
      <div className="w-[15%] fixed bottom-6 left-0 bg-wheet z-100">
        {fold ? (
          <AiOutlineMenuUnfold
            className="ml-4 cursor-pointer"
            onClick={onUnfold}
          />
        ) : (
          <AiOutlineMenuFold className="ml-4 cursor-pointer" onClick={onFold} />
        )}
      </div>
    </div>
  );
};

export default Sidebar;
