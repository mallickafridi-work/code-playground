import { useEffect, useState } from "react"

function Fetch<T>() {
    const [data, setData] = useState<T | null>(null)
    const [isLoading, setIsLoading] = useState(true)
    const [isError, setIsError] = useState(false)

    useEffect(() => {
        let isMounted = true

        async function fetchData() {

            try {
                const response = await fetch('https://graphql.anilist.co')
                if (!response.ok) {
                    throw (new Error("Network Error"))
                }
                const result = await response.json()
                if (isMounted) setData(result)
            }
            catch (error) {
                if (isMounted) setIsError(true)
            }
            finally {
                if (isMounted) setIsLoading(false)
            }
        }

        fetchData()

        return () => {
            isMounted = false
        }
    }, [])

    return <>
        Banana</>
}


export default Fetch