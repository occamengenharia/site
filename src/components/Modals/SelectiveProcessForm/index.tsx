import { Form } from '@unform/web'
import * as Yup from 'yup'
import { useRef, useState } from 'react'
import 'react-responsive-modal/styles.css'
import { Modal } from 'react-responsive-modal'

import getValidationErrors from '@/utils/getValidationErros'
import checkFileFormat from '@/utils/checkFileFormat'
import limitMultiSelectOptions from '@/utils/limitMultiSelectOptions'
import api from '@/services/api'

import { ModalContainer, Close } from './styles'

import { FaArrowAltCircleRight } from 'react-icons/fa'

import Input from '@/components/Input'
import FileInput from '@/components/FileInput'
import Select from '@/components/Select'
import Textarea from '@/components/Textarea'
import Button from '@/components/Button'
import SuccessModal from '@/components/Modals/SuccessModal'
import ErrorModal from '@/components/Modals/ErrorModal'
import {
  courseOptions,
  periodOptions,
  learnNewLanguageOptions,
  knowledgeOptions,
  departmentOptions,
  ISelectOptions
} from './selectOptions'
import axios from 'axios'
import InputMask from '@/components/InputMask'

interface IFormData {
  name: string
  ra: string
  email: string
  course: string
  phone: string
  period: string
  department: string[]
  knowledge: string
  wichLanguage?: string
  learnNewLanguage: string
  motivation: string
  contribution: string
  curriculum: File
}

interface DataRequestProps {
  isOpened: boolean
  setIsOpen(isOpened: boolean): void
}

const SelectiveProcessForm: React.FC<DataRequestProps> = ({
  isOpened,
  setIsOpen
}) => {
  const formRef = useRef(null)
  const [openSuccess, setOpenSuccess] = useState<boolean>(false)
  const [openError, setOpenError] = useState<boolean>(false)
  const [departments, setDepartments] = useState<string[]>([])
  const [inputVisible, setInputVisible] = useState<boolean>(false)
  const [sendLoading, setSendLoading] = useState(false)
  function handleCloseModal() {
    setIsOpen(false)
    setOpenSuccess(false)
  }

  function handleOpenSuccess() {
    setIsOpen(false)
    setOpenSuccess(true)

    setTimeout(() => {
      setOpenSuccess(false)
    }, 2000)
  }

  function handleSetDepartments(event: ISelectOptions[]) {
    let newDepartments = departments

    limitMultiSelectOptions(event)
    if (event) {
      newDepartments = event.map(e => e.value)
      setDepartments(newDepartments)
    }
  }

  function handleShowWichLanguageInput(event: ISelectOptions) {
    if (event.value === 'sim') {
      setInputVisible(true)
    } else {
      setInputVisible(false)
    }
  }

  async function handleSubmit(data: IFormData) {
    formRef.current?.setErrors({})
    data.department = departments
    try {
      setSendLoading(true)
      const schemas = Yup.object().shape({
        name: Yup.string().required('Informe um nome válido'),
        ra: Yup.string().required('Informe um RA válido'),
        email: Yup.string().email().required('Informe um email válido'),
        phone: Yup.string().required('Informe seu número de celular'),
        course: Yup.string().required('Informe seu curso'),
        department: Yup.array()
          .min(1, 'Selecione pelo menos uma opção')
          .of(Yup.string())
          .required('Informe o(s) setor(es) desejado(s)'),
        period: Yup.string().required('Informe qual período você está'),
        knowledge: Yup.string().required('Responda a pergunta corretamente'),
        wichLanguage: Yup.string().when('knowledge', {
          is: 'sim',
          then: Yup.string().required('Responda a pergunta corretamente')
        }),
        learnNewLanguage: Yup.string().required(
          'Responda a pergunta corretamente'
        ),
        motivation: Yup.string().required('Responda a pergunta corretamente'),
        contribution: Yup.string().required('Responda a pergunta corretamente'),
        curriculum: Yup.mixed()
          .required('Insira seu currículo')
          .test(
            'tipo do arquivo',
            'Insira arquivos com a extensão .pdf, .doc ou .docx',
            checkFileFormat
          )
      })

      await schemas.validate(data, { abortEarly: false })

      const formData = new FormData()
      formData.append('files', data.curriculum)
      const res = await api.post('/upload', formData)

      const subscription = {
        name: data.name,
        course: data.course,
        phone: data.phone,
        ra: data.ra,
        period: data.period,
        interest_area: data.department.join(', '),
        email: data.email,
        answer1:
          data.knowledge === 'Sim'
            ? `${data.knowledge}, ${data.wichLanguage}`
            : data.knowledge,
        answer2: data.learnNewLanguage,
        answer3: data.motivation,
        answer4: data.contribution,
        curriculum: res.data[0].id
      }

      await api.post('/registrations-processes', subscription)
      await axios.post('/api/subscribeps', {
        name: data.name,
        course: data.course,
        ra: data.ra,
        period: data.period,
        email: data.email,
        sector: data.department,
        answer1: `${data.knowledge}, ${data.wichLanguage}`,
        answer2: data.learnNewLanguage,
        answer3: data.motivation,
        answer4: data.contribution
      })
      setSendLoading(false)
      handleOpenSuccess()
    } catch (err) {
      setSendLoading(false)
      if (err instanceof Yup.ValidationError) {
        const errors = getValidationErrors(err)

        formRef.current?.setErrors(errors)
      } else {
        setIsOpen(false)
        setOpenError(true)
      }
    }
  }

  return (
    <>
      <Modal
        open={isOpened}
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
            <InputMask name="ra" placeholder="RA" mask="99999999" />
            <Input name="email" placeholder="E-mail (preferência gmail)" />
            <InputMask
              name="phone"
              placeholder="Celular"
              mask="(99) 99999-9999"
            />
            <Select name="course" placeholder="Curso" options={courseOptions} />
            <Select
              name="department"
              placeholder="Setor de preferência (até 2)"
              options={departmentOptions}
              onChange={handleSetDepartments}
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
              onChange={e => handleShowWichLanguageInput(e as ISelectOptions)}
            />
            {inputVisible && (
              <Input name="wichLanguage" placeholder="Se sim, quais?" />
            )}
            <Select
              name="learnNewLanguage"
              placeholder="Está disposto a dedicar seu tempo para aprender uma nova linguagem?"
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
            <FileInput name="curriculum" placeholder="Seu currículo" />
            <aside>
              <Button
                type="submit"
                text="Finalizar Inscrição"
                icon={FaArrowAltCircleRight}
                disabled={sendLoading}
              />
              {sendLoading && <span>Enviando. Porfavor aguarde.</span>}
            </aside>
          </Form>
        </ModalContainer>
      </Modal>
      <SuccessModal
        title="Inscrição finalizada"
        subtitle="Enviaremos um e-mail contendo todos seus dados"
        isOpened={openSuccess}
        setOpen={setOpenSuccess}
        showCloseIcon={false}
        timer={3000}
      />
      <ErrorModal
        isOpened={openError}
        setOpen={setOpenError}
        title="Erro ao realizar a inscrição"
        subtitle="Tente novamente mais tarde"
      />
    </>
  )
}
export default SelectiveProcessForm
