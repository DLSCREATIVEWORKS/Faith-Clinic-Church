import HomeEffects from './HomeEffects'
import { homeMarkup } from './home-markup'
import './styles.css'

export default function HomePage() {
  return (
    <>
      <div dangerouslySetInnerHTML={{ __html: homeMarkup }} />
      <HomeEffects />
    </>
  )
}
