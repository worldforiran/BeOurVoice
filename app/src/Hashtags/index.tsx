import cx from 'classnames';
import styles from './Hashtags.module.css';

import list from './hashtagList';
import { useCallback, useState } from 'react';

interface IProps {};

function Hashtags({ }: IProps) {
  const [copied, setCopied] = useState(false);
  const hashtags = list.english;

  const copy = useCallback(() => {
    const text = '\n\n' + hashtags.map(hashtag => '#' + hashtag).join('\n');
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  }, []);

  return (
    <div className={styles.Hashtags}>
      <ul className={styles.HashtagList}>
        {hashtags.map((hashtag: string, index: number) => (
          <li key={index}>
            #{hashtag}
          </li>
        ))}
      </ul>
      <div className={cx(styles.CopyButton, {
        [styles.CopyButtonCopied]: copied
      })} onClick={copy}>
        {copied ? 'Copied!' : 'Copy'}
      </div>
    </div>
  );
}

export default Hashtags;
