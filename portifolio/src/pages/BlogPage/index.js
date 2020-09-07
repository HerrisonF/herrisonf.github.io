import React from 'react';
import { Container } from 'react-bootstrap';
import BackButtonComponent from '../../components/backButtonComponent';

const BlogPage = () => {
    return(
        <Container>
            <BackButtonComponent />
            <div>Blog Page</div>
        </Container>
    );
};

export default BlogPage;