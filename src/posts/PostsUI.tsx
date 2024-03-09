    import React from 'react';
    import { ScrollView } from 'react';


    interface PostsUIProps {
        posts: object;
    }
    
    const PostsUI: React.FC<PostsUIProps> = ({posts}) => {
        console.log(posts)
        return (
            <>
                <div style={{ height: '200px', overflowY: 'scroll' }}>
                    <h2>Список постів</h2>
                    <ul>
                        {posts?.map((post) => {
                            let imgUrl = post.photo[0]?.replace('localhost:3000', 'localhost:5000')
                            console.log(imgUrl)
                            return (
                                <li key={post.id}>
                                <h3>{post.title}</h3>
                                <p>{post.text}</p>
                                <p>
                                    { post.photo[0] ? (<img src={imgUrl} alt="My Image" />) : ('')}
                                </p>
                            </li>
                            )
                        
                        })
                        
                        }
                    </ul>
                </div>
            </>
            
        );
    };

    export default PostsUI;
