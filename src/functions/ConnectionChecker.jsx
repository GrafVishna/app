import React, {useEffect, useState} from 'react'

const ConnectionChecker = () => {
    useEffect(() => {
        checkConnection()
    }, [])

    const checkConnection = async () => {
        try {
            const response = await fetch('https://raw.githubusercontent.com/GrafVishna/OTHER/main/data.json')
            if (response.ok) {
                const data = await response.text()
                console.log(data)
            }
        } catch (error) {
            console.error('Error:', error)
        }
    }

    return (
        <div>

        </div>
    )
}

export default ConnectionChecker
