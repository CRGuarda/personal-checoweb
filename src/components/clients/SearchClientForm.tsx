'use client'
import { useInputText } from '@/hooks/useInputText'
import { ChangeEvent, FormEvent, useState } from 'react'

export const SearchClientForm = () => {
  const [clientsList, setClientsList] = useState([])
  const { handleInput, inputForSearch, inputSearchId } = useInputText()
  const [isLoading, setIsLoading] = useState(false)

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    try {
      setIsLoading(true)
      e.preventDefault()
      const clientsRequest = await fetch(`/api/clients/${inputForSearch}`)
      if (!clientsRequest.ok) return setClientsList([])
      const clientsResponse = await clientsRequest.json()
      setClientsList(clientsResponse)
    } catch (error) {
    } finally {
      setIsLoading(false)
    }
  }

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    e.target.validity.valid && e.target.value.length <= 8 && handleInput(e.target.value)
  }

  return (
    <section className='flex flex-col'>
      <label htmlFor={inputSearchId}>Ingrese DNI para búsqueda</label>
      <form className='flex flex-col md:flex-row gap-2 md:gap-4 w-max' onSubmit={handleSubmit}>
        <input
          type='text'
          id={inputSearchId}
          value={inputForSearch}
          onChange={handleInputChange}
          placeholder='04539343'
          pattern='^[0-9]+$'
          className='p-2 border-accent-lilac border rounded-md w-full md:w-[250px] focus-visible:outline-2 focus-visible:outline-primary'
        />
        <button
          type='submit'
          className='w-max border-2 p-2 place-self-center border-primary rounded-lg bg-accent-lilac disabled:border-gray-300 disabled:bg-gray-200 disabled:pointer-events-none disabled:text-gray-500'
          disabled={isLoading}
        >
          Buscar
        </button>
      </form>
      {clientsList.length ? (
        <div className='flex flex-col bg-red-300 p-5 rounded-lg'>
          {clientsList?.map(
            ({ ID, DNI, NOMBRE_COMPLETO, SEXO, EDAD, ESTADO_CIVIL, DEPARTAMENTO, CELULAR, CORREO, ESTADO }) => {
              return (
                <div key={ID} className='flex justify-between bg-violet-400 rounded-xl p-4'>
                  <span>{DNI}</span>
                  <span>{NOMBRE_COMPLETO}</span>
                  <span>{SEXO}</span>
                  <span>{EDAD}</span>
                  <span>{ESTADO_CIVIL}</span>
                  <span>{DEPARTAMENTO}</span>
                  <span>{CELULAR}</span>
                  <span>{CORREO}</span>
                  <span>{ESTADO}</span>
                </div>
              )
            }
          )}
        </div>
      ) : (
        <h3 className='italic text-2xl md:text-4xl w-full pt-8 text-center '>No records</h3>
      )}
    </section>
  )
}
