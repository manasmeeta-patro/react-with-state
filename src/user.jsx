function User({name="new user",age="not decleraed"}){
  //  console.log(props);
    return(
        <div>
            <h1> inside user comp</h1>
            <p>name======{name} age= {age}</p>
        </div>
    )

}
export default User;