
import AllStudent from "./AllStudents";
import PresentList from "./PresentList";
import AbsentStud from  "./AbsentList";

const StudentSection = (props) => {

  const toggleStudent = (id) => {
    const student = props.studentList.find(student => student.id === id)
    student.isPresent = !student.isPresent
    props.setStudentList([...props.studentList])
  }

    return (
         <div className="student-section">
            <AllStudent
              studentList={props.studentList}
              setStudentList={props.setStudentList}
              setIsEditable={props.setIsEditable}
              setEditableStudent={props.setEditableStudent}
              setStudentName={props.setStudentName}
            />
        <hr />
        <PresentList
          studentList={props.studentList}
          toggleStudent={toggleStudent}
        />
        <hr />
        <AbsentStud
          studentList={props.studentList}
          toggleStudent={toggleStudent}
        />
        </div>
    )
}
export default StudentSection;