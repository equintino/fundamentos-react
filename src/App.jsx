import React from 'react'
import './App.css'

import Primeiro from './components/basicos/Primeiro'
import ComParametro from './components/basicos/ComParametro'
import ComFilhos from './components/basicos/ComFilhos'
import Card from './components/layout/Card'
import Repeticao from './components/basicos/Repeticao'
import Condicional from './components/basicos/Condicional'
import CondicionalIf from './components/basicos/CondicionalIf'
import Pai from './components/comunicacao/direta/Pai'
import Super from './components/comunicacao/indireta/Super'
import Input from './components/form/Input'
import Contador from './components/contador/Contador'
import MegaSenha from './components/desafio/MegaSenha'

 export default (props) =>
    <div className='App'>
        <h3>Fundamentos React</h3>
        <div className='Cards'>
            <Card titulo='#11 - Desafio' color='#474361'>
                <MegaSenha></MegaSenha>
            </Card>
            <Card titulo='#10 - Contador' color='#D9995B'>
                <Contador passo={10} valor={0} ></Contador>
            </Card>
            <Card titulo='#09 - Input' color='#61306E'>
                <Input></Input>
            </Card>
            <Card titulo='#08 - Comunicação Indireta' color='#FAED3C'>
                <Super></Super>
            </Card>
            <Card titulo='#07 - Comunicação Direta' color='#FA6E92'>
                <Pai sobreNome="Assis"></Pai>
            </Card>
            <Card titulo='#06 - Condicional v2' color='#495CE6'>
                <CondicionalIf number={12}></CondicionalIf>
            </Card>
            <Card titulo='#05 - Condicional v1' color='#E6777D'>
                <Condicional number={11}></Condicional>
            </Card>
            <Card titulo='#04 - Repetição ' color='#6070E6'>
                <Repeticao></Repeticao>
            </Card>
            <Card titulo='#03 - Com Filhos: ' color='#E6C249'>
                <ComFilhos titulo='Com Filhos'>
                    <ul>
                        <li>Pedro</li>
                        <li>Maria</li>
                        <li>José</li>
                        <li>Joana</li>
                    </ul>
                </ComFilhos>
            </Card>
            <Card titulo='#02 - Com Parâmetros' color='#726980'>
                <ComParametro titulo='Este é o Título' subtitulo='Este é o Subtítulo' />
                <ComParametro titulo='Opa' subtitulo='Epa' />
            </Card>
            <Card titulo='#01 - Primeiro Componente' color='#B37E39'>
                <Primeiro />
            </Card>
        </div>
    </div>
