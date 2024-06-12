import { useTransition } from 'react';

type AppProps = {
    onClick: () => {},
    caption:string
}

const TabButton = ({
  onClick,
  caption
}: AppProps) => {
  const [isPending, startTransition] = useTransition();

  const handleClick = () => {
    startTransition(() => {
      onClick?.();
    });
  };

  if (isPending) {
    return <p>Loading...</p>;
  }

  return <button type="button"  onClick={handleClick} >{caption}</button>;
};

export default TabButton;