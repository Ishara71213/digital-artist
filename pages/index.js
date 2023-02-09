import {NavBar,Banner,FeaturedImages,ImageDescription,ImageGallary} from '@/components'


export default function Home() {
  return (
    <>  
      <main >
        <NavBar/>
        <ImageGallary/>
        <Banner />
        <FeaturedImages/>
        <ImageDescription/>
      </main>
    </>
  )
}
