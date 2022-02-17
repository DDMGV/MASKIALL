import React from "react";
import MyInput from "./UI/MyInput/MyInput";
import MySelect from "./UI/select/MySelect";

const UserFilter = ({filter, setFilter}) => {
    return (
        <div>
               <MyInput
          value={filter.query}
          onChange={e => setFilter({...filter, query: e.target.value})}
          placeholder="Поиск пользователя"
        />
        <MySelect
          value={filter.sort}
          onChange={selectedSort => setFilter ({...filter, sort: selectedSort})}
          defaultValue = "По ID"
          options={[
            {value: 'name', namew: "По ФИО"},
            {value: 'phone' , namew: "По Индексу"}, //Тут нужно было указать что-то вроде address:{ "zipcode "}, но у меня уже нет времени...
          ]}
        />
        </div>
    );
};

export default UserFilter;