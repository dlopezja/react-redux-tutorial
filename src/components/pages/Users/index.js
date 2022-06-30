function UsersComponent({ users }) {
    console.log('users :>> ', users);
    return (
      <div>
        <h3>Users List</h3>
        {users?.map(element => {
          return <div key={element.id}> {element.id} - {element.username} - {element.email} -{element.password} </div>
        })}
      </div>
    );
  }
  
  export default UsersComponent;
  