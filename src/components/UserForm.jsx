import React, { useState, } from "react";
import MyButton from "./UI/button/MyButton";
import MyInput from "./UI/MyInput/MyInput";
import InputMask from "react-input-mask";


const UserForm = ({create}) => {
    const [user, setUser] = useState( {name:'',username: '',email: '',phone: '',address:{zipcode: ''}})

    


    const addNewUser = (e) => {
        e.preventDefault()
            const newUser = {
            ...user, id: Date.now()
        }
        create(newUser)
        setUser( {name:'',username: '',email: '',phone: '',address:{zipcode: ''}})
    }

    const [phone, ] = React.useState("");
    
    return (
        <form> 
                <h1>Добавить пользователя</h1>
            <p>
                <label> Введите ваш ФИО:
                    <MyInput 
                        value={user.name} 
                        onChange={e => setUser(  {...user, name: e.target.value})} 
                        type="text" placeholder="ФИО"/>
                </label>
            </p>

            <p>
                <label> Введите ваше пользовательское имя:
                    <MyInput value={user.username}
                        onChange={e => setUser(  {...user, username: e.target.value})}
                        type="text" 
                        placeholder="Имя пользователя"/>
                </label>
            </p>
            
            <p>
                <label> Введите ваш E-mail:
                    <MyInput value={user.email}
                        onChange={e => setUser(  {...user, email: e.target.value})}  
                        type="email" 
                        placeholder="E-mail"/>
                </label>
            </p>

            <p>
                <label> Введите ваш номер телефона:
                    <InputMask 
                        style={{width: "100%",
                        padding: "5px 15px",
                        margin: "5px 0",
                        border: "3px solid rgba(255, 255, 255, 0.438)",
                        borderRadius: "16px"}}
                        value={phone,user.phone} 
                        onChange={e => setUser(  {...user, phone: e.target.value})}
                        mask="+7\(999)999-99-99"
                        placeholder="+7(999)999-99-99"
                        maskChar=""/>
                </label>
            </p>

            <p>
                <label> Введите ваш почтовый индекс:
                    <MyInput 
                        value={user.zipcode}
                        onChange={e => setUser(  {...user, zipcode: e.target.value})} 
                        placeholder="zipcode"/>   
                </label>
            </p>
            <MyButton 
                onClick={addNewUser}> 
                Добавить пользователя 
            </MyButton><br></br>
        </form>
    );
};
    
export default UserForm;