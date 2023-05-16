import { Container, Row, Figure, Col, Form } from "react-bootstrap";
import blogs from "../data/blogs";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
export const Blogs = () => {
    const [search, setSearch] = useState("");
    const [filterBlog, setFilterBlog] = useState([])
    useEffect(() => {
        const result = blogs.filter((item) => item.title.includes(search))
        setFilterBlog(result);
    }, [search]);
    return (
        <Container>
            <Row className="justify-content-center">
                <Col md={6}>
                    <Form.Group className="mb-3" controlId="search">
                        <Form.Control type="text" placeholder="ค้นหาทบความ" autoComplete="off"
                            value={search}
                            onChange={e => setSearch(e.target.value)} />
                    </Form.Group>
                </Col>
                {
                    filterBlog.map((blog) => (
                        <Col md="12" key={blog.id}>
                            <Figure>
                                <Figure.Caption>
                                    <Link to={`/blog/${blog.id}`} style={{ textDecoration: 'none' }} className="text-secondary">
                                        <h3>{blog.title}</h3>
                                        {blog.content.substring(0, 400)}
                                    </Link>
                                    <hr />
                                </Figure.Caption>
                            </Figure>
                        </Col>
                    ))
                }
            </Row>
        </Container>
    )
}
