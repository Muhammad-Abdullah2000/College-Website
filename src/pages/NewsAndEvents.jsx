import React from 'react'
import "../styles/NewsAndEvents.css";
import result from '../images/Result-300x200.png';

const NewsAndEvents = () => {
    return (
        <section id='NewsAndEvents'>

            <div className="newsHeadingSection">
                <h1>News And Events</h1>
            </div>


            <div className="newsCard">
                <div className="newsright">
                    <img src={result} alt="" style={{ maxWidth: "100%", height: "100%" }} />
                </div>

                <div className="newsleft">
                    <p>Posted On 17 November By Shaina Mansuri</p> <br />
                    <h2>Class 11 Result out! Go Check Yours</h2><br />
                    <p>All nine (9) education boards across Punjab in Pakistan have announced results for Higher School Secondary Certificate (HSSC-1) 2022 (Intermediate part 1). It is also known as first-year or class 11th nationwide. Result announced today, on the 17th of November, 2022, in the morning at 10 am.   The boards....</p>

                    <button>Details</button>
                </div>
            </div>

             <div className="newsCard">
                <div className="newsright">
                    <img src={result} alt="" style={{ maxWidth: "100%", height: "100%" }} />
                </div>

                <div className="newsleft">
                    <p>Posted On 17 November By Shaina Mansuri</p> <br />
                    <h2>Class 11 Result out! Go Check Yours</h2><br />
                    <p>All nine (9) education boards across Punjab in Pakistan have announced results for Higher School Secondary Certificate (HSSC-1) 2022 (Intermediate part 1). It is also known as first-year or class 11th nationwide. Result announced today, on the 17th of November, 2022, in the morning at 10 am.   The boards....</p>

                    <button>Details</button>
                </div>
            </div>



            <div className="newsCard">
                <div className="newsright">
                    <img src={result} alt="" style={{ maxWidth: "100%", height: "100%" }} />
                </div>

                <div className="newsleft">
                    <p>Posted On 17 November By Shaina Mansuri</p> <br />
                    <h2>Class 11 Result out! Go Check Yours</h2><br />
                    <p>All nine (9) education boards across Punjab in Pakistan have announced results for Higher School Secondary Certificate (HSSC-1) 2022 (Intermediate part 1). It is also known as first-year or class 11th nationwide. Result announced today, on the 17th of November, 2022, in the morning at 10 am.   The boards....</p>

                    <button>Details</button>
                </div>
            </div> 




        </section>
    )
}

export default NewsAndEvents