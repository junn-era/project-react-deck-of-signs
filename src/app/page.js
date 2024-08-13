import Image from "next/image";
import styles from "./page.module.css";
import Top from './components/Top';
import Card from './components/Card';
import Aquarius from '../../public/aquarius.png';
import Pisces from '../../public/pisces.png';
import Aries from '../../public/aries.png';
import Taurus from '../../public/taurus.png';
import Gemini from '../../public/gemini.png';
import Cancer from '../../public/cancer.png';
import Leo from '../../public/leo.png';
import Virgo from '../../public/virgo.png';
import Libra from '../../public/libra.png';
import Scorpio from '../../public/scorpio.png';
import Sagitarius from '../../public/sagitarius.png';
import Capricornius from '../../public/capricornius.png';



export default function Home() {
  return (
    <div>
      <Top />
      <main className={styles.main_container}>
        <section>
          <Card
            sign={'Aquário'}
            InitDate={'21/01'}
            EndDate={'19/02'}
            image={Aquarius}
          />
          <Card
            sign={'Peixes'}
            InitDate={'20/02'}
            EndDate={'20/03'}
            image={Pisces}

          />
          <Card
            sign={'Áries'}
            InitDate={'21/03'}
            EndDate={'20/04'}
            image={Aries}
          />
          <Card
            sign={'Touro'}
            InitDate={'21/04'}
            EndDate={'21/05'}
            image={Taurus}
          />
          <Card
            sign={'Gêmeos'}
            InitDate={'22/05'}
            EndDate={'21/06'}
            image={Gemini}
          />
          <Card
            sign={'Câncer'}
            InitDate={'21/06'}
            EndDate={'23/07'}
            image={Cancer}
          />
          <Card
            sign={'Leão'}
            InitDate={'24/07'}
            EndDate={'23/08'}
            image={Leo}
          />
          <Card
            sign={'Virgem'}
            InitDate={'24/08'}
            EndDate={'23/09'}
            image={Virgo}
          />
          <Card
            sign={'Libra'}
            InitDate={'24/09'}
            EndDate={'23/10'}
            image={Libra}
          />
          <Card
            sign={'Escorpião'}
            InitDate={'24/10'}
            EndDate={'22/11'}
            image={Scorpio}
          />
          <Card
            sign={'Sagitário'}
            InitDate={'23/11'}
            EndDate={'21/12'}
            image={Sagitarius}
          />
          <Card
            sign={'Capricórnio'}
            InitDate={'22/12'}
            EndDate={'20/01'}
            image={Capricornius}
          />

        </section>
      </main>
    </div>
  );
}
