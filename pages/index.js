import { useState, useEffect } from 'react';
import Head from 'next/head';
import Image from 'next/image';
import styles from '../styles/Home.module.css';
import axios from 'axios';

// BASE URL
const BASE_URL = 'https://jsonplaceholder.typicode.com';

export default function Home() {
  // STATES
  const [postComments, setPostComments] = useState([]);
  const [loading, setLoading] = useState(true);

  // Initialize Fetch
  useEffect(() => {
    axios
      .get(`${BASE_URL}/comments`)
      .then(function(response) {
        if (response?.data?.length > 0) {
          setPostComments(response?.data);
          setLoading(false);
        }
      })
      .catch(function(error) {
        setLoading(false);
      });
  }, []);

  // JSX
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* Body */}
      {loading ? <p>Loading</p> : <p>Loaded</p>}
    </div>
  );
}
