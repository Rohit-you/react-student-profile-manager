function StudentList({ students, deleteStudent }) {
  return (
    <div>
      <h3>Student List</h3>

      {students.length === 0 ? (
        <p>No students added</p>
      ) : (
        students.map((student, index) => (
          <div className="student-card">
            <p><b>Name:</b> {student.name}</p>
            <p><b>Email:</b> {student.email}</p>
            <p><b>Course:</b> {student.course}</p>
            <button onClick={() => deleteStudent(index)}>Delete</button>
          </div>
        ))
      )}
    </div>
  );
}

export default StudentList;
