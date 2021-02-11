import React from 'react'

const App = () => {
  return (
    <main>
      <section>
        <video id="buffVideo" controls>
          <source
            src="https://buffup-public.s3.eu-west-2.amazonaws.com/video/Auto+Buff+Stevie+G.mp4"
            type="video/mp4"
          />
        </video>
      </section>
    </main>
  )
}

export default App;