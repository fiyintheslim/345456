import Head from "next/head"
import Image from "next/image"
import MenuIcon from '@mui/icons-material/Menu';
import style from '../styles/scss/header.module.scss'
import {grey} from '@mui/material/colors';

const Header = () => {
  return (
    <>
    <Head>
        <link
        rel="stylesheet"
        href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap"
        />
        <link rel="icon" href="https://345456.xyz/favicon.ico" />
    </Head>
    <header className={`h-16 sticky top-0 left-0 w-screen ${style.header}`}>
        <div className={`${style.headerContainer}`}>
        <div className={`${style.logo}`}>
            <Image src="/logo.png" layout="fill" />
        </div>
        
        <MenuIcon sx={{color:grey[200]}} />
        </div>
    </header>
    </>
  )
}

export default Header