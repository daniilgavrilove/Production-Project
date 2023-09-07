import cn from 'classnames';
import { AboutPageProps } from './index.props';
import styles from './index.module.scss';

const AboutPage = ({ className }: AboutPageProps) => (
    <div className={cn(styles.aboutPage, className)}>
        AboutPage
    </div>
);

export default AboutPage;
