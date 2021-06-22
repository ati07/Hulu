import Image from 'next/image'
import HeaderItem from './HeaderItem'
import { HomeIcon,
        BadgeCheckIcon,
        CollectionIcon,
        LightningBoltIcon,
        ServerIcon,
        UserAddIcon,
} from '@heroicons/react/outline'
function Header() {
    return (
        <header className=''>
           <div>
               <HeaderItem title='HOME' Icon={HomeIcon}/>
           </div>
            <Image
            className='object-contain'
                src='https://hulu-matchmaker.s3.us-west-2.amazonaws.com/2020-08/Hulu_Logo-01_newgreen.png'
                width={200}
                height={100}
            />
        </header>
    )
}

export default Header

