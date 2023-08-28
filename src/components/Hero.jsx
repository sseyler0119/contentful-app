import heroImg from '../assets/hero1.svg';

const Hero = () => {
  return (
    <section className="hero">
        <div className="hero-center">
            <div className="hero-title">
                <h1>Contentful CMS</h1>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quo, error 
                    autem repellat tenetur deserunt facilis obcaecati assumenda perferendis 
                    asperiores quae, eaque cumque officia esse nulla cupiditate, aut eos provident 
                    consequuntur.
                </p>
            </div>
            <div className="img-container">
                <img src={heroImg} alt="woman and React icon" className='img'/>
            </div>
        </div>
    </section>
  )
}
export default Hero