import { useState } from 'react';
import './App.css';
import 'bulma/css/bulma.min.css'
import StudentSection from './components/studentSection';
import  FormElement  from './components/form';
function App() {

  const [studentName, setStudentName] = useState('');
  const [studentList, setStudentList] = useState([]);
  const [editableStudent, setEditableStudent] = useState(null);
  const [isEditable, setIsEditable] = useState(false);
  
  return (
    <div className="App">
      <div className="container column is-half-desktop">
        <div className="box">
          <h1 className="title">Student Management</h1>
          <FormElement
            studentName={studentName}
            setStudentName={setStudentName}
            studentList={studentList}
            setStudentList={setStudentList}
            editableStudent={editableStudent}
            setEditableStudent={setEditableStudent}
            isEditable={isEditable}
            setIsEditable={setIsEditable}
          />
          <hr />
          <StudentSection
            studentName={studentName}
            setStudentName={setStudentName}
            studentList={studentList}
            setStudentList={setStudentList}
            editableStudent={editableStudent}
            setEditableStudent={setEditableStudent}
            isEditable={isEditable}
            setIsEditable={setIsEditable}
          />
          <hr />
        </div>
      </div>
    </div>
  );
}

export default App;
