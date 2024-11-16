import { Footer } from '@recobook/components/layout/Footer';
import { Header } from '@recobook/components/layout/Header';
import { Main } from '@recobook/components/layout/Main';
import './index.css';

function App() {
    return (
        <div className="h-screen grid grid-rows-[auto_1fr_auto]">
            <Header />
            <Main />
            <Footer />
        </div>
    );
}

export default App;
