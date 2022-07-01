function UsersComponent({ users }) {
    console.log('users :>> ', users);
    return (
      <div>
        <h3>User List</h3>
        {users?.map(element => {
          return <span key={element}>-{element} </span>
        })}
      </div>
    );
  }
  
  export default UsersComponent;
  