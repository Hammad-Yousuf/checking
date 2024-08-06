import axios from 'axios'
import Vue from 'vue'

axios.defaults.baseURL = (process.env.NODE_ENV === 'production' ? process.env.VUE_APP_BASE_API : process.env.VUE_APP_BASE_API_LOCAL) + 'api/v1'
axios.defaults.headers.common['Authorization'] = 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiIxIiwianRpIjoiYTczZmIwZmEzMjJiNjU3ZTk1ZjEwOGM5ODNjOTNjNjVmZmIyZmU4MjcxODViYzM2MTEwZjNjNWM1N2RiNjQxYzEwNjFkMWNkYzJkZDE3NDEiLCJpYXQiOjE3MjI5ODAxMDguMTc3OTQ4LCJuYmYiOjE3MjI5ODAxMDguMTc3OTUsImV4cCI6MTc1NDUxNjEwNy43MTE4NTcsInN1YiI6IjEiLCJzY29wZXMiOltdfQ.XVnWAhTK7W6dTGk8nFeiiPWhTcWI1lzyungXvgLCk6sAeCVRjwWz3Z9-SEhiC9d2r5AH0ucnaVwpCH_PMUg1GS9gGiRJ0qqlnFbrxAYm8rZwWl0BvxuiXV1RfbV8SbmvKvLQQTxKnSDEuKyyM5FYDyKG121o1agNQ2BLIxqRKGJ1L-vmFrpgs63ItWPxSP3VewFX3WnA7_3o9Clz0K01yDpeN0vTvL9OxM4dHQgs0JwNEutn5YA05Ba1Cs_LMw9VkTSBPKxtj6ZeNxlKVKbHcTwmsyzH6rcNVe3IbbDz4TFOAqdbb4ZGSDMjqcQAD5PCVEY80emyUJqvivTP6MUeYSmaZ98rnpOUwyx9nSnMb1yzBvNmxkydvD6cagiRZW2UvvBpuEMa2kEoQnbF2XmnFBIRTbS-Nn538LD_yOezBMK7b1oAN0C684lQ5y5yIyBydX7H8nt-eipW_MarDq443L7R0m_ZXVbbyJkMCwEdWrTQAD2y_1uQd9KlA4xzo6BwDgOIFWgXZPVu8t_yBTjrWk7Dnvbvcx0GtXBC95a-5w_QCWsjwIjgWShXfoaMigiP95YZZkr1feb4FZqPtskxLpqnnzmHU4CSf4BVknaJx5PVdke2-ElOWSFKszSTL4KOwyuHlVUozQAGRKGZp3Aob7mRVIta5YVEBQ2hVO3umcc';
axios.interceptors.response.use(
  (response) => {
    // Show success message
    if (response.data && response.data.message && response.data.success) {
      Vue.$toast.open({
        message: response.data.message,
        type: 'success',
        duration: 5000,
      })
    }

    return response
  },
  (error) => {
    if (error.response.status === 422) {
      // Show error message
      const { errors } = error.response.data
      const keys = Object.keys(errors);
      const message = errors[keys[0]] ? errors[keys[0]][0] : ''
      if (message)
      {
        Vue.$toast.open({
          message: message,
          type: 'error',
          duration: 5000,
        })
      }
    } else {
      if (error.response && error.response.status === 406)
      {

      } else if (error.response && error.response.data && error.response.data.message) {
        // Show error message
        Vue.$toast.open({
          message: error.response.data.message,
          type: 'error',
          duration: 5000,
        })
      }
    }

    // Catch 401 request
    if (error.response.status === 401) {
    } else {
      return Promise.reject(error)
    }
  }
)
