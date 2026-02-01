import { useState } from "react";

function StudentForm({ addStudent }) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [course, setCourse] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    addStudent({ name, email, course });
    setName("");
    setEmail("");
    setCourse("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input placeholder="Name" value={name}
        onChange={(e) => setName(e.target.value)} /><br /><br />

      <input placeholder="Email" value={email}
        onChange={(e) => setEmail(e.target.value)} /><br /><br />

      <input placeholder="Course" value={course}
        onChange={(e) => setCourse(e.target.value)} /><br /><br />

      <button>Add Student</button>
    </form>
  );
}

export default StudentForm;
