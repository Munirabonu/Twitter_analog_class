import './AppHeader.css'
const AppHeader = ({liked, allPosts}) => {
    return (
        <div className='app-header d-flex col-md-12'>
            <h1>Bintu Dilshod</h1>
            <h2>{allPosts} posts, like {liked}</h2>
        </div>
    )
}

export default AppHeader;