import styles from '../styles/Layout.module.css';
import Image from 'next/image'

export default function Layout({ children }) {
  return (
    <div className="flex h-screen bg-5699B3"> {/* Change the background color here */}
      <div className="m-auto bg-slate-50 rounded-md w-3/5 h-3/4 grid lg:grid-cols-2">
        <div className={styles.imgStyle}>
         
          <div className={styles.cartoonImg}>
          <Image
                src='/assets/img2.png'
                alt="Landscape picture"
               width={500}
               height={500}

    />
    h2
          </div>
             
        </div>
        <div className="right flex flex-col justify-evenly">
          <div className="text-center py-5">{children}</div>
        </div>
      </div>
    </div>
  );
}


