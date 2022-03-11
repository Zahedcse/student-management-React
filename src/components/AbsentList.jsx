const AbsentStud = (props) => {
  return (
       <div className="Absent-students">
              <h2 className='title'>Absent Students</h2>
              <table className='table is-striped'>
                <thead>
                  <tr>
                    <th>ID</th>
                    <th>Name</th>
                    <th>Actions</th>
                  </tr>
                </thead>
                <tbody>
                  { props.studentList.filter(student => student.isPresent === false).map(student=> (
                    <tr>
                      <td>{student.id }</td>
                      <td>{student.name }</td>
                      <td> <button className='button is-small is-primary'
                      onClick={()=>props.toggleStudent(student.id)}>Toggle Present</button></td>
                    </tr>
                  ))}
                </tbody>
               </table>
            </div>
     )
}

export default AbsentStud;
