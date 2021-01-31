import { useState } from 'react'
import { MemberStyle, Links } from './styles'
import { FaGithub, FaLinkedin, FaCaretLeft, FaCaretRight } from 'react-icons/fa'

// import Link from '@/components/Link'

interface IMember {
  id: string
  name: string
  role: {
    department: string
    job: string
    _id: string
    tasks_description: string
    start_date_position: Date
    end_date_position: string
    __v: number
    id: string
  }
  avatar: string
  link_github: string
  link_linkedin: string
}

interface MemberProps {
  members: IMember[]
}

const MembersHome: React.FC<MemberProps> = ({ members }) => {
  const [currentMember, setCurrentMember] = useState({} as IMember)
  const [countMember, setCountMember] = useState(0)

  function handlePreviousMember(): void {
    if (countMember < members.length - 1) {
      setCountMember(countMember + 1)
    } else {
      setCountMember(0)
    }
    setCurrentMember(members[countMember])
  }
  function handleNextMember(): void {
    if (countMember >= members.length - 1) {
      setCountMember(0)
    } else {
      setCountMember(countMember + 1)
    }
    setCurrentMember(members[countMember])
  }

  return (
    <MemberStyle>
      <img src={currentMember.avatar} />
      <main>
        <FaCaretLeft onClick={handlePreviousMember} />
        <div>
          <section>
            <div>
              <p>{currentMember.name}</p>
              <label>{currentMember.role}</label>
            </div>
          </section>
          <Links>
            <a href={currentMember.link_github}>
              <FaGithub />
            </a>

            <a href={currentMember.link_linkedin}>
              <FaLinkedin />
            </a>
          </Links>
        </div>
        <FaCaretRight onClick={handleNextMember} />
      </main>
    </MemberStyle>
  )
}

export default MembersHome
