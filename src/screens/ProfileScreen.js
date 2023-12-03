import React from 'react'
import Nav from '../Nav'
import './ProfileScreen.css'
import { useSelector } from 'react-redux'

import { selectUser } from '../features/userSlice'
import { auth } from '../firebase'
function ProfileScreen() {
  const user=useSelector(selectUser)
  return (
    <div className="profileScreen">
      
         <Nav/>
         
        <div className="profileScreen__body">
        <h1>Edit profile</h1>
        <div className="profileScreen__info">
        <img
        src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBwgHBgkIBwgKCgkLDRYPDQwMDRsUFRAWIB0iIiAdHx8kKDQsJCYxJx8fLT0tMTU3Ojo6Iys/RD84QzQ5OjcBCgoKDQwNGg8PGjclHyU3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3N//AABEIAHsAewMBEQACEQEDEQH/xAAbAAEAAwEBAQEAAAAAAAAAAAAAAQUGBAcDAv/EADQQAAIBAwEFBQYFBQAAAAAAAAABAgMEBREGEiExkRNBUWGBBxRxgqHBIjJisdIVIyRC0f/EABsBAQADAQEBAQAAAAAAAAAAAAABAwUEBgIH/8QAKBEBAAIBAwMCBgMAAAAAAAAAAAECAwQFERIhMUFRFCIyQnGRE2GB/9oADAMBAAIRAxEAPwDlNh+fAAAAAAAAAAAAAAAAAEgQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAEgQAAAAAAAAAkCAAAAAXWymFWbyTpVZSjb0o79Xd5vjokvDX7FObJ0R2d+g0sajJxbxDfV9kcJVtnRjZRpcOFSm2prz17/U44zXieeXob7fprV6enh5llbKeNyNxZVJb0qM93e8VzT6NHfS3VXl5bU4f4cs4/ZyH2oAAAJAgA6MfaTv76haUmlOtNQTfJeL6as+b26azK7BinLkiker1C02QwtC2VKdnGtLT8VSo25S8/L0M+c95nnl6mm3aalenp5YXa/BwwmQhG3lJ21dOVNSerjpzjr393U7MGWbx3YO4aSumvHT4lQlzOAAAC82RzUMLk3UuE3b1oblRxWrjx1T08inNjm9ezQ27VRp8nzeJeg19qMLRt3V/qNCpotVCnLem/l5nFGK8zxw9FbW6eterrh5blr6WSydzezjuOtPXd8Elol0SNClemvDyupzfzZZye7kPtzgAAAAAdONvJ4+/t7ymtZUainp4rvXQ+b16qzC7T5Zw5IvHo9UtdqsLcW6re/0aTa1dOrPdkvLR8/QzpxXieOHrKa7T3r1dUMFtnnKWayFP3Xe92t4uMJNab7b4vTw4I7MGOaR3YG5auuoyRFfEM+XswAAAASBAAAAAAAAAABIACAAAABIEAAAEgQAAAAABCafJp/AJ4SEAAAAAAAAF7sba427y/ZZRxcezfZQnLSM56rh07ijPa0V+Vpbbjw5MvGX/ABpMvsFQqylUxVfsJPj2VXVw9HzX1KKamY7WaWo2elp5xTwzF3srm7RvesZ1Yr/ai1NP0XH6HRGek+rKybbqafbz+FdLHX8fz2N3H40Jr7FnXX3c/wAPmj7Z/T60cPlK0t2ljrt+fYyS6tETkpHq+q6TPbxSVtY7E5m5adenStYeNWab6R1+xVbU0jw7MW057/V2anGbF4vHx7a9fvc48W62ipr5f+6nPfPa3aGrh2vBh+a3dQ7eZPFXqt7fH9nUrUZveq04/hUdPyp9/dy4cC7T1vHMyz90z4LxFcfeYZA6mKAAAAAAAAAldYzanL45KFO57akuVO4W+l8Hz+pTfBSzvwbjnxdueY/torT2hwa0vMdKP6qNTX6NL9yidLPpLRpvVfvr+nctv8TpxoXqfhuR/kfPw118bvp5jvy/FX2gY1L+1a3c3+pRS/cRpr+qLbxgjxEyqrz2g3dRNWdlRo+EqknN9OBZXSx6y5Mm9Xn6K8flnMjmMhk3/m3dSpHuhyivlXAvpjrXxDMzavNm+uzhLHOgIAASBAAAAAAAAAAAAAAABIEAAAAAACQIAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABIACAJAgAAAAAP/9k="
          alt=""/>
           <div className="profileScreen__details">
           <h2>{user.email}</h2>
           <div className="profileScreen__plans">
              <h3>Plans</h3>
            <button onClick={()=>auth.signOut()}
              className="profileScreen__signOut">Sign Out</button>
           </div>
           </div>
        </div>
        </div>
        </div>
       
  )
}

export default ProfileScreen