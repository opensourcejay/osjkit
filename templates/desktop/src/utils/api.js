// API Configuration
const API_CONFIG = {
  // Default base URL - users can easily change this
  baseURL: 'https://jsonplaceholder.typicode.com',
  
  // Default headers
  headers: {
    'Content-Type': 'application/json',
  },
  
  // Timeout in milliseconds
  timeout: 10000,
}

// API utility class
class ApiService {
  constructor(config = {}) {
    this.config = { ...API_CONFIG, ...config }
  }

  // Set base URL
  setBaseURL(url) {
    this.config.baseURL = url
  }

  // Set headers
  setHeaders(headers) {
    this.config.headers = { ...this.config.headers, ...headers }
  }

  // Generic request method
  async request(endpoint, options = {}) {
    const url = `${this.config.baseURL}${endpoint}`
    
    const config = {
      ...options,
      headers: {
        ...this.config.headers,
        ...options.headers,
      },
    }

    try {
      const controller = new AbortController()
      const timeoutId = setTimeout(() => controller.abort(), this.config.timeout)

      const response = await fetch(url, {
        ...config,
        signal: controller.signal,
      })

      clearTimeout(timeoutId)

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`)
      }

      const data = await response.json()
      return { data, status: response.status, success: true }
    } catch (error) {
      console.error('API Request Error:', error)
      return {
        data: null,
        error: error.message,
        success: false,
      }
    }
  }

  // GET request
  async get(endpoint, params = {}) {
    const queryString = new URLSearchParams(params).toString()
    const url = queryString ? `${endpoint}?${queryString}` : endpoint
    
    return this.request(url, {
      method: 'GET',
    })
  }

  // POST request
  async post(endpoint, data = {}) {
    return this.request(endpoint, {
      method: 'POST',
      body: JSON.stringify(data),
    })
  }

  // PUT request
  async put(endpoint, data = {}) {
    return this.request(endpoint, {
      method: 'PUT',
      body: JSON.stringify(data),
    })
  }

  // DELETE request
  async delete(endpoint) {
    return this.request(endpoint, {
      method: 'DELETE',
    })
  }
}

// Create and export a default instance
const apiService = new ApiService()

// Named exports for flexibility
export { ApiService, apiService as default }

// Example usage for different APIs:
// 
// For a custom API:
// apiService.setBaseURL('https://your-api.com/api/v1')
// apiService.setHeaders({ 'Authorization': 'Bearer your-token' })
//
// For different endpoints:
// const users = await apiService.get('/users')
// const newUser = await apiService.post('/users', { name: 'John', email: 'john@example.com' })
// const updatedUser = await apiService.put('/users/1', { name: 'Jane' })
// const deleted = await apiService.delete('/users/1')
