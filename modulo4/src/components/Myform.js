import styles from './MyForm.module.css'
import { useState } from 'react'

const Myform = ({ user }) => {
    const [name, setName] = useState(user ? user.name : " ")
    const [email, setEmail] = useState(user ? user.email : " ")
    const [bio, setBio] = useState("")

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log(name, email, bio)
        setEmail("")
        setName("")
        setBio("")
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <label>
                    <span>Nome:</span>
                    <input value={name} type="text" name="name" placeholder="Digite o seu Nome " onChange={(e) => setName(e.target.value)} />
                </label>
                <label>
                    <span>E-mail:</span>
                    <input value={email} type="email" name="email" placeholder="Dgite seu email" onChange={(e) => setEmail(e.target.value)} />
                </label>
                <label>
                    <span>Bio:</span>
                    <textarea name="bio" placeholder='Desclição do usuario' onChange={(e) => setBio(e.target.value)} value={bio}></textarea>
                </label>
                <input type="submit" value="Enviar" />
            </form>
        </div>
    )
}

export default Myform