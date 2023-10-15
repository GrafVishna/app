import React, { useState, useEffect } from 'react'
import { getDataApi } from '@data/getDataApi.js'
import styles from './About.module.scss'
import Container from '@src/components/containers/Container.jsx'
import TitleSection from '@src/components/text/TitleSection/TitleSection.jsx'
import SubtitleLine from '@src/components/text/SubtitleLine/SubtitleLine.jsx'
import ButtonRound from '@src/components/buttons/ButtonRound/ButtonRound.jsx'
import Image from '@src/components/media/Image/Image.jsx'
import Statistics from '@src/components/text/Statistics/Statistics.jsx'

const About = () => {

   const [data, setData] = useState([])

   useEffect(() => {
      const fetchData = async () => {
         try {
            const data = await getDataApi.getAll('about')
            setData(data[0])
         } catch (error) {
            console.error('Error fetching data:', error)
         }
      }

      fetchData()
   }, [])

   return (
      <div className={styles.about}>
         <Container containerSize="s-container relative">
            <div className={styles.about_grid}>
               <div className={styles.text}>
                  <TitleSection content={data.title} />
                  <SubtitleLine className={styles.subtitle} content={data.subtitle} />
               </div>
               <div className={styles.bottom}>
                  <Statistics className={styles.statistics} label={data.label} percent={data.percent} />
                  <div className={styles.bottom_footer}>
                     <div className={styles.bottom_image}>
                        <Image src={data.img01} className={styles.image1_size} />
                     </div>
                     <div className={styles.bottom_button}>
                        <ButtonRound type='button' text='Read More' />
                     </div>
                  </div>
               </div>
               <div className={styles.about_images}>
                  <div>
                     <Image src={data.img02} className={styles.image2_size} />
                     <Image src={data.img03} className={styles.image3_size} />
                  </div>
               </div>
            </div>
         </Container>
      </div>
   )
}

export default About