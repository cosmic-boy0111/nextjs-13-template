import '@styles/globals.css';
const Home = () => {

  return (
    <>
      <div className='main' >
        <div className='gradient' />
      </div>
      <main className='app flex justify-center flex-col' style={{
        width : '100%',
        height : '100vh'
      }} >
        <h1 className=' head_text text-left' > 
          <span className=' blue_gradient' > NextJs-13 Template </span>
        </h1>
        <p className='desc text-left' > Welcome to Gaurav's Next-js 13 template. </p>
        <p className='desc text-left' > You can start your journey by editing page.jsx and globals.css file </p>
      </main>
    </>
  )
}

export default Home