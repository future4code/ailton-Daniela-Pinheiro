export const goToFeedPage = (navigate) => {
    navigate('/feed')
}

export const goToLoginPage = (navigate) => {
    navigate('/')
}

export const goToSignUpPage = (navigate) => {
    navigate('/cadastrar')
}

export const goToPostPage = (navigate, id) => {
    navigate(`/post/${id}`)
}