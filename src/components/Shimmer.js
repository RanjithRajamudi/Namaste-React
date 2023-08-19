const Shimmer = () => {
    return (
        <div className='flex flex-wrap'>
            {Array(10).fill("").map((e,index) => (
                <div key={index} className="w-52 h-52 bg-gray-300 m-5"></div>
            ))}
        </div>
    )
}

export default Shimmer;