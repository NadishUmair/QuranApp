import React, { useState } from "react";
import { Link } from "react-router-dom";

const AdminCourse = () => {
  const [courses, setCourses] = useState([]);
  const [form, setForm] = useState({
    id: null,
    courseName: "",
    teacherName: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (form.id) {
      setCourses(
        courses.map((course) => (course.id === form.id ? form : course))
      );
    } else {
      setCourses([...courses, { id: Date.now(), ...form }]);
    }
    setForm({ id: null, courseName: "", teacherName: "" });
  };

  const editCourse = (course) => {
    setForm(course);
  };

  const deleteCourse = (id) => {
    const updatedCourses = courses.filter((course) => course.id !== id);
    setCourses(updatedCourses);
  };

  return (
    <div className="fixed inset-0 z-50 flex justify-center items-center bg-opacity-50 bg-black">
      <div className="lg:w-[80%] w-full h-full p-2 mx-2 bg-white rounded-lg shadow-lg">
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
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <input
                type="text"
                name="courseName"
                value={form.courseName}
                onChange={handleChange}
                placeholder="Course Name"
                required
                className="p-2 border border-gray-300 rounded-md"
              />
              <input
                type="text"
                name="teacherName"
                value={form.teacherName}
                onChange={handleChange}
                placeholder="Teacher Name"
                required
                className="p-2 border border-gray-300 rounded-md"
              />
            </div>
            <button
              type="submit"
              className="mt-4 w-full md:w-auto p-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition"
            >
              {form.id ? "Update" : "Add"} Course
            </button>
          </form>

          <div className="overflow-x-auto h-64">
            <table className="w-full table-auto bg-white rounded-lg shadow-md">
              <thead>
                <tr className="bg-gray-100 text-left">
                  <th className="p-2 border-b">Course Name</th>
                  <th className="p-2 border-b">Teacher Name</th>
                  <th className="p-2 border-b">Actions</th>
                </tr>
              </thead>
              <tbody>
                {courses.map((course) => (
                  <tr key={course.id} className="hover:bg-gray-50">
                    <td className="p-2 border-b">{course.courseName}</td>
                    <td className="p-2 border-b">{course.teacherName}</td>
                    <td className="p-2 border-b space-x-2">
                      <button
                        onClick={() => editCourse(course)}
                        className="p-1 bg-yellow-400 text-white rounded-md hover:bg-yellow-500 transition"
                      >
                        Edit
                      </button>
                      <button
                        onClick={() => deleteCourse(course.id)}
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

export default AdminCourse;
