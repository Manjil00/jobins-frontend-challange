import React from 'react';

const TopNav = () => {
return (
<div className="dashNav flex justify-between items-center bg-containerGray mt-3">

<h1 className='font-mainfont font-bold text-lg md:text-2xl ml-3'>Dashboard</h1>

<div className="ACTIONS flex mx-5 gap-4">
    <img src="../icons/Notification.png" className="cursor-pointer" alt="Notifications"/>
    <img src="../icons/Avatar.png" className="cursor-pointer" alt="Avatar"/>
    </div>
</div>
)
}

export default TopNav;
