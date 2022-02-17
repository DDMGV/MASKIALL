import React from "react";
import MyButton from "./UI/button/MyButton";
import 'C:/Users/ДНС/aaa/app/mksyapp/src/styles/App.css';

const UserItem = (props) => {
    return (
        <div className="user">
            <div className="user__content">
                
                <div className="slice">{props.user.name.slice(0, 1)}</div><div className="atributes">{props.user.name}  | {props.user.username} | {props.user.email} | {props.user.phone} | {props.user.address.zipcode} |</div>
                
            </div>
            <div> 
                <MyButton onClick={() => props.remove(props.user)}> 
                    Удалить 
                </MyButton>
            </div>
        </div>
    );
};

export default UserItem;