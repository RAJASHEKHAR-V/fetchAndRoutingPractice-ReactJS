import {Component} from 'react'

import Loader from 'react-loader-spinner'

import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'

import BlogItem from '../BlogItem'

import './index.css'

class BlogList extends Component {
  state = {blogDetailsList: [], isLoaderStarted: true}

  componentDidMount() {
    this.getData()
  }

  getData = async () => {
    const response = await fetch('https://apis.ccbp.in/blogs')
    const data = await response.json()
    const blogList = data.map(eachItem => ({
      id: eachItem.id,
      title: eachItem.title,
      imageUrl: eachItem.image_url,
      avatarUrl: eachItem.avatar_url,
      author: eachItem.author,
      topic: eachItem.topic,
    }))
    this.setState(prevState => ({
      blogDetailsList: blogList,
      isLoaderStarted: !prevState.isLoaderStarted,
    }))
  }

  render() {
    const {blogDetailsList, isLoaderStarted} = this.state
    console.log(blogDetailsList)

    return (
      <ul className="blog-card">
        {isLoaderStarted ? (
          <div data-testid="loader">
            <Loader type="TailSpin" color="#00bfff" height={50} width={50} />
          </div>
        ) : (
          blogDetailsList.map(eachItem => (
            <BlogItem key={eachItem.id} blogItem={eachItem} />
          ))
        )}
      </ul>
    )
  }
}

export default BlogList
