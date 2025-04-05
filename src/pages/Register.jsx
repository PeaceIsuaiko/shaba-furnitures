import React from 'react';


function Register() {
  return (
    <div>
      <div className="container mx-auto p-4 pt-6">
        <h1 className="text-3xl font-bold mb-4">Register</h1>
        <form action="">
          <input type="text" 
          name="name"
           id="name"
          onChange={}
           />

           <input type="email" name="email" id="email" onChange={} />

           <input type="file" name="file" id="profile image" onChange={} />

           <input type="password" name="password" id="password" />

           <input type="number" name="phone" id="phone" />
        </form>
      </div>
    </div>
  );
}

export default Register;