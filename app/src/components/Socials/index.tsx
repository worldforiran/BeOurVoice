import cx from 'classnames';
import styles from './Socials.module.css';

import githubLogoSrc from 'src/assets/github.png';

function SocialButton({ title, url, logoSrc }: { title: string, url: string, logoSrc: string }) {
  return (
    <a
      className={cx(styles.SocialButton)}
      href={url}
      target="_blank"
      rel="noopener noreferrer"
    >
      <img
        className={cx(styles.SocialButtonLogo)}
        src={logoSrc}
        alt={title}
      />
    </a>
  );
}

function Socials() {
  return (
    <div className={cx(styles.Socials)}>
      <SocialButton
        title="Github"
        url="https://github.com/worldforiran/BeOurVoice"
        logoSrc={githubLogoSrc}
      />
    </div>
  );
}

export default Socials;
