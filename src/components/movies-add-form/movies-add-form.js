import './movies-add-form.css'

const MoviesAddForm = () => {
  return (
    <div className='movie-add-form '>
        <h1>Yangi kino qo'shish</h1> 
        <form className='add-form d-flex'>
            <input type='text' className='form-control new-post-label' placeholder='Qanday kino?' />
            <input type='text' className='form-control new-post-label' placeholder="Necha marotaba korilgan?" />  
            <button type='submit' className='btn btn-outline-dark'> 
                Qo'shish
            </button>  
        </form>
    </div>
  )
}

export default MoviesAddForm