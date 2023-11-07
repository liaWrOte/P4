import React, { useEffect, useRef, useState } from 'react';
import { useInView } from 'react-intersection-observer';
import PropTypes from 'prop-types';
import './index.scss';

import Title from '../title/title';
import { act } from '@react-three/fiber';

/**
 * Primary UI component for user interaction
 */
const List = ({getListData, listSkills, listInterests, ...props }) => {

    // Data for title
    const TitleSpecs = [
        'Compétences',
        'techniques et personnelles',
        'skills'
    ];


    // Fetch data
    useEffect(() => {
        let fetchData = async() => {
            await getListData(props.content);
        }
        fetchData();
    }, [])

    let [listData, setlistData] = useState([]);

    useEffect(() => {
      listData = props.content === 'skills' ? setlistData(listSkills) : setlistData(listInterests);
    }, [listSkills, listInterests])


    // Animate
    
    const myRef = useRef([]);
    const [myRefIsLoaded, setMyRefIsLoaded] = useState(false)
    const addToRefs = (el) => {
        if (el && !myRef.current.includes(el)) {
            myRef.current.push(el);
        }
        setMyRefIsLoaded(true)
    };

    // const [hasDelay, setDelay] = useState(true);
    
    useEffect(() => {
        // console.log('ICIIIII', myRef.current)
        if (myRef.current.length > 0) {

            let options = {
                root: document.querySelector('#main'),
                rootMargin: '0px 0px -20% 0px',
                threshold: 1,
            }
            
            let actualEntry = null;
            const observer = new IntersectionObserver((entries) => {
                // console.log(entry[0].target);
                entries.forEach(function (entry) {
                    // setTimeout(() => {
                            if(entry.isIntersecting && !entry.target.classList.contains('focus')) {
                            // setTimeout(() => {
                                entry.target.classList.add('focus');
                                observer.unobserve(entry.target);
                            // }, '500')            
                        } else {
                            
                        }
                    })
            }, options)
       
    
            for (const entry of myRef.current) {
                // const { ref, inView, entry } = useInView({
                //     /* Optional options */
                //     threshold: 0,
                //   })
                observer.observe(entry);
            }
        }

    }, [myRefIsLoaded])


    if (listData.length > 0) {
        return (
        <div className='skills-container'>
            <span id="intersect"></span>
            <ul className="skills">
                {listData.map((item, id) => { 
                    return (
                        <li key={`skills-content-${id}`} ref={addToRefs}>
                            <p className="skill-title">{item.attributes.Title}</p>
                            &nbsp;
                            <p className="skill-description">{item.attributes.Description}</p>
                        </li>
                    )
                })}
            </ul>
        </div>
        );

    }
};

List.propTypes = {
  /**
   * Is this the principal call to action on the page?
   */
  primary: PropTypes.bool,

};

// List.defaultProps = {
//   backgroundColor: null,

// };

export default List;
