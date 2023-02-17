import Image from 'next/image';
import { icons } from '../../assets';
import styles from './herosection.module.scss';

const IMG_URL =
  'data:image/jpeg;base64,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';

const { outerDiv, innerDiv, img22 } = styles;
const { arrowCircleRight,line } = icons;
export default () => {
  return (
    <div className={styles.outerDiv}>
      <div className={styles.innerDiv}>
        <div className={styles.welcome}>
         <div><Image src={line}/>WELCOME TO</div>
        </div>
        <div className={styles.iet}>IET-DAVV</div>
        <p className={styles.desc}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat.
        </p>
        <div className={styles.explore}>
          <div>EXPLORE MORE</div>
          <div className={styles.whit}>
            <Image src={arrowCircleRight}/>
          </div>
        </div>
      </div>

      <div className={styles.img22}>
        <Image
          src={IMG_URL}
          height="658px"
          width="592px"
          className={styles.hello}
        />
      </div>
    </div>
  );
};
