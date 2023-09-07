import cn from 'classnames';
import ThemeChanger from 'shared/lib/icons/themeChanger.svg';
import { useTheme } from 'app/providers/ThemeProvider';
import styles from './index.module.scss';
import { ChangeThemeProps } from './ChangeTheme.props';

export const ChangeTheme = ({ className }: ChangeThemeProps) => {
    const { toggleTheme } = useTheme();

    return (
        <div
            onClick={toggleTheme}
            className={cn(styles.ChangeTheme, className)}
        >
            <ThemeChanger />
        </div>
    );
};
