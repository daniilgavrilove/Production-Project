import { render } from 'react-dom';
import { App } from 'app/App';
import { ThemeProvider } from 'app/providers/ThemeProvider';
import 'shared/config/i18n/i18n';

render(
    <ThemeProvider>
        <App />
    </ThemeProvider>,
    document.getElementById('root'),
);
