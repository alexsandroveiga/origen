import React from 'react'
import Head from 'next/head'
import Link from 'next/link'
import { FiLogOut } from 'react-icons/fi'
import { useRouter } from 'next/router'

import RigenLogo from '../assets/origen.svg'
import trackretail from '../assets/trackretail.png'
import activity from '../assets/activity.png'
import wave from '../assets/wave.png'

import { Container } from '../styles/pages/General'

const Home: React.FC = () => {
  const router = useRouter()

  return (
    <Container>
      <Head>
        <title>Origen</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <aside>
        <header>
          <img
            src="https://avatars2.githubusercontent.com/u/53938111?s=460&u=595550e36d115a587e0740807034473cb77fc020&v=4"
            alt="Alexsandro Veiga"
          />
          <h1>Olá Alexsandro</h1>
          <span>Natura</span>
        </header>
        <main>
          <ul>
            <li className="active">
              <Link href="/">
                <a>Geral</a>
              </Link>
            </li>
            <li>
              <Link href="/trackretail">
                <a>Acompanhar varejo</a>
              </Link>
            </li>

            <li>
              <Link href="/">
                <a>Outros</a>
              </Link>
            </li>
          </ul>

          <em />

          <button
            onClick={() => {
              router.push('/')
            }}
          >
            <FiLogOut size={24} color="#fff" /> Sair
          </button>
        </main>
        <footer>
          <span>By</span>
          <RigenLogo />
        </footer>
      </aside>

      <main>
        <div className="box">
          <h1>Acompanhar varejo ao vivo</h1>
          <div className="image">
            <img src={trackretail} />
          </div>
        </div>

        <div className="box">
          <h1>Estantes em atividade</h1>
          <div className="image">
            <img src={activity} />
          </div>
        </div>

        <div className="box">
          <h1>Relatório de reposição e retirada</h1>
          <div className="table">
            <div className="row">
              <span>Estante</span>
              <span>Número</span>
              <span>Retirada</span>
              <span>Compra</span>
            </div>
            <div className="row">
              <span>Estante verde</span>
              <span>0</span>
              <span></span>
              <span></span>
            </div>
            <div className="row">
              <span>Estante amarela</span>
              <span>0</span>
              <span></span>
              <span></span>
            </div>
            <div className="row">
              <span>Estante azul</span>
              <span>0</span>
              <span></span>
              <span></span>
            </div>
            <div className="row">
              <span>Estante rosa</span>
              <span>0</span>
              <span></span>
              <span></span>
            </div>
            <div className="row">
              <span>Estante azul</span>
              <span>0</span>
              <span></span>
              <span></span>
            </div>
            <div className="row">
              <span>Estante roxo</span>
              <span>0</span>
              <span></span>
              <span></span>
            </div>
          </div>
        </div>

        <div className="box full">
          <h1>
            <span>Produtos vendidos</span> Produtos retirados e recolocados
          </h1>
          <img src={wave} />
        </div>
      </main>
    </Container>
  )
}

export default Home
