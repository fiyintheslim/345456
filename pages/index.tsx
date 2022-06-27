import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/scss/home.module.scss'
import VolumeUpOutlinedIcon from '@mui/icons-material/VolumeUpOutlined';
import ProductSection from "../components/ProductSection"
import ProductCard from "../components/ProductCard"
import {googleVoice, superPretty, vanity, gmail} from "../data"

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>购买商品_数字商店-Google Voice购买,购买gmail,谷歌邮箱批发,Google Voice靓号,Google Voice 选号注册,Gmail邮箱,谷歌语音,live邮箱,Apple ID出售—买账号上数字商店</title>
      </Head>
      <main>
        <blockquote className={styles.top}>
          <VolumeUpOutlinedIcon />
          <p className={styles.regulations} >
              Please consciously abide by national laws and regulations
          </p>
          <p>customer service🐧: 1803156</p>
          <p>
            <a rel="noreferrer" target="_blank" href="https://t.me/icola">🛫· Telegram customer service</a>
          </p>
          
          <p>
            <a rel="noreferrer" target="_blank" href="https://t.me/g_fans">🛫 · Telegram group</a>
          </p>
          
          <p>
            <a rel="noreferrer" target="_blank" href="https://vip.gvsell.com">🥇 GoogleVoice number</a>
          </p>
          
          <p>
            <a rel="noreferrer" target="_blank" href="https://help.345456.xyz">⚙ ·Tutorial</a>
          </p>
          
        </blockquote>
        <ProductSection title="Google Voice">
          {
            googleVoice.map((data)=>(
              <ProductCard data={data}  />
            ))
          }
        </ProductSection>
        <ProductSection title="Google Voice super pretty number">
          {
            superPretty.map((data)=>(
              <ProductCard data={data}  />
            ))
          }
        </ProductSection>
        <ProductSection title="Google Voice vanity">
          {
            vanity.map((data)=>(
              <ProductCard data={data}  />
            ))
          }
        </ProductSection>
        <ProductSection title="Gmail">
          {
            gmail.map((data)=>(
              <ProductCard data={data}  />
            ))
          }
        </ProductSection>
      </main>
    </>
  )
}

export default Home
