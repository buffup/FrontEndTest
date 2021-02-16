import React from 'react'

import Buff from './components/Buff'

const App = () => {
  return (
    <main>
      <section className="d-flex flex-column justify-content-center align-items-center" style={{ height: '100vh' }}>
        <div>
          <Buff />
        </div>
        <div>
          <video id="buffVideo" controls>
            <source
              src="https://buffup-public.s3.eu-west-2.amazonaws.com/video/Auto+Buff+Stevie+G.mp4"
              type="video/mp4"
            />
          </video>
        </div>
      </section>
    </main>
  )
}

export default App;