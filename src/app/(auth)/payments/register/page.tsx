import PaymentList from '@/components/payment/PaymentList'
import { getQueuePayments } from '@/lib/aws-s3/get-queue-payments'
// ToDo: Establish if want cache for like 2 seconds.

const page = async () => {
  let paymentsList
  try {
    paymentsList = await getQueuePayments()
  } catch (error) {}
  if (!paymentsList)
    return (
      <h2 className='h-max w-full text-4xl md:text-7xl text-center font-bold bg-accent-green'>Payment queue empty</h2>
    )

  return <PaymentList payments={paymentsList} />
}
export default page
