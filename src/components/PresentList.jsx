const PresentList = (props) => {
    return (
        <div className="present-students">
              <h2 className='title'>Present Students</h2>
              <table className='table is-striped'>
                <thead>
                  <tr>
                    <th>ID</th>
                    <th>Name</th>
                    <th>Actions</th>
                  </tr>
                </thead>
                <tbody>
                  { props.studentList.filter(student => student.isPresent === true).map(student => (
                    <tr>
                      <td>{ student.id}</td>
                      <td>{student.name }</td>
                      <td> <button className='button is-small is-primary'
                      onClick={()=>props.toggleStudent(student.id)}>Toggle Absent</button></td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
    )
}
export default PresentList;