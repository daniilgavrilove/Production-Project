import 'shared/styles/style.scss';
import { useTheme } from 'app/providers/ThemeProvider';
import { AppRouter } from './providers/AppRouter';

export const App = () => {
    const { theme } = useTheme();
    return (
        <div className={`app ${theme}`}>
            <AppRouter />
        </div>
    );
};
