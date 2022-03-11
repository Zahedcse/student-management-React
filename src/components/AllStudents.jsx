

const AllStudent = (props) => {

  // to delete student
  const deleteStudent = (id) => {
    props.setStudentList(props.studentList.filter(student => student.id !== id))
  }

  // to edit student
  const editStudent = (id) => {
    const tobeEdited = props.studentList.find(student => student.id === id)
    props.setStudentName(tobeEdited.name)
    props.setIsEditable(true)
    props.setEditableStudent(tobeEdited)
  }

  // to Present student
  const presentStudent = (id) => {
    const student = props.studentList.find(student => student.id === id)
    if (student.isPresent === undefined) {
      student.isPresent = true
      props.setStudentList([...props.studentList])
    }else if(student.isPresent === true){
      alert('Student is already in present List')
    }else if(student.isPresent === false){
      alert('Student is already in absent List try accdentally added button')
    }
  }
  // to Absent student
  const absentStudent = (id) => {
    const student = props.studentList.find(student => student.id === id)
    if (student.isPresent === undefined) {
      student.isPresent = false
      props.setStudentList([...props.studentList])
    }else if(student.isPresent === false){
      alert('Student is already in absent List')
    }else if(student.isPresent === true){
      alert('Student is already in present List try accdentally added button')
    }
  }

    return (
        <div className="all-students">
              <h2 className='title'>Student List</h2>
              <table className='table is-striped'>
                <thead>
                  <tr>
                    <th>ID</th>
                    <th>Name</th>
                    <th>Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {props.studentList.map(student => (
                    <tr>
                      <td>{student.id}</td>
                      <td>{student.name}</td>
                      <td> <button className='button is-small is-primary' onClick={
                          () => editStudent(student.id)}>Edit</button>
                        <button className='button is-small is-danger' onClick={
                          () => deleteStudent(student.id)}>Delete</button>
                        <button className='button is-small is-success' onClick={
                          () => presentStudent(student.id)} >Present</button>
                        <button className='button is-small is-danger' onClick={
                          () => absentStudent(student.id)}>Absent</button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
    )
}
export default AllStudent;