function User(props){
    console.log(props);
    return(
        <div>
            <h1> inside user comp</h1>
            <p>name======{props.name}</p>
        </div>
    )

}
export default User;