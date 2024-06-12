import {
    useEffect,
    useLayoutEffect,
    useState,
} from 'react';



const userIds = [1, 2];

const Demo = () => {
    const [userId, setUserId] = useState(userIds[0]);
    const [isAdmin, setIsAdmin] = useState(false);

    // This artificially slows down rendering
    let now = performance.now();
    while (performance.now() - now < 500) {
        // Do nothing for a bit...
    }

    useLayoutEffect(() => {
        setIsAdmin(userId === userIds[0]);
    }, [userId]);

    const handleChange = () => {
        const otherId = userIds.find((id) => id !== userId)!;
        setUserId(otherId);
    };

    return (
        <div className='tutorial-shorts'>
            <p>userId: {userId}</p>
            <p>Admin: {isAdmin ? "true" : "false"}</p>
            <button onClick={handleChange} >Change User</button>
        </div>
    );
};

export default Demo;