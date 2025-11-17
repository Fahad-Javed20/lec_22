import { useState } from "react";
import type { UserType } from "../types/UserType";

interface UserFormProps {
  onAddUser: (user: UserType) => void;
}

const UserForm = ({ onAddUser }: UserFormProps) => {
  const [formData, setFormData] = useState<UserType>({
    username: "Fahad bin Javed",
    nationality: "Pakistani"
  });

  const handelSubmit = (event: React.FormEvent) => {
    event.preventDefault();

    onAddUser({
      username: formData.username,
      nationality: formData.nationality
    });
  };

  return (
    <div className="flex justify-center">
      <form className="w-1/3" onSubmit={handelSubmit}>
        <h1 className="bg-black text-white text-2xl py-2 font-semibold">
          User Registration Form
        </h1>

        <div className="flex gap-4 flex-col mt-5">
          <input
            onChange={(e) =>
              setFormData({ ...formData, username: e.target.value })
            }
            className="border h-8 px-2"
            type="text"
            value={formData.username}
            placeholder="User Name"
          />

          <input
            onChange={(e) =>
              setFormData({ ...formData, nationality: e.target.value })
            }
            className="border h-8 px-2"
            type="text"
            value={formData.nationality}
            placeholder="Nationality"
          />
        </div>

        <button
          className="bg-blue-600 text-white py-2 mt-4 px-4 w-40 rounded-md shadow-2xl"
          type="submit"
        >
          ADD USER
        </button>
      </form>
    </div>
  );
};

export default UserForm;
