import { useParams } from 'react-router-dom';
import { Helmet } from 'react-helmet';

export default function BlogPost() {
    const { postId } = useParams();
    let PostComponent;
    try {
        PostComponent = require(`../blog/posts/${postId}`).default;
    } catch (error) {
        return <div>Post not found, Oops.. Contact US!</div>;
    }

    return (
        <main>
            <Helmet> <title>{postId.replace(/-/g, ' ')}</title> </Helmet>
            <PostComponent />
        </main>
    );
}
