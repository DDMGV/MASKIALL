import React from "react";
import { TransitionGroup, CSSTransition } from "react-transition-group";
import UserItem from "./UserItem";

const UserList = ({users, title, remove}) => {

    if (!users.length) {
        return (
            <h1 style={{textAlign: 'center'}}> 
                Пользователей нет!
            </h1>
        )
    }

    return ( 
        <div>
            <h1 style={{textAlign: 'center'}}>
                {title} 
            </h1>
            <TransitionGroup>   
                {users.map((user, index )  =>
                    <CSSTransition  
                        key={user.id}
                        timeout={500}
                        classNames="user"
                        >  
                        <UserItem remove={remove} number={index + 1} user={user}/>
                    </CSSTransition>
                  )}
            </TransitionGroup>   
        </div>
    );
};

export default UserList;