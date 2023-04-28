import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

import deadpool from '../assets/deadpool-404.png';

export default function ErrorNoFound() {
  const { t } = useTranslation();

  return (
    <div className='text-center text-white'>
      <h1 className='text-7xl text-rose-700'>
        {t('error-no-found-title')}
      </h1>

      <div className='mt-10'>
        <img src={deadpool} alt='deadpool-404' className='mx-auto' />
        <p className='text-3xl'>
          {t('error-no-found-description')}
        </p>
      </div>

      <div className='mt-8'>
        <Link to='/' className='mx-auto rounded-lg bg-amber-600 pt-1 pb-1 w-36 block'>
          {t('error-no-found-button')}
        </Link>
      </div>
    </div>
  );
}
