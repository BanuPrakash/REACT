import {
    useDeferredValue,
    useEffect,
    useState,
} from 'react';

import SlowList from './SlowList';

const Demo = () => {
    const [query, setQuery] = useState('');
    const deferredQuery = useDeferredValue(query); // user interaction can be high priority

    return (
        <div>
            <input
                type='text'
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder='Search...'
            />
            <SlowList text={deferredQuery} />
        </div>
    );
};

export default Demo;