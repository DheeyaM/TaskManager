function Profile({name, course, year}) {
    return (
        <div style={{display: "flex", flexDirection: "column", border: "2px solid black", padding: "10px", margin: "10px", borderRadius: "5px", width: "200px", backgroundColor: "#e7e7e7"}}>
           <h2 style= {{padding: "10px"}}>{name}</h2>
           <p>{course} - {year}</p>
        </div>
    )
}

export default Profile;