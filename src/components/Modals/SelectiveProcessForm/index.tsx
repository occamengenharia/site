import { Form } from '@unform/web'
import * as Yup from 'yup'
import axios from 'axios'
import { useRef, useState } from 'react'
import 'react-responsive-modal/styles.css'
import { Modal } from 'react-responsive-modal'

import getValidationErrors from '@/utils/getValidationErros'
import checkFileFormat from '@/utils/checkFileFormat'
import api from '@/services/api'

import {
  ModalContainer,
  Close,
  Check,
  FormButton,
  SuccessModalContainer
} from './styles'

import { FaArrowAltCircleRight } from 'react-icons/fa'

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
  const [departments, setDepartments] = useState<string[]>([])
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

  function handleSetDepartments(event) {
    let newDepartments = departments

    if (event) {
      newDepartments = event.map(e => e.value)
      setDepartments(newDepartments)
    }
  }

  function handleShowWichLanguageInput(event) {
    if (event.value === 'knowledgeYes') {
      setInputVisible(true)
    } else {
      setInputVisible(false)
    }
  }

  async function handleSubmit(data) {
    formRef.current?.setErrors({})

    data.department = departments
    try {
      const schemas = Yup.object().shape({
        name: Yup.string().required('Informe um nome válido'),
        ra: Yup.string().required('Informe um RA válido'),
        email: Yup.string().email().required('Informe um email válido'),
        phone: Yup.string().required('Informe seu número de celular'),
        course: Yup.string().required('Informe seu curso'),
        department: Yup.array()
          .of(Yup.string())
          .required('Informe o(s) setor(es) desejado(s)'),
        period: Yup.string().required('Informe qual período você está'),
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
          .test(
            'tipo do arquivo',
            'Insira arquivos com a extensão .pdf, .doc ou .docx',
            checkFileFormat
          )
      })

      await schemas.validate(data, { abortEarly: false })

      const formData = new FormData()
      // formData.append('name', data.name)
      // formData.append('email', data.email)
      // formData.append('ra', data.ra)
      // formData.append('phone', data.phone)
      // formData.append('course', data.course)
      // formData.append('period', data.period)
      // formData.append('interest_area', data.name || 'projetos')
      // formData.append('answer1', data.knowledge + '' + (data.wichLanguage + ''))
      // formData.append('answer2', data.learnNewLanguage)
      // formData.append('answer3', data.motivation)
      // formData.append('answer4', data.contribution)
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
        sector: data.sector,
        answer1: data.knowledge + '' + (data.wichLanguage + ''),
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
        sector: data.sector,
        answer1: data.knowledge + '' + (data.wichLanguage + ''),
        answer2: data.learnNewLanguage,
        answer3: data.motivation,
        answer4: data.contribution
      })

      handleOpenSuccess()
    } catch (err) {
      if (err instanceof Yup.ValidationError) {
        const errors = getValidationErrors(err)

        formRef.current?.setErrors(errors)
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
            <Input name="phone" placeholder="Celular" />
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
            <FileInput name="curriculum" placeholder="Seu currículo" />
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
