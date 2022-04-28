import Head from 'next/head'
import Link from 'next/link';
import React from 'react'
import styles from '../../styles/Ninjas.module.scss';


// runs at build time, never runs in the browser
export const getStaticProps = async()=>{
  const res = await fetch('https://jsonplaceholder.typicode.com/users');
  const data = await res.json();
  return{
    props:{ninjas:data}
  }
}

const Ninjas = ({ninjas}) => {
  return (
    <div>
          <Head >
      <title>Ninja List | Ninjas</title>
      <meta name='keywords' content='ninjas'  />
    </Head>
        <h1>All ninjas</h1>
        {ninjas.map(ninja=>(
            <Link href={`/ninjas/${ninja.id}`} key={ninja.id}>
              {/* <p>{ninja.name}</p> */}
              <a className={styles.single}> <h3>{ninja.name}</h3> </a>
            </Link>
          )
        )}
    </div>
  )
}

export default Ninjas