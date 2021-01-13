import { Form } from '@unform/web'
import * as Yup from 'yup'
import { useState } from 'react'
import 'react-responsive-modal/styles.css'
import { Modal } from 'react-responsive-modal'

import { ModalContainer, Close, Check, FormButton } from './styles'

import { FaArrowAltCircleRight, FaArrowAltCircleLeft } from 'react-icons/fa'

import Input from '@/components/Input'
import FileInput from '@/components/FileInput'
import Select from '@/components/Select'
import Textarea from '@/components/Textarea'
import Button from '@/components/Button'
import { courseOptions, periodOptions } from './selectOptions'

interface DataRequestProps {
  isOpened: boolean
}

const SelectiveProcessForm: React.FC<DataRequestProps> = ({ isOpened }) => {
  const [openForm1, setOpenForm1] = useState<boolean>(isOpened)
  const [openSuccess, setOpenSuccess] = useState<boolean>(false)

  function handleCloseModal() {
    setOpenForm1(false)
    setOpenSuccess(false)
  }

  function handleOpenSuccess() {
    setOpenForm1(false)
    setOpenSuccess(true)
  }

  async function handleSubmit(data) {
    try {
      const schemas = Yup.object().shape({
        name: Yup.string().required(),
        ra: Yup.number().required(),
        email: Yup.string().email().required(),
        course: Yup.string().required(),
        department: Yup.string().required(),
        period: Yup.number().required(),
        knowledge: Yup.string().required(),
        wichLanguage: Yup.string().when('knowledge', {
          is: 'knowledgeYes',
          then: Yup.string().required()
        }),
        learnNewLanguage: Yup.string().required(),
        motivation: Yup.string().required(),
        contribution: Yup.string().required()
      })

      await schemas.validate(data, { abortEarly: false })

      console.log(data)

      handleOpenSuccess()
    } catch (err) {
      if (err instanceof Yup.ValidationError) {
        console.log(err)
      }
    }
  }

  return (
    <>
      <Modal
        open={openForm1}
        onClose={handleCloseModal}
        center
        showCloseIcon={false}
        styles={{ modal: { borderRadius: 8 } }}
      >
        <Close onClick={handleCloseModal} />
        <ModalContainer>
          <h3>Inscrição Processo Seletivo</h3>
          <Form onSubmit={handleSubmit}>
            <Input name="name" placeholder="Nome completo" />
            <Input name="ra" placeholder="RA" />
            <Input name="email" placeholder="E-mail (preferência gmail)" />
            <Select name="course" placeholder="curso" options={courseOptions} />
            <Input
              name="department"
              placeholder="Qual setor da OCCAM Engenharia você gostaria de fazer parte (até duas opções)"
            />
            <Select
              name="period"
              placeholder="Período"
              options={periodOptions}
            />
            <Select
              name="knowledge"
              placeholder="Possui algum conhecimento, mesmo que básico em linguagens de programação?"
              options={[
                {
                  value: 'knowledgeYes',
                  label: 'Sim'
                },
                {
                  value: 'knowledgeNo',
                  label: 'Não'
                }
              ]}
            />
            <Input name="wichLanguage" placeholder="Se sim, quais?" />
            <Select
              name="learnNewLanguage"
              placeholder="Você estaria disposto a dedicar seu tempo aprendendo uma nova linguagem?"
              options={[
                {
                  value: 'learnNewLanguageYes',
                  label: 'Sim'
                },
                {
                  value: 'learnNewLanguageNo',
                  label: 'Não'
                }
              ]}
            />
            <Textarea
              name="motivation"
              placeholder="Qual sua motivação para participar do processo seletivo?"
            />
            <Textarea
              name="contribution"
              placeholder="Como você pode contribuir para o desenvolvimento da Empresa Júnior, e o que você
              pode fazer para tornar o Brasil mais empreendedor?"
            />
            <FileInput
              name="curriculum"
              placeholder="Seu currículo"
              type="file"
            />
            <FormButton>
              <Button
                type="submit"
                text="Finalizar Inscrição"
                icon={FaArrowAltCircleRight}
              />
            </FormButton>
          </Form>
        </ModalContainer>
      </Modal>
      <Modal
        open={openSuccess}
        onClose={handleCloseModal}
        center
        showCloseIcon={false}
        styles={{ modal: { borderRadius: 8 } }}
      >
        <Close onClick={handleCloseModal} />
        <ModalContainer>
          <Check />
          <p>Inscrição finalizada</p>
          <span>Enviaremos um e-mail contendo todos seus dados</span>
        </ModalContainer>
      </Modal>
    </>
  )
}
export default SelectiveProcessForm
