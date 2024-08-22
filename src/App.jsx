import Button from "./components/button"
import { Layout } from "./components/layout"

function App() {

  return (
    <>
      <div className="bg-purple">
        <h1 className="text-3xl font-bold underline">
          Holis mundito
        </h1>
        <Layout>
        	<Button name="Julieth"/>
        	<Button name="Habid"/>
        	<Button name="Mazuzoe"/>
        	<Button name="Vader"/>
        	<Button name="Odashi"/>
        <Layout/>
      </div>

    </>
  )
}

export default App
