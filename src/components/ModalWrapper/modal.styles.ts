import { ModalProps } from 'react-responsive-modal'

import { light } from '@/styles/theme'

type ModalStylesProps = Omit<ModalProps, 'onClose' | 'open'>

export const modalStyles: ModalStylesProps = {
  styles: {
    modal: {
      borderRadius: 8,
      boxShadow: 'none',
      backgroundColor: light.colors.neutral100,
      padding: 32
    }
  }
}
