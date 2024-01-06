function NavPage({page, setPage}) {
  return (
    <nav className="d-flex justify-content-between align-items-center container">
        <button className="page-item"
        onClick={() => {
            if (page > 1) {
                setPage(page - 1);
            }
        }}
        >
            Previus
        </button>
        <p lassName="page-item">Page: {page}</p>
        <button className="page-item"
        onClick={() => setPage(page+1)}
        >
            Next
        </button>
    </nav>
  )
}

export default NavPage