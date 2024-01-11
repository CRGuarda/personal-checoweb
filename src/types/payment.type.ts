export type userData = {
  ID_CLIENTE: number
  ID_PRESTAMO: string
  NOMBRE_COMPLETO: string
  CUOTA: string
}

export type queuePayment = {
  phoneNumber: string
  userData: userData
  lastModified: string | Date
  localDate: string
  imageURL: string
  key: string
}
