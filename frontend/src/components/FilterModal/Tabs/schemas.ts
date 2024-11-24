import * as Yup from 'yup'

export const schema = Yup.object().shape({
  work:  Yup.object().shape({
    name: Yup.string(),
    min: Yup.number(),
    max: Yup.number(),
    type: Yup.number(),
    status: Yup.number(),
  }),
  company: Yup.object().shape({
    name: Yup.string(),
    cnpj: Yup.string()
  }),
  localization: Yup.object().shape({
    name: Yup.string()
  }),
})