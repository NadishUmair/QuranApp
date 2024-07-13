import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaRegEyeSlash, FaRegEye } from "react-icons/fa";

const AdminTeacher = () => {
  const [teachers, setTeachers] = useState([]);
  const [form, setForm] = useState({
    id: null,
    name: "",
    email: "",
    course: "",
    password: "",
  });
  const [showPassword, setShowPassword] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (form.id) {
      setTeachers(
        teachers.map((teacher) => (teacher.id === form.id ? form : teacher))
      );
    } else {
      setTeachers([...teachers, { id: Date.now(), ...form }]);
    }
    setForm({ id: null, name: "", email: "", course: "", password: "" });
  };

  const editTeacher = (teacher) => {
    setForm(teacher);
  };

  const deleteTeacher = (id) => {
    const updatedTeachers = teachers.filter((teacher) => teacher.id !== id);
    setTeachers(updatedTeachers);
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className="fixed inset-0 z-50 flex justify-center items-center bg-opacity-50 bg-black">
      <div className="lg:w-[60%] w-full h-full p-2 mx-2 bg-white rounded-lg shadow-lg">
        <Link to="/admin" className="text-gray-500">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6 cursor-pointer"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </Link>
        <div className="p-4 max-w-4xl mx-auto">
          <form
            onSubmit={handleSubmit}
            className="mb-6 p-4 bg-white rounded-lg shadow-md"
          >
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <input
                type="text"
                name="name"
                value={form.name}
                onChange={handleChange}
                placeholder="Name"
                required
                className="p-2 border border-gray-300 rounded-md"
              />
              <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                placeholder="Email"
                required
                className="p-2 border border-gray-300 rounded-md"
              />
              <input
                type="text"
                name="course"
                value={form.course}
                onChange={handleChange}
                placeholder="Course"
                required
                className="p-2 border border-gray-300 rounded-md"
              />
              <div className="relative">
                <input
                  type={showPassword ? "text" : "password"}
                  name="password"
                  value={form.password}
                  onChange={handleChange}
                  placeholder="Password"
                  required
                  className="p-2 border border-gray-300 rounded-md w-full"
                />
                <button
                  type="button"
                  onClick={togglePasswordVisibility}
                  className="absolute inset-y-0 right-0 px-3 py-2 focus:outline-none"
                >
                  {showPassword ? (
                    <FaRegEyeSlash className="h-6 w-6 text-gray-500" />
                  ) : (
                    <FaRegEye className="h-6 w-6 text-gray-500" />
                  )}
                </button>
              </div>
            </div>
            <button
              type="submit"
              className="mt-4 w-full md:w-auto p-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition"
            >
              {form.id ? "Update" : "Add"} Teacher
            </button>
          </form>

          <div className="overflow-x-auto h-64">
            <table className="w-full table-auto bg-white rounded-lg shadow-md">
              <thead>
                <tr className="bg-gray-100 text-left">
                  <th className="p-2 border-b">Name</th>
                  <th className="p-2 border-b">Email</th>
                  <th className="p-2 border-b">Course</th>
                  <th className="p-2 border-b">Actions</th>
                </tr>
              </thead>
              <tbody>
                {teachers.map((teacher) => (
                  <tr key={teacher.id} className="hover:bg-gray-50">
                    <td className="p-2 border-b">{teacher.name}</td>
                    <td className="p-2 border-b">{teacher.email}</td>
                    <td className="p-2 border-b">{teacher.course}</td>
                    <td className="p-2 border-b space-x-2">
                      <button
                        onClick={() => editTeacher(teacher)}
                        className="p-1 bg-yellow-400 text-white rounded-md hover:bg-yellow-500 transition"
                      >
                        Edit
                      </button>
                      <button
                        onClick={() => deleteTeacher(teacher.id)}
                        className="p-1 bg-red-500 text-white rounded-md hover:bg-red-600 transition"
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminTeacher;
