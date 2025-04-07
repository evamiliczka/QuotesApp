import { useState } from "react"

const QuotesApp = () => {
    const [quote, setQuote] = useState({text:"This is my first quote", author:"Anonymuous"});
    const [showFavorites, setShowFavorites] = useState(false);
    const [favorites, setFavorites] = useState([{text:"bla", author:"vle"}])

     const updateQuote = async () => {
      
       /* The orignial is not wokring
       The SSL certificate of quotable.io is actually expired or misconfigured
→ The server's HTTPS certificate might have expired or not be properly issued.
 */
        try{
          const url = 'https://dummyjson.com/quotes/random'
          const response = await fetch(url)
          const data = await response.json()
          if (!data.id) throw new Error(`${statusCode} ${statusMessage}`);
          setQuote({text:data.quote, author: data.author})
        }
        catch (error){
            console.error(error)
            setQuote({text:`Something went wrong`, author:"Your program"})
        }
      }
      
      const addToFavorites = () => {
        
        setFavorites([...favorites,{
            text: quote.text,
            author: quote.author
        }]);
      }


      const toggleFavorites = () => {
        console.log('hi')
        setShowFavorites(!showFavorites)
      }

      const favoritesRemove = (index) => {
        setFavorites(favorites.filter((item, i) => i != index))
        
      }


  return (
    <div className="container">
        <div className="quotes-app">
            <h1 className="app-heading">Quote.</h1>
            <i className="bx bxs-heart fav-icon" onClick={toggleFavorites}></i>
            <div className="quote">
                <i className="bx bxs-quote-alt-left left-quote"></i>
                <p className="quote-text">{quote.text}</p>
                <p className="quote-author">{quote.author}</p>
                <i className="bx bxs-quote-alt-right right-quote"></i>
            </div>
        <div className="circles">
            <div className="circle-1"></div>
            <div className="circle-2"></div>
            <div className="circle-3"></div>
            <div className="circle-4"></div>
        </div>
        <div className="buttons">
            <button className="btn btn-new" onClick={updateQuote}>New Quote</button>
            <button className="btn btn-fav" onClick={addToFavorites}>Add to Favorites</button>
        </div>
        {showFavorites&&<div className="favorites">
            <button className="btn-close" onClick={toggleFavorites}>
                <i className="bx bx-x"></i>
            </button>
            {favorites.map((favorite, index) => (
            <div className="fav-quote" key={index}>
                <div className="fav-quote-delete">
                    <i className="bx bx-x-circle" onClick={()=>favoritesRemove(index)}></i>
                </div>
                <div className="fav-quote-content">
                    <div className="fav-quote-text">{favorite.text}</div>
                    <div className="fav-quote-author">{favorite.author}</div>
                </div>
            </div>) )}
        </div>}
        </div>

        <div className="buttons attribution">
            <button className="btn btn-new">Developed  as a 
                part of the course <a href="https://www.udemy.com/course/react-js-build-6-real-world-react-apps-from-scratch/">React Masterclass. Build 6 Real-World React Projects.</a>

            </button>
         
        </div>
    </div>
  )
}

export default QuotesApp