import { useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'
import blogs from '../data/blogs';
import { Col, Container, Row } from 'react-bootstrap';

export const Details = () => {
    const { id } = useParams()
    const [title, setTitle] = useState("");
    const [image, setImage] = useState("");
    const [content, setContent] = useState("");
    const [author, setAuthor] = useState("");
    useEffect(() => {
        const result = blogs.find((item) => item.id === parseInt(id))
        setTitle(result.title)
        setImage(result.image_url)
        setContent(result.content)
        setAuthor(result.author)
        // eslint-disable-next-line
    }, []);
    return (
        <Container>
            <Row>
                <Col md="12" className='text-center'>
                    <strong > บทความ : {title}</strong>
                    <hr />
                    <img src={image} alt={title} />
                    <hr />
                </Col>
                <Col md="12">
                    <strong> ผู้เขียน : {author}</strong>
                    <hr />
                    <p className='text-right'>{content}</p>
                </Col>
            </Row>
        </Container>
    )
}
