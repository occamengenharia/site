import BaseModal from '../BaseModal'

import { FiSend } from 'react-icons/fi'

import Link from '@/components/Link'
import Input from '@/components/Input'

interface DataRequestProps {
  isOpened: boolean
}

const DataRequest: React.FC<DataRequestProps> = ({ isOpened }) => {
  return (
    <BaseModal showCloseBtn={true} open={isOpened}>
      <p>Requisição de dados</p>
      <span>
        Enviaremos um e-mail com todos os seus dados relacionados ao processo
        seletivo
      </span>
      <Link href="/" text="Enviar" icon={FiSend} />
    </BaseModal>
  )
}
export default DataRequest
