import { Form } from '@unform/web'
import * as Yup from 'yup'
import { useRef, useState } from 'react'
import 'react-responsive-modal/styles.css'
import { Modal } from 'react-responsive-modal'

import {
  ModalContainer,
  Close,
  Check,
  FormButton,
  SuccessModalContainer
} from './styles'

import { FaArrowAltCircleRight, FaArrowAltCircleLeft } from 'react-icons/fa'

import Input from '@/components/Input'
import FileInput from '@/components/FileInput'
import Select from '@/components/Select'
import Textarea from '@/components/Textarea'
import Button from '@/components/Button'
import {
  courseOptions,
  periodOptions,
  learnNewLanguageOptions,
  knowledgeOptions,
  departmentOptions
} from './selectOptions'

interface DataRequestProps {
  isOpened: boolean
}

const SelectiveProcessForm: React.FC<DataRequestProps> = ({ isOpened }) => {
  const formRef = useRef(null)

  const [openForm, setOpenForm] = useState<boolean>(isOpened)
  const [openSuccess, setOpenSuccess] = useState<boolean>(false)
  const [inputVisible, setInputVisible] = useState<boolean>(false)

  function handleCloseModal() {
    setOpenForm(false)
    setOpenSuccess(false)
  }

  function handleOpenSuccess() {
    setOpenForm(false)
    setOpenSuccess(true)

    setTimeout(() => {
      setOpenSuccess(false)
    }, 2000)
  }

  function handleShowWichLanguageInput(event) {
    if (event.value === 'knowledgeYes') {
      setInputVisible(true)
    } else {
      setInputVisible(false)
    }
  }

  async function handleSubmit(data) {
    try {
      const schemas = Yup.object().shape({
        name: Yup.string().required('Informe um nome válido'),
        ra: Yup.number().required('Informe um RA válido'),
        email: Yup.string().email().required('Informe um email válido'),
        course: Yup.string().required('Informe seu curso'),
        department: Yup.string().required('Informe o(s) setor(es) desejado(s)'),
        period: Yup.number().required('Informe qual período você está'),
        knowledge: Yup.string().required('Responda a pergunta corretamente'),
        wichLanguage: Yup.string().when('knowledge', {
          is: 'knowledgeYes',
          then: Yup.string().required('Responda a pergunta corretamente')
        }),
        learnNewLanguage: Yup.string().required(
          'Responda a pergunta corretamente'
        ),
        motivation: Yup.string().required('Responda a pergunta corretamente'),
        contribution: Yup.string().required('Responda a pergunta corretamente'),
        curriculum: Yup.mixed()
          .required('Insira seu currículo')
          .test('fileType', 'Apenas aceitamos arquivos .docx e .pdf', value => {
            return value && value[0].type === 'image/jpeg'
          })
      })

      await schemas.validate(data, { abortEarly: false })

      console.log(data)

      handleOpenSuccess()
    } catch (err) {
      const validationErrors = {}

      if (err instanceof Yup.ValidationError) {
        err.inner.forEach(error => {
          validationErrors[error.path] = error.message
        })

        formRef.current.setErrors(validationErrors)
      }
    }
  }

  return (
    <>
      <Modal
        open={openForm}
        onClose={handleCloseModal}
        center
        showCloseIcon={false}
        styles={{ modal: { borderRadius: 8 } }}
      >
        <Close onClick={handleCloseModal} />
        <ModalContainer>
          <h3>Inscrição Processo Seletivo</h3>
          <Form ref={formRef} onSubmit={handleSubmit}>
            <Input name="name" placeholder="Nome completo" />
            <Input name="ra" placeholder="RA" />
            <Input name="email" placeholder="E-mail (preferência gmail)" />
            <Select name="course" placeholder="Curso" options={courseOptions} />
            <Select
              name="department"
              placeholder="Setor de preferência (até 2)"
              options={departmentOptions}
              multi
            />
            <Select
              name="period"
              placeholder="Período"
              options={periodOptions}
            />
            <Select
              name="knowledge"
              placeholder="Possui algum conhecimento, mesmo que básico em linguagens de programação?"
              options={knowledgeOptions}
              onChange={e => handleShowWichLanguageInput(e)}
            />
            {inputVisible && (
              <Input name="wichLanguage" placeholder="Se sim, quais?" />
            )}
            <Select
              name="learnNewLanguage"
              placeholder="Você estaria disposto a dedicar seu tempo aprendendo uma nova linguagem?"
              options={learnNewLanguageOptions}
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
        <SuccessModalContainer>
          <Check />
          <p>Inscrição finalizada</p>
          <span>Enviaremos um e-mail contendo todos seus dados</span>
        </SuccessModalContainer>
      </Modal>
    </>
  )
}
export default SelectiveProcessForm
