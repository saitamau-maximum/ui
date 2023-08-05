import { Button } from '@saitamau-maximum/ui';
import { Sun, Moon } from 'react-feather';

const judgeTheme = () => {
  if (typeof window === 'undefined') {
    return 'light';
  }
  if (localStorage.getItem('theme') === 'dark') {
    return 'dark';
  }
  return 'light';
};

function App() {
  const switchTheme = () => {
    const before = judgeTheme();
    const tweets = document.querySelectorAll('[data-tweet-id]');

    if (before === 'light') {
      localStorage.setItem('theme', 'dark');
      document.documentElement.classList.add('dark');
      document.documentElement.classList.remove('light');
      tweets.forEach((tweet) => {
        const src = tweet.getAttribute('src');
        if (src) {
          tweet.setAttribute('src', src.replace('theme=light', 'theme=dark'));
        }
      });
    }
    if (before === 'dark') {
      localStorage.setItem('theme', 'light');
      document.documentElement.classList.add('light');
      document.documentElement.classList.remove('dark');
      tweets.forEach((tweet) => {
        const src = tweet.getAttribute('src');
        if (src) {
          tweet.setAttribute('src', src.replace('theme=dark', 'theme=light'));
        }
      });
    }
  };

  return (
    <div style={{ padding: 16, display: 'flex', gap: 16 }}>
      <Button
        onClick={switchTheme}
        leftIcon={<Moon className="moon" />}
        rightIcon={<Sun className="sun" />}
      />
      <Button variant="primary">Click Me!</Button>
      <Button variant="secondary">Click Me!</Button>
      <Button variant="tertiary">Click Me!</Button>
    </div>
  );
}

export default App;
