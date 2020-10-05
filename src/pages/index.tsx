import React from 'react'
import Head from 'next/head'
import Link from 'next/link'
import { useRouter } from 'next/router'

import RigenLogo from '../assets/rigen.svg'

import { Container } from '../styles/pages/Home'

import { FiChevronRight } from 'react-icons/fi'

const Home: React.FC = () => {
  const router = useRouter()

  return (
    <Container>
      <Head>
        <title>Origen</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <header>
        <RigenLogo />
      </header>
      <div className="login">
        <form>
          <img
            src="https://avatars2.githubusercontent.com/u/53938111?s=460&u=595550e36d115a587e0740807034473cb77fc020&v=4"
            alt="Alexsandro Veiga"
          />

          <label>
            <span>Login</span>
            <input type="text" placeholder="alexsandroveiga" />
          </label>

          <label>
            <span>Senha</span>
            <input type="password" placeholder="******" />
          </label>

          <Link href="/signup">
            <a>Quero me cadastrar</a>
          </Link>

          <button
            onClick={() => {
              router.push('/general')
            }}
          >
            Entrar <FiChevronRight size={24} color="#fff" />
          </button>
        </form>
      </div>
    </Container>
  )
}

export default Home
