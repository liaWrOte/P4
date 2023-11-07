import React, { useState, useEffect, useRef } from 'react';

import PropTypes from 'prop-types';
import './index.scss';

import link from '../../assets/images/link.svg';
import SparkleSvg from '../../assets/animations/sparkle/sparkle.jsx';

const Timeline = ({getTimelineData, getFormations, timelineDataExperience, timelineDataEducation, ...props}) => {

  useEffect(() => {
    const fetchData = async() => {
        await getTimelineData(props.content);
    }

    fetchData();
  }, [])

  let [timelineData, setTimeLineData] = useState([]);

  useEffect(() => {
    timelineData = props.content === 'experiences' ? setTimeLineData(timelineDataExperience) : setTimeLineData(timelineDataEducation);

      const nodes = document.querySelectorAll(".cd-timeline-img");
      const cache = {
        viewport: {},
        rects: []
      };

      const block = document.getElementById('main');
      init();
  
      function init() {
        recache();
        block.addEventListener("scroll", throttle(scrollCheck, 10));
        block.addEventListener("resize", debounce(recache, 50));
      };
  
      function recache() {
        cache.viewport = {
            width: window.innerWidth,
            height: window.innerHeight
        };

        nodes.forEach((node, i) => {
          cache.rects[i] = rect(node);
        });	
        
        scrollCheck();
      }
  
      function scrollCheck() {
        const offset = getScrollOffset();
        const midline = cache.viewport.height * 0.5;
        
        cache.rects.forEach((rect, i) => {
          nodes[i].classList.toggle("active", rect.y - offset.y < midline);
          let sparkle = nodes[i].querySelector('.ring');
          sparkle.classList.toggle("active", rect.y - offset.y < midline);
        });		
      };
  
      function getScrollOffset() {
        return {
          x: block.scrollLeft,
          y: block.scrollTop
        };
      };
  
      function throttle(fn, limit, context) {
        let wait;
        return function() {
          context = context || this;
          if (!wait) {
            fn.apply(context, arguments);
            wait = true;
            return setTimeout(function() {
              wait = false;
            }, limit);
          }
        };
      };
  
      function debounce(fn, limit, u) {
        let e;
        return function() {
          const i = this;
          const o = arguments;
          const a = u && !e;
          clearTimeout(e),
            (e = setTimeout(function() {
            (e = null), u || fn.apply(i, o);
          }, limit)),
            a && fn.apply(i, o);
        };
  
      }
  
      function rect(e) {
        const o = getScrollOffset();
        const r = e.getBoundingClientRect();
        return {
            x: r.left + o.x,
            y: r.top + o.y
        };
      };
  })


  if (timelineData.length > 0) {
    return (
      <div className="cd-timeline cd-container">
        <span className="orange-line"></span>

        {timelineData.map((item, id) => {
          let timeLineDataDescriptionHTML = '';
          if (item.attributes.Description) {
            let timeLineDataDescription = item.attributes.Description;
            const parser = new DOMParser();
            timeLineDataDescriptionHTML = parser.parseFromString(timeLineDataDescription, "text/html").body.innerHTML;
          }

          return (
            <div className={`cd-timeline-block ${item.attributes.Class}`} key={`${props.content}-${id}`}>
              <div className="cd-timeline-img cd-picture">
                <SparkleSvg />
              </div>
    
              <div className="cd-timeline-content">
                {item.attributes.Title &&
                  <h3 className="timeline-content-info-title">

                    <i className="fa fa-certificate" aria-hidden="true"></i>
                    {item.attributes.Title}
                  </h3>
                }
                {item.attributes.Location &&
                  <h4>{item.attributes.Location}</h4>
                }
                {item.attributes.Mission &&
                  <h5>{item.attributes.Mission} <a href={item.attributes.Link} target="_blank"><img src={link} alt={`lien vers le site ${item.attributes.Mission}`} /></a></h5>
                }
                {item.attributes.Date &&
                  <span className="cd-date">{item.attributes.Date}</span>
                }
                
                {timeLineDataDescriptionHTML !== '' &&
                <ul className="content-facts" dangerouslySetInnerHTML={{__html: timeLineDataDescriptionHTML}}>
                </ul>
                }
                <ul className="content-skills">
                  {item.attributes.Tags.map((el, id) => {
                    return (
                    <li key={`${props.content}-skill-${id}`} className={el.Type[0]}>{el.tag}</li>
                   )})}
                </ul>
              </div>
            </div>

          )
      })}
      
      </div>
    );
  }

};

Timeline.propTypes = {
  /**
   * Fetch experiences timeline data from strapi
   */
  getTimelineData: PropTypes.func,
  /**
   * Fetch formations timeline data from strapi
   */
  getFormations: PropTypes.func,
  /**
   * experience timeline data from strapi
   */
  timelineDataExperience: PropTypes.array,
  /**
   * eductation timeline data from strapi
   */
  timelineDataEducation: PropTypes.array,
};

export default Timeline;
