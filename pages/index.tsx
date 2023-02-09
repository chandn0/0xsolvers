import { ConnectButton } from '@rainbow-me/rainbowkit';
import type { NextPage } from 'next';
import Head from 'next/head';
import styles from '../styles/Home.module.css';
import { StoreMetadata } from "../components/StoreMetadata";
import { useState } from "react";
import Image from "next/image";

const Home: NextPage = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [img, setImg] = useState([]);
  const [video, setVideo] = useState([]);
  const [audio, setAudio] = useState([]);
  const [ipfsUri, setIpfsUri] = useState("");
  const [ipfs, setIpfs] = useState("");
  const upload = async () => {
    try {
      const metadata = await StoreMetadata(img, title, description, video, audio);
      const uri = metadata.url;
      setIpfs(uri);
      const url = `https://ipfs.io/ipfs/${metadata.ipnft}`;
      setIpfsUri(url);
      console.log("NFT metadata uploaded to IPFS");
      window.alert(
        "NFT metadata uploaded to ipfs , Click on IPFS link to use the data"
      );
    } catch (err) {
      console.log(err);
    }
  };
  function auto_height(elem: any) {  /* javascript */
    elem.style.height = "1px";
    elem.style.height = (elem.scrollHeight) + "px";
  }
  return (
    <div className={styles.container}>
      <Head>
        <title>RainbowKit App</title>
        <meta
          name="description"
          content="Generated by @rainbow-me/create-rainbowkit"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className={styles.connect}>
        <ConnectButton />
      </div>

      <main className={styles.main}>
        <div className={styles.form}>
          <div className={styles.firstrow}>
            <input
              className={styles.input}
              type="text"
              value={title}
              placeholder="Title"
              onChange={(e) => setTitle(e.target.value)}
            ></input>
          </div>
          <div className={styles.secondrow}>
            <textarea
              className={styles.autoheight}
              onInput={(e) => auto_height(e.target)}
              value={description}
              placeholder="Description "
              onChange={(e) => setDescription(e.target.value)}
            ></textarea>
          </div>
          <hr></hr>
          <div className={styles.thirdrow}>
            <h3>Image</h3>
            <label className={styles.inputLabel}>
              <input
                className={styles.inputBox}
                type="file"
                accept="image/*"
                onChange={(e) => setImg(e.target.files[0])}
              ></input>
            </label>
          </div>
          <hr></hr>

          <div className={styles.thirdrow}>
            <h3>Video</h3>
            <label className={styles.inputLabel}>
              <input
                className={styles.inputBox}
                type="file"
                accept="video/*"
                onChange={(e) => setVideo(e.target.files[1])}
              ></input>
            </label>
          </div>
          <hr></hr>


          <div className={styles.thirdrow}>

            <h3>Audio
            </h3>
            <label className={styles.inputLabel}>
              <input
                className={styles.inputBox}
                type="file"
                accept="audio/*"
                onChange={(e) => setAudio(e.target.files[2])}
              ></input>
            </label>
          </div>
          <hr></hr>



          <div className={styles.buttonRow}>
            <button onClick={upload} className={styles.button}>
              MInt
            </button>
          </div>
        </div>
      </main>



      <footer className={styles.footer}>
        <a href="https://rainbow.me" target="_blank" rel="noopener noreferrer">
          Made with ❤️ by your frens at 🌈
        </a>
      </footer>
    </div>
  );
};

export default Home;
