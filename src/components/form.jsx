

const FormElement = (props) => {
    const addStudent = (e) => {
    e.preventDefault()
    if (props.studentName) {
      const newStudent = {
        id: Date.now(),
        name: props.studentName,
      }
      props.setStudentList([newStudent, ...props.studentList])
      props.setStudentName('')
    } else {
      alert('Please enter a name')
    }
    }
    const updateStudent = (e) => {
    e.preventDefault()
    props.editableStudent.name = props.studentName
    props.setStudentName('')
    props.setIsEditable(false)
    props.setEditableStudent(null)
  }

    return (
        <form>
            <input className='input is-primary' type="text" name="s_name"
                value={props.studentName} onChange={(e) =>
                    props.setStudentName(e.target.value)} />
            <br />
            <br />
            <button className='button is-primary' onClick={(e) =>
                props.isEditable === true ? updateStudent(e) : addStudent(e)}>
                {props.isEditable === true ? "Update" : "Add Student"}</button>
        </form>
    )
}

export default FormElement;