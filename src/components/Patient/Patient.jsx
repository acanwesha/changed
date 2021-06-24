import { Card } from "react-bootstrap"

export const Patient = props => {
  const { loading, patient } = props

  if (loading) {
    return <div>loading......</div>
  }

  return (
    <div>
      <div>
        <h4 className='text-center'>Patient</h4>
        <Card className='my-2'>
          <Card.Body>
            <Card.Text className='font-weight-bold'>
              Name:
              <span className='font-weight-light'>
                {patient.firstName + " " + patient.lastName}
              </span>
            </Card.Text>
            <Card.Text className='font-weight-bold'>
              MRN: <span className='font-weight-light'>{patient.mrn}</span>
            </Card.Text>
            <Card.Text className='font-weight-bold'>
              FIN: <span className='font-weight-light'>{patient.fin}</span>
            </Card.Text>
          </Card.Body>
        </Card>
      </div>
    </div>
  )
}
