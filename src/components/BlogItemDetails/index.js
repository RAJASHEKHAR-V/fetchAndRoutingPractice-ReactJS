import {Component} from 'react'

import Loader from 'react-loader-spinner'

import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'

import './index.css'

class BlogItemDetails extends Component {
  state = {blogItemDetailObject: {}, isLoaderStarted: true}

  componentDidMount() {
    this.getItemDetails()
  }

  getItemDetails = async () => {
    const {match} = this.props
    const {params} = match
    const {id} = params
    const response = await fetch(`https://apis.ccbp.in/blogs/${id}`)
    const data = await response.json()
    const itemDetails = {
      id: data.id,
      title: data.title,
      imageUrl: data.image_url,
      avatarUrl: data.avatar_url,
      author: data.author,
      content: data.content,
      topic: data.topic,
    }
    this.setState(prevState => ({
      blogItemDetailObject: itemDetails,
      isLoaderStarted: !prevState.isLoaderStarted,
    }))
  }

  blogDetails = () => {
    const {blogItemDetailObject} = this.state
    const {title, imageUrl, avatarUrl, author, content} = blogItemDetailObject

    return (
      <div className="blog-details-card">
        <h1 className="blog-title">{title}</h1>
        <div className="blog-avatar-card">
          <img src={avatarUrl} className="blog-avatar-image" alt={author} />
          <p className="blog-author">{author}</p>
        </div>
        <img src={imageUrl} className="blog-image" alt={title} />
        <p className="content">{content}</p>
      </div>
    )
  }

  render() {
    const {isLoaderStarted} = this.state

    return (
      <div className="blog-item-details-container">
        {isLoaderStarted ? (
          <div data-testid="loader">
            <Loader type="TailSpin" color="#00bfff" height={50} width={50} />
          </div>
        ) : (
          this.blogDetails()
        )}
      </div>
    )
  }
}

export default BlogItemDetails
