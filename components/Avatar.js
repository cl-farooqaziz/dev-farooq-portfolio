// Image
import Image from "next/image";
import avatar from '../public/avatar.png'

const Avatar = () => {
  return (
    <>
      <div className='hidden xl:flex xl:max-w-none'>
        <Image
          src={avatar}
          width={400}
          height={510}
          alt="Avatar"
          className='translate-z-0 w-full h-full'
        />
      </div>
    </>
  )
};

export default Avatar;
