import { setCookie } from 'cookies-next'

export const loginWithAbc = () => {
    setCookie('clientId', process.env.NEXT_PUBLIC_CLIENTID)
    window.location.replace(
        `http://localhost:9999/oauth?clientId=${process.env.NEXT_PUBLIC_CLIENTID}`,
    )
}
