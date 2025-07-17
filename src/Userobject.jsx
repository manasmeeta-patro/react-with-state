function UserObj({email="new user",roll="not decleraed"}){
  //  console.log(props);
    return(
        <div>
            <h1> inside user comp</h1>
            <p> roll= {roll}</p>
            <p> E-mail= {email}   </p>
        </div>
    )

}
export default UserObj;