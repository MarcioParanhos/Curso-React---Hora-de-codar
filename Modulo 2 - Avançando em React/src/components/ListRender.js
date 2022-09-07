import { useState } from "react"

const ListRender = () => {
    const [list] = useState(["Marcio", "Vera", "Stephane"]);
    
    const users = useState([
        { id: 54135, name: "Marcio", age: 29 },
        { id: 86486, name: "Vera", age: 69 },
        { id: 255, name: "Stephane", age: 20 },
    ]);
    
    return (
        <div>
            <ul>
                {list.map((item, i) => (
                    <li key={i}>{item}</li>
                ))}
            </ul>
            <ul>
                {users.map((user) => (
                    <li key={user.id}>{user.name} - {user.age}</li>
                ))}
            </ul>
        </div>
    )
}

export default ListRender