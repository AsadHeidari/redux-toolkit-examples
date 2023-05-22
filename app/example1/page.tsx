"use client";

import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addUser, deleteUser, updateUsername } from "./features/usersSlice";
import { RootState } from "../store";

function Page() {
  const dispatch = useDispatch();
  const userList = useSelector((state: RootState) => state.users.value);

  // this states for getting input from user
  const [name, setName] = useState("");
  const [username, setUsername] = useState("");
  const [newUsername, setNewUsername] = useState("");

  return (
    <>
      <div className="p-10">
        <h1 className="font-semibold text-black">example1 - users</h1>
        <hr className="mt-2" />

        {/* Make user */}
        <div className="py-2">
          <input
            type="text"
            placeholder="Name..."
            onChange={(e) => {
              setName(e.target.value);
            }}
          />
          <input
            type="text"
            placeholder="Username..."
            className="ml-2"
            onChange={(e) => {
              setUsername(e.target.value);
            }}
          />
          <button
            className="ml-2 bg-slate-400"
            onClick={() => {
              dispatch(
                addUser({
                  id: userList[userList.length - 1].id + 1,
                  name,
                  username,
                })
              );
            }}
          >
            Add User
          </button>
        </div>

        {/* Read information from store */}
        <div>
          {userList.map((usr: any, index: number) => {
            return (
              <div
                className="p-2 mt-2 rounded-md bg-cyan-700 text-gray-50"
                key={index}
              >
                <span className="font-semibold">Name: </span>
                <span> {usr.name} | </span>
                <span className="font-semibold">Username: </span>
                <span>{usr.username}</span>

                <button
                  onClick={() => {
                    dispatch(deleteUser({ id: usr.id }));
                  }}
                  className="ml-4 bg-red-400"
                >
                  Delete
                </button>
                {/* Update Process */}
                <div className="mt-2">
                  <input
                    type="text"
                    placeholder="New Username..."
                    onChange={(e) => {
                      setNewUsername(e.target.value);
                    }}
                  />
                  <button
                    className="ml-4 bg-green-700"
                    onClick={() =>
                      dispatch(
                        updateUsername({ id: usr.id, username: newUsername })
                      )
                    }
                  >
                    Update
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}

export default Page;
