import React, { useState } from "react";
const Etarget = () => {

        const [user, setUser] = useState({
          name: "",
          age: "",
          post: "",
          address: "",
          tel: "",
          email: "",
        });

        const handleUser = (e) => {
            console.log(e.target.name, e.target.value)
            setUser((prev) => ({ ...prev, [e.target.name]: e.target.value }));
          };
        
      
    return(<>
    {user.name}
    {user.age}
    <div>
      <form>
        <div>
          <input
            name="name"
            onChange={handleUser}
            type="text"
            placeholder="お名前"
          />
        </div>
        <div>
          <input
            name="age"
            onChange={handleUser}
            type="text"
            placeholder="年齢"
          />
        </div>
        <div>
          <input
            name="post"
            onChange={handleUser}
            type="text"
            placeholder="郵便番号"
          />
        </div>
        <div>
          <input
            name="address"
            onChange={handleUser}
            type="text"
            placeholder="住所"
          />
        </div>
        <div>
          <input
            name="tel"
            onChange={handleUser}
            type="text"
            placeholder="電話番号"
          />
        </div>
        <div>
          <input
            name="email"
            onChange={handleUser}
            type="text"
            placeholder="メールアドレス"
          />
        </div>
      </form>
    </div>
    </>)
}

export default Etarget