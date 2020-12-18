import { useState } from 'react'
import { MemberStyle, IconStyle, Links } from './styles'


export default function Member(){
  const [name, setName] = useState([])
  const [job, setJob] = useState([])


  async function ChangeMember(){

  }

  return(
    <MemberStyle>
      <img src='/banner.png'></img>
      <section>
        <div>Gabriel Prando</div>
        <div>Diretor de Projetos</div>
        <Links>
          <IconStyle src='/gitlogo.png'></IconStyle>
          <IconStyle src='/linkedinlogo.png'></IconStyle>
        </Links>
      </section>
    </MemberStyle>
  )
}
