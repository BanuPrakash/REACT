import { useState, useTransition } from 'react';

import AboutTab from './AboutTab';
import ContactTab from './ContactTab';
import PostsTab from './PostsTab';

type Tab = 'about' | 'posts' | 'contact';

const App = () => {
  const [tab, setTab] = useState('about');
  const [isPending, setTransition] = useTransition();
  const selectTab = (tab: Tab) => {
    setTransition(() => {
      setTab(tab);
    })

  };

  return (
    <div >
      <div>
        <button
          onClick={() => selectTab('about')}
        > About </button>

        <button
          onClick={() => selectTab('posts')}
        > Posts </button>
        <button
          onClick={() => selectTab('contact')}
        > Contact </button>
      </div>
      {isPending && <h1>Loading....</h1>}

      {tab === 'about' && <AboutTab />}
      {tab === 'posts' && <PostsTab />}
      {tab === 'contact' && <ContactTab />}
    </div>
  );
};

export default App;