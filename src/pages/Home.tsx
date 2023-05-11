import ShowEmail from '../components/ShowEmail'
import ButtonCreateEmail from '../components/buttons/ButtonCreateEmail'
import ButtonGenerateWords from '../components/buttons/ButtonGenerateWords'
import ButtonLogout from '../components/buttons/ButtonLogout'

function Home() {
  return (
    <>
      <div className="flex flex-col items-center justify-center h-screen">
        <ShowEmail />
        <div className="flex flex-row space-x-5 mt-5">
          <ButtonCreateEmail />
          <ButtonGenerateWords />
        </div>
        <div className="flex flex-col mt-32">
          <ButtonLogout />
        </div>
      </div>
    </>
  )
}

export default Home
