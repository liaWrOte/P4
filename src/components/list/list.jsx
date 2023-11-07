import React, { useEffect, useRef, useState } from 'react';
import PropTypes from 'prop-types';
import './index.scss';


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

    
    useEffect(() => {
        if (myRef.current.length > 0) {
            let options = {
                root: document.querySelector('#main'),
                rootMargin: '0px 0px -20% 0px',
                threshold: 1,
            }
            const observer = new IntersectionObserver((entries) => {
                entries.forEach(function (entry) {
                    if(entry.isIntersecting && !entry.target.classList.contains('focus')) {
                        entry.target.classList.add('focus');
                        observer.unobserve(entry.target);
                    }
                })
            }, options)
    
            for (const entry of myRef.current) {
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
   * Fetch list data from strapi
   */
  getListData: PropTypes.func,
  /**
   * Skills list data from strapi
   */
  listSkills: PropTypes.array,
  /**
   * Interests list data from strapi
   */
  listInterests: PropTypes.array
};

export default List;
