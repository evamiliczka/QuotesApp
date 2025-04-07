import { useState } from "react"

const QuotesApp = () => {
    const [quote, setQuote] = useState({text:"This is my first quote", author:"Anonymuous"});

     const updateQuote = async () => {
      /*  try {
                const url="https://api.quotable.io/random";
            const response = await fetch("https://api.quotable.io/random");
          const { statusCode, statusMessage, ...data } = await response.json();
          if (!response.author) throw new Error(`${statusCode} ${statusMessage}`);
          setQuote({text: data.content, author: data.author});
        } catch (error) {
          console.error(error);
          set({ text: "Opps... Something went wrong" });
        }*/
       /* The orignial is not wokring
       The SSL certificate of quotable.io is actually expired or misconfigured
→ The server's HTTPS certificate might have expired or not be properly issued.
 */

          const url = 'https://dummyjson.com/quotes/random'
          const response = await fetch(url)
          const data = await response.json()
          setQuote({text:data.quote, author: data.author})
      }
    



  return (
    <div className="container">
        <div className="quotes-app">
            <h1 className="app-heading">Quote.</h1>
            <i className="bx bxs-heart fav-icon"></i>
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
            <button className="btn btn-fav">Add to Favorites</button>
        </div>
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