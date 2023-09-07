import cn from 'classnames';
import { SideBar } from 'widgets/SideBar/ui/SideBar';
import { MainLayoutProps } from './MainLayout.props';
import styles from './MainLayout.module.scss';

export const MainLayout = ({ className }: MainLayoutProps) => (
    <div className={cn(styles.MainLayout, className)}>
        <SideBar />
    </div>
);
