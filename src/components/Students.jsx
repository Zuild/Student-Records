export default function Student({ index, name, department, finalGrade, status }) {
  return (
    <tr>
      <td>{index + 1}</td>
      <td>{name}</td>
      <td>{department}</td>
      <td>{status ? finalGrade : 'N/A'}</td>
      <td>{status ? 'Pass' : 'Fail'}</td>
    </tr>
  );
}


const Students = () => {

  const students = [
    { name: 'Zuild', department: 'Science', finalGrade: 95, status: true },
    { name: 'Zean', department: 'Arts', finalGrade: 82, status: true },
    { name: 'Junrih', department: 'Commerce', finalGrade: 70, status: true },
    { name: 'Louie', department: 'Science', status: false },
    { name: 'Shein', department: 'Arts', finalGrade: 68, status: true },
    { name: 'Ashie', department: 'Commerce', finalGrade: 78, status: true },
    { name: 'Alaiza', department: 'Science', finalGrade: 88, status: true },
    { name: 'Kenneth', department: 'Arts', finalGrade: 76, status: true },
    { name: 'Ritch', department: 'Commerce', finalGrade: 92, status: true },
    { name: 'Kerwin', department: 'Science', status: false }
  ];

  return (
    <div className="App">
      <h1>Student Records</h1>
      <table>
        <thead>
          <tr>
            <th>No.</th>
            <th>Student Names</th>
            <th>Department</th>
            <th>Final Grade</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {students.map((student, index) => (
            <Student
              key={index}
              index={index}
              name={student.name}
              department={student.department}
              finalGrade={student.finalGrade}
              status={student.status}
            />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export { Students }; 
