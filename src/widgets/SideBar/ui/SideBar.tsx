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
import { PageLoader } from 'shared/ui/PageLoader/PageLoader';
import { Loader } from 'shared/ui/Loader/Loader';
import styles from './SideBar.module.scss';
import { SideBarProps } from './SideBar.props';

export const SideBar = ({ className }: SideBarProps) => {
    const { t, i18n } = useTranslation();

    const menuArr = [
        { icon: <Home />, text: t('Главная'), link: '/' },
        { icon: <About />, text: t('О нас'), link: '/' },
        { icon: <Profile />, text: t('Профиль'), link: '/' },
        { icon: <Article />, text: t('Статьи'), link: '/' },

    ];

    return (
        <div
            data-testid="sidebar"
            className={cn(styles.SideBar, className)}>
            <div className={styles.logo}>
                <Logo fill="#000" />
            </div>
            <div className={styles.menu}>
                {menuArr.map(({ icon, link, text }, index) => (
                    <div key={index} className={styles.menuItem}>
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
