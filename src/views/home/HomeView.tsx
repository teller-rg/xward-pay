import { JoinNow } from './components/JoinNow';
import { About } from './components/About';
import { Slogan } from './components/Slogan';
import { Solutions } from './components/Solutions';

export const HomeView: React.FC = () => (
  <>
    <JoinNow />
    <About />
    <Slogan />
    <Solutions />
  </>
);
