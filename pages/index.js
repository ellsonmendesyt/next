import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import styles from '../styles/Home.module.scss';

export default function Home() {
  return (
    <>
    <Head >
      <title>Ninja List | Home</title>
      <meta name='keywords' content='ninjas'  />
    </Head>


     <h1 className={styles.title}>Home Page</h1>
     <p className={styles.text}>Bem vindo aos sistemas... Bem vindo aos sistemas... Bem vindo aos sistemas... Bem vindo aos sistemas... Bem vindo aos sistemas...</p>
     <p className={styles.text}>Criamos as melhores soluções pra seu negocio Criamos as melhores soluções pra seu negocio Criamos as melhores soluções pra seu negocio Criamos as melhores soluções pra seu negocio Criamos as melhores soluções pra seu negocioCriamos as melhores soluções pra seu negocio</p>
     <Link  href='/ninjas'><a className={styles.btn}>See Ninja List</a></Link>
  
    </>
  )
}
