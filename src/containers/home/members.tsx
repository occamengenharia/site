import { IMember } from '@/pages'
import { Members, MembersHead } from '@/styles/pages/Home'
import { Button, MembersHome } from '@/components'
import { useRouter } from 'next/router'

interface IMembersContainerProps {
  members: IMember[]
}

export const MembersContainer: React.FC<IMembersContainerProps> = ({
  members
}) => {
  const router = useRouter()

  return (
    <Members>
      <MembersHead>
        <h3>Nossos membros</h3>
        <Button
          text="Membros de todos os anos"
          size="small"
          onClick={() => router.push('/membros')}
        />
      </MembersHead>

      <MembersHome members={members} />
    </Members>
  )
}
