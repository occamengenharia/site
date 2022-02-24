import { useCallback, useEffect, useState } from 'react'
import { MemberStyle, Links, CardContent } from './styles'
import { FaGithub, FaInstagram, FaLinkedin } from 'react-icons/fa'
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io'
import { IMember } from '@/pages'
import { ButtonLink } from '..'

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
    if (countMember <= 0) {
      setCountMember(members.length - 1)
    } else {
      setCountMember(countMember - 1)
    }
    clearTimeout(timeOut)
    setCurrentMember(members[countMember])
  }, [members, countMember, timeOut])

  const handleNextMember = useCallback(() => {
    if (countMember >= members.length - 1) {
      setCountMember(0)
    } else {
      setCountMember(countMember + 1)
    }
    clearTimeout(timeOut)
    setCurrentMember(members[countMember])
  }, [members, countMember, timeOut])

  useEffect(() => {
    handleNextMember()
  }, [time])

  return (
    <MemberStyle>
      <img src={currentMember?.avatar} alt={currentMember?.name} />
      <CardContent>
        <main>
          <section>
            <p>{currentMember?.name}</p>
            <label>{currentMember?.role ? currentMember?.role.job : ''}</label>
            <p className="member-phrase">{`"${currentMember.phrase}"`}</p>
          </section>
        </main>
        <aside>
          <button onClick={handlePreviousMember}>
            <IoIosArrowBack />
          </button>
          <button onClick={handleNextMember}>
            <IoIosArrowForward />
          </button>
        </aside>
        <Links>
          <ButtonLink
            href={currentMember?.link_instagram}
            icon={<FaInstagram />}
          />
          <ButtonLink href={currentMember?.link_github} icon={<FaGithub />} />
          <ButtonLink
            href={currentMember?.link_linkedin}
            icon={<FaLinkedin />}
          />
        </Links>
      </CardContent>
    </MemberStyle>
  )
}

export default MembersHome
