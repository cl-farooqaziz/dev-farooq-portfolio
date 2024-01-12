// Image
import Image from "next/image";
import logo from '../public/logo.png'

// Link
import Link from "next/link";

// Components
import Socials from "../components/Socials";

const Header = () => {
  return (
    <>
      <header className='absolute z-30 w-full flex items-center px-16 xl:px-0 xl:h-[90px]'>
        <div className='container mx-auto'>
          <div className='flex flex-col lg:flex-row justify-between items-center gap-y-6 py-8'>
            {/* Logo */}
            <Link href={'/'} className='text-lg'>
              <Image
                src={logo}
                width={70}
                height={40}
                alt="Logo"
                priority={true}
              />
            </Link>
            {/* Socials */}
            <Socials />
          </div>
        </div>
      </header>
    </>
  )
};

export default Header;
