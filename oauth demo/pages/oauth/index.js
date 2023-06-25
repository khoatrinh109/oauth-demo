import axios from 'axios'
import React from 'react'
import { setCookie } from 'cookies-next'
const index = () => {
    return <div></div>
}

export default index

export const getServerSideProps = async (context) => {
    const { code } = context.query

    const result = await axios.post(
        'http://localhost:9999/api/oauth2/verifyCodeClientSecret',
        {
            code: code,
            clientSecret: process.env.NEXT_PUBLIC_CLIENTSECRET,
        },
    )

    if (!result.data.accessToken) {
        return { notFound: true }
    }
    setCookie('accessToken', result.data.accessToken)

    return {
        redirect: {
            destination: '/',
            permanent: true,
        },
    }
}
