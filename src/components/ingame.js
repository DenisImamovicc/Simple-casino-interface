import React from 'react'

function ingame() {
  return (
    <div className="main container">
      <div className="ingame" style={{ display: "none" }}>
        <div className="ui grid centered">
          <div className="three wide column">
            <div className="ui right floated secondary button inverted"><i className="left chevron icon"></i>Back
            </div>
          </div>
          <div className="ten wide column">
            <div id="game-launch">
            </div>
          </div>
          <div className="three wide column"></div>
        </div>
      </div>
    </div>
  )
}

export default ingame