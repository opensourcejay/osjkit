import React, { useState } from 'react'
import styles from './ApiDemoPage.module.css'
import apiService from '../../utils/api'

const ApiDemoPage = () => {
  const [posts, setPosts] = useState([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)
  const [endpoint, setEndpoint] = useState('/posts')
  const [baseURL, setBaseURL] = useState('https://jsonplaceholder.typicode.com')
  const [newPost, setNewPost] = useState({ title: '', body: '', userId: 1 })

  // Fetch data from API
  const fetchData = async () => {
    setLoading(true)
    setError(null)
    
    // Update the base URL if changed
    apiService.setBaseURL(baseURL)
    
    const result = await apiService.get(endpoint)
    
    if (result.success) {
      setPosts(Array.isArray(result.data) ? result.data.slice(0, 5) : [result.data])
    } else {
      setError(result.error)
    }
    
    setLoading(false)
  }

  // Create new post
  const createPost = async () => {
    setLoading(true)
    setError(null)
    
    apiService.setBaseURL(baseURL)
    const result = await apiService.post('/posts', newPost)
    
    if (result.success) {
      setPosts([result.data, ...posts])
      setNewPost({ title: '', body: '', userId: 1 })
    } else {
      setError(result.error)
    }
    
    setLoading(false)
  }

  return (
    <div className={styles.page}>
      <div className={styles.container}>
        <h1 className={styles.title}>API Demo</h1>
        <div className={styles.content}>
          <p className={styles.intro}>
            This page demonstrates how to use the API utility service. You can easily customize 
            the endpoint and base URL to work with any API.
          </p>
          
          <div className={styles.demo}>
            <div className={styles.config}>
              <h2 className={styles.configTitle}>API Configuration</h2>
              
              <div className={styles.formGroup}>
                <label htmlFor="baseURL" className={styles.label}>Base URL:</label>
                <input
                  id="baseURL"
                  type="text"
                  value={baseURL}
                  onChange={(e) => setBaseURL(e.target.value)}
                  className={styles.input}
                  placeholder="https://your-api.com"
                />
              </div>
              
              <div className={styles.formGroup}>
                <label htmlFor="endpoint" className={styles.label}>Endpoint:</label>
                <input
                  id="endpoint"
                  type="text"
                  value={endpoint}
                  onChange={(e) => setEndpoint(e.target.value)}
                  className={styles.input}
                  placeholder="/posts"
                />
              </div>
              
              <button 
                onClick={fetchData} 
                disabled={loading}
                className={`${styles.button} ${styles.buttonPrimary}`}
              >
                {loading ? 'Loading...' : 'Fetch Data'}
              </button>
            </div>

            <div className={styles.create}>
              <h2 className={styles.createTitle}>Create New Post</h2>
              
              <div className={styles.formGroup}>
                <label htmlFor="title" className={styles.label}>Title:</label>
                <input
                  id="title"
                  type="text"
                  value={newPost.title}
                  onChange={(e) => setNewPost({...newPost, title: e.target.value})}
                  className={styles.input}
                  placeholder="Post title"
                />
              </div>
              
              <div className={styles.formGroup}>
                <label htmlFor="body" className={styles.label}>Body:</label>
                <textarea
                  id="body"
                  value={newPost.body}
                  onChange={(e) => setNewPost({...newPost, body: e.target.value})}
                  className={styles.textarea}
                  placeholder="Post content"
                  rows="3"
                />
              </div>
              
              <button 
                onClick={createPost} 
                disabled={loading || !newPost.title || !newPost.body}
                className={`${styles.button} ${styles.buttonSecondary}`}
              >
                {loading ? 'Creating...' : 'Create Post'}
              </button>
            </div>

            {error && (
              <div className={styles.error}>
                <strong>Error:</strong> {error}
              </div>
            )}

            <div className={styles.results}>
              <h2 className={styles.resultsTitle}>Results</h2>
              {loading && <div className={styles.loading}>Loading...</div>}
              
              {posts.length > 0 && (
                <div className={styles.resultsGrid}>
                  {posts.map((post, index) => (
                    <div key={post.id || index} className={styles.card}>
                      <h3 className={styles.cardTitle}>{post.title}</h3>
                      <p className={styles.cardBody}>{post.body}</p>
                      <small className={styles.cardMeta}>ID: {post.id} | User: {post.userId}</small>
                    </div>
                  ))}
                </div>
              )}
            </div>

            <div className={styles.docs}>
              <h2 className={styles.docsTitle}>How to Use</h2>
              <div className={styles.example}>
                <h3 className={styles.exampleTitle}>Basic Usage:</h3>
                <pre className={styles.code}>{`import apiService from './utils/api'

// Set your API base URL
apiService.setBaseURL('https://your-api.com/api/v1')

// Set authentication headers if needed
apiService.setHeaders({ 'Authorization': 'Bearer your-token' })

// Make API calls
const users = await apiService.get('/users')
const newUser = await apiService.post('/users', { name: 'John' })
const updatedUser = await apiService.put('/users/1', { name: 'Jane' })
const deleted = await apiService.delete('/users/1')`}</pre>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ApiDemoPage
