import styles from './BaseTemplate.module.scss';

export interface IBaseTemplate {
  sampleProp: string;
}

const BaseTemplate: React.FC<IBaseTemplate> = ({ sampleProp }) => {
  return <div className={styles.container}>{sampleProp}</div>;
};

export default BaseTemplate;
