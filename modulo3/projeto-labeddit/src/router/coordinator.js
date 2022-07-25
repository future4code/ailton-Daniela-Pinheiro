export const goToFeedPage = (navigate) => {
    navigate('/')
}

export const goToLoginPage = (navigate) => {
    navigate('/entrar')
}

export const goToSignUpPage = (navigate) => {
    navigate('/cadastrar')
}

export const goToPostPage = (navigate, id) => {
    navigate(`/post/${id}`)
}