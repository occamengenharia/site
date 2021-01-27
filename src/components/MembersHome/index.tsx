import { useState } from 'react'
import { MemberStyle, Links } from './styles'
import { FaGithub, FaLinkedin, FaCaretLeft, FaCaretRight } from 'react-icons/fa'

// import Link from '@/components/Link'

interface MemberProps {
  image: string
  name: string
  role: string
  github?: string
  linkedin?: string
}

const MembersHome: React.FC<MemberProps> = ({
  image,
  name,
  role,
  github,
  linkedin
}) => {
  return (
    <MemberStyle>
      <img src={image} />
      <main>
        <FaCaretLeft />
        <div>
          <section>
            <div>
              <p>{name}</p>
              <label>{role}</label>
            </div>
          </section>
          <Links>
            <a href={github}>
              <FaGithub />
            </a>

            <a href={linkedin}>
              <FaLinkedin />
            </a>
          </Links>
        </div>
        <FaCaretRight />
      </main>
    </MemberStyle>
  )
}

export default MembersHome
