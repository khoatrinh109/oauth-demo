import axios from 'axios'
import { useRouter } from 'next/router'
import { toast } from 'react-hot-toast'
export default function Home({ userInfo }) {
    const router = useRouter()
    const handleLogout = async () => {
        const result = await axios.post('/api/logout')
        if (result.data.success) {
            router.push('/login')
        } else {
            toast.error(result.data.message)
        }
    }
    return (
        <>
            <div className='w-screen h-screen flex items-center justify-center'>
                <div className='flex flex-col gap-2'>
                    <div className='flex items-center justify-center'>
                        <img
                            src={userInfo.avatar}
                            className='w-[80px] h-[80px]'
                        />
                    </div>
                    <div className='flex items-center gap-2'>
                        <span>Email :</span>
                        <span>{userInfo.email}</span>
                    </div>
                    <div className='flex justify-center items-center'>
                        <button
                            onClick={() => {
                                handleLogout()
                            }}
                            className='border-solid border-[1px] rounded-md px-[12px] py-[8px] bg-[#686de0] text-[#fff] uppercase font-medium text-[14px]'
                        >
                            Đăng xuất
                        </button>
                    </div>
                </div>
            </div>
        </>
    )
}

export const getServerSideProps = async (context) => {
    const accessToken = context.req.cookies.accessToken
    console.log(accessToken)
    if (!accessToken) {
        return {
            redirect: {
                destination: '/login',
                permanent: true,
            },
        }
    }
    const userInfo = await axios.post('http://localhost:9999/api/getUserInfo', {
        accessToken: accessToken,
    })

    return {
        props: {
            userInfo: userInfo.data.userInfo,
        },
    }
}
