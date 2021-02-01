import { useCallback, useEffect, useState } from 'react'
import { MemberStyle, Links } from './styles'
import { FaGithub, FaLinkedin, FaCaretLeft, FaCaretRight } from 'react-icons/fa'
import { IMember } from '@/pages'

// import Link from '@/components/Link'

interface MemberProps {
  members: IMember[]
}

const MembersHome: React.FC<MemberProps> = ({ members }) => {
  const [currentMember, setCurrentMember] = useState(members[0])
  const [countMember, setCountMember] = useState(0)
  const [time, setTime] = useState(0)
  const timeOut = setTimeout(() => {
    setTime(time + 1)
  }, 4500)
  const handlePreviousMember = useCallback(() => {
    if (countMember < members.length - 1) {
      setCountMember(countMember + 1)
    } else {
      setCountMember(0)
    }
    setCurrentMember(members[countMember])
    clearTimeout(timeOut)
  }, [members, countMember, timeOut])
  const handleNextMember = useCallback(() => {
    if (countMember >= members.length - 1) {
      setCountMember(0)
    } else {
      setCountMember(countMember + 1)
    }
    setCurrentMember(members[countMember])
    clearTimeout(timeOut)
  }, [members, countMember, timeOut])

  useEffect(() => {
    handleNextMember()
  }, [time])

  return (
    <MemberStyle>
      <img src={currentMember.avatar} />
      <main>
        <FaCaretLeft onClick={handlePreviousMember} />
        <div>
          <section>
            <div>
              <p>{currentMember.name}</p>
              <label>{currentMember.role ? currentMember.role.job : ''}</label>
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
