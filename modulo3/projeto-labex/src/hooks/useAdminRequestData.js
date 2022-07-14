// import axios from 'axios'
// import { useState, useEffect } from 'react'
// import { base_url } from '../constants/url'

// export const useGetTripDetails = () => {
//     const [trip, setTrip] = useState([])
//     const [isLoading, setIsLoading] = useState(false)
//     const [error, setError] = useState("")

//     useEffect(() => {
//         setIsLoading(true)
//         const token = localStorage.getItem('token')

//         axios.get(`${base_url}/trip/2AaaNKGWQ7PMcEojWPRv`, {
//             headers: {
//                 auth: token
//             }
//         }).then((response) => {
//             setIsLoading(false)
//             setTrip(response.data.trip)            
//         }).catch((error) => {
//             setError(error)
//             setIsLoading(false)
//         })
//     }, [])

//     return [trip, isLoading, error]
// }



// export const usePostData = (url) => {
//     const [data, setData] = useState(undefined)
//     const [isLoading, setIsLoading] = useState(false)
//     const [error, setError] = useState("")

//     const body = {}

//     useEffect(() => {
//         setIsLoading(true)
//         axios.post(`${base_url}/${url}`)
//         .then((response) => {
//             setData(response.data)
//             setIsLoading(false)
//         }).catch((error) => {
//             setError(error)
//             setIsLoading(false)
//         })
//     }, [])

//     return [data, isLoading, error]
// }