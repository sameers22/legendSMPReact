import React, { useState } from 'react';

const Account = () => {
    const [user, setUser] = useState({ name: '', phone: '', profilePic: '' });

    const handleUpdate = () => {
        alert('Account updated successfully!');
    };

    return (
        <div className="p-5">
            <h1 className="text-3xl font-bold mb-4">Account Management</h1>
            <input type="text" placeholder="Name" value={user.name} onChange={e => setUser({ ...user, name: e.target.value })} />
            <input type="text" placeholder="Phone Number" value={user.phone} onChange={e => setUser({ ...user, phone: e.target.value })} />
            <input type="file" onChange={e => setUser({ ...user, profilePic: URL.createObjectURL(e.target.files[0]) })} />
            <button onClick={handleUpdate}>Update Account</button>
        </div>
    );
};

export default Account;
