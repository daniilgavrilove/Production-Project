import cn from 'classnames';
import { useTranslation } from 'react-i18next';
import { ChangeLangProps } from './ChangeLang.props';
import styles from './ChangeLang.module.scss';

export const ChangeLang = ({ className }: ChangeLangProps) => {
    const { t, i18n } = useTranslation();

    const onToggleLang = async () => {
        await i18n.changeLanguage(i18n.language === 'ru' ? 'en' : 'ru');
    };

    return (

        <div
            onClick={onToggleLang}
            className={cn(styles.ChangeLang, className)}
        >
            {i18n.language ==='ru'?'RU':'EN'}
        </div>
    );
};
