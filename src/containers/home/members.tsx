import MembersHome from '@/components/MembersHome'
import { IMember } from '@/pages'
import { Members } from '@/styles/pages/Home'
import { FaCaretRight } from 'react-icons/fa'
import NextLink from 'next/link'

interface IMembersContainerProps {
  members: IMember[]
}

export const MembersContainer: React.FC<IMembersContainerProps> = ({
  members
}) => (
  <Members>
    <h3>Nossos diretores</h3>
    <MembersHome members={members} />

    <NextLink href="/membros">
      <a>
        Ver todos os membros
        <FaCaretRight />
      </a>
    </NextLink>
  </Members>
)
