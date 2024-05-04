export function Pagination ({ currentPage, projectsPerPage, setCurrentPage, totalProjects }) {
  const pageNumbers = []

  for (let i = 1; i <= Math.ceil(totalProjects / projectsPerPage); i++) {
    pageNumbers.push(i)
  }

  const specificPage = (id) => {
    setCurrentPage(id)
  }

  return (
    <div className='flex justify-center'>
      {
        pageNumbers.map(page => (
          <button onClick={() => specificPage(page)} key={page} className={`m-2 px-2 border-2 border-solid border-white rounded-md ${page === currentPage ? 'bg-gray-500' : ''}`}> {page} </button>
        ))
      }
    </div>
  )
}
