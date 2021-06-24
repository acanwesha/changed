import { Card } from "react-bootstrap"

export const Child = props => {
  const { loading, child } = props

  if (loading) {
    return <div>loading......</div>
  }

  return (
    <div>
      <div>
        <h4 className='text-center'>Child</h4>
        <Card className='my-2'>
          <Card.Body>
            <Card.Text className='font-weight-bold'>
              Name:
              <span className='font-weight-light'>
                {child.firstName + " " + child.lastName}
              </span>
            </Card.Text>
            <Card.Text className='font-weight-bold'>
              MRN: <span className='font-weight-light'>{child.mrn}</span>
            </Card.Text>
            <Card.Text className='font-weight-bold'>
              FIN: <span className='font-weight-light'>{child.fin}</span>
            </Card.Text>
          </Card.Body>
        </Card>
      </div>
    </div>
  )
}
