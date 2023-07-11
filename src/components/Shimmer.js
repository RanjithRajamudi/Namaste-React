const Shimmer = () => {
    return (
        <div className='restaurant-list'>
            {Array(10).fill("").map((e,index) => (
                <div key={index} className="shimmmer-card"></div>
            ))}
        </div>
    )
}

export default Shimmer;