import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import { Navbar } from '../public/navbar'
import Template from '../public/Template'
export default function Home() {
  return (
    <div>
      <Template title="Home | Wolf Pack Fingerboards" headText="Wolf Pack Fingerboards" desc="The official site of Wolf Pack Fingerboards." />
    </div>
  )
}
