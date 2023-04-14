import {Link} from 'react-router-dom'

import './index.css'

const BlogItem = props => {
  const {blogItem} = props
  const {id, title, imageUrl, avatarUrl, author, topic} = blogItem
  return (
    <Link to={`/blogs/${id}`} className="remove-underline">
      <li className="blog-item">
        <img src={imageUrl} className="blog-item-image" alt={title} />
        <div className="blog-item-details-card">
          <p className="topic">{topic}</p>
          <h1 className="title">{title}</h1>
          <div className="avatar-card">
            <img src={avatarUrl} className="avatar-image" alt={author} />
            <p className="author">{author}</p>
          </div>
        </div>
      </li>
    </Link>
  )
}

export default BlogItem
