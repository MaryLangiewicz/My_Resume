import Button from 'react-bootstrap/Button'

function Banner(){
    return(
        <div className="banner" >
            <div className="container">
                <h1>HELLO, MY NAME IS MARIA</h1>
                <p> I am a programmer </p>
                <Button className="btn btn-primary" variant="danger">My work</Button>
                <Button className="btn btn-secondary" variant="info">Here me</Button>{' '}
            </div>
        </div>
    )
}

export default Banner;