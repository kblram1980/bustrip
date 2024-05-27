import React from 'react'
import './Bookticket.css';




const Bookticket = () => {
  return (
    <>
    <div className="ticketContainer">
            <div className="radio-group">
                        <label className="radio-label">
                            <input type="radio" name="option" value="1" />
                            One Way
                        </label>
                        <label className="radio-label">
                            <input type="radio" name="option" value="2" />
                            Round Trip
                        </label>
                    
            </div>

            <div className="form-container">
                    <div className="form-row">
                        <label htmlFor="input1">Origin</label>
                        <input id="input1" type="text"  placeholder='Leaving From...'/>
                    </div>
                    <div className="form-row">
                        <label htmlFor="input2">Destination</label>
                        <input id="input2" type="text" placeholder='Going to...' />
                    </div>
                    <div className="form-row">
                        <label htmlFor="input3">Date</label>
                        <input id="input3" type="text"  placeholder='Mon 27'/>
                    </div>
                    <div className="form-row">
                        <label htmlFor="input4">return</label>
                        <input id="input4" type="text" placeholder='27 May'/>
                    </div>
                    
            </div>
    </div>
      
    </>
  )
}

export default Bookticket
