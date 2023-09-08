import cn from 'classnames';
import Logo from 'shared/lib/icons/logo.svg';
import Home from 'shared/lib/icons/home.svg';
import About from 'shared/lib/icons/about.svg';
import Profile from 'shared/lib/icons/profile.svg';
import Article from 'shared/lib/icons/article.svg';

import { Link } from 'react-router-dom';
import { ChangeTheme } from 'features/ChangeTheme/ui/ChangeTheme';
import { ChangeLang } from 'features/ChangeLang/ui/ChangeLang';
import { useTranslation } from 'react-i18next';
import styles from './SideBar.module.scss';
import { SideBarProps } from './SideBar.props';

export const SideBar = ({ className }: SideBarProps) => {
    const { t, i18n } = useTranslation();

    const menuArr = [
        {
            key: 1, icon: <Home />, text: t('Главная'), link: '/',
        },
        {
            key: 2, icon: <About />, text: t('О нас'), link: '/',
        },
        {
            key: 3, icon: <Profile />, text: t('Профиль'), link: '/',
        },
        {
            key: 4, icon: <Article />, text: t('Статьи'), link: '/',
        },

    ];

    return (
        <div
            data-testid="sidebar"
            className={cn(styles.SideBar, className)}
        >
            <div className={styles.logo}>
                <Logo fill="#000" />
            </div>
            <div className={styles.menu}>
                {menuArr.map(({
                    icon, link, text, key,
                }) => (
                    <div key={key} className={styles.menuItem}>
                        <div className={styles.menuLogo}>{icon}</div>
                        <Link className={styles.menuText} to={link}>{text}</Link>
                    </div>
                ))}
            </div>
            <div className={styles.actions}>
                <ChangeTheme />
                <ChangeLang />
            </div>
        </div>
    );
};
