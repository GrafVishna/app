const logoImage = 'img/logos/logo.svg';

const Logo = () => {
   return (
      <>
         {Boolean(logoImage) &&
            <div className="logo tablet:max-w-[108px] max-w-[80px]">
               <img className='w-full' src={logoImage} alt="Logo" />
            </div>
         }
      </>
   );
}

export default Logo;

