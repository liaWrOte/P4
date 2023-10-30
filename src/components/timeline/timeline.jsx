import React, { useState, useEffect, useRef } from 'react';
import { useInView } from 'react-intersection-observer';

import PropTypes from 'prop-types';
import './index.scss';

import link from '../../assets/images/link.svg';
import SparkleSvg from '../../assets/animations/sparkle/sparkle.jsx';

/**
 * Primary UI component for user interaction
 */
const Timeline = ({getTimelineData, getFormations, timelineDataExperience, timelineDataEducation, ...props}) => {

  const myRef = useRef();

  const [TimelineIsVisible, setTimelineIsVisible] = useState();

  useEffect(() => {
    const fetchData = async() => {
        await getTimelineData(props.content);
    }

    fetchData();
  }, [])

  let [timelineData, setTimeLineData] = useState([]);

  useEffect(() => {
    timelineData = props.content === 'experiences' ? setTimeLineData(timelineDataExperience) : setTimeLineData(timelineDataEducation);

    
    // init


      const nodes = document.querySelectorAll(".cd-timeline-img");
      // const lines = document.querySelectorAll(".orange-line");
      const cache = {
        viewport: {},
        rects: []
      };
      // const cacheLines = {
      //   viewport: {},
      //   rects: []
      // };
      const block = document.getElementById('main');
      init();
  
      function init() {
        // update the cache and check scroll position
        recache();
        
        // throttle the scroll callback for performance
        block.addEventListener("scroll", throttle(scrollCheck, 10));
        
        // debounce the resize callback for performance
        block.addEventListener("resize", debounce(recache, 50));
      };
  
      // update the cache and check scroll position
      function recache() {
        // cache the viewport dimensions
        cache.viewport = {
            width: window.innerWidth,
            height: window.innerHeight
        };
        
        // cache node dimensions because we don't really want to 
        // call getBoundingClientRect() during scroll - even when throttled
        nodes.forEach((node, i) => {
          cache.rects[i] = rect(node);
        });	
        // lines.forEach((node, i) => {
        //   cacheLines.rects[i] = rect(node);
        // });	
        // console.log(cacheLines.rects);
        
        scrollCheck();
      }
  
      // check whether a node is at or above the horizontal halfway mark
      function scrollCheck() {
        // instead of relying on calling getBoundingClientRect() everytime,
        // let's just take the cached value and subtract the pageYOffset value
        // and see if the result is at or above the horizontal midline of the window
        const offset = getScrollOffset();
        const midline = cache.viewport.height * 0.5;
        
        cache.rects.forEach((rect, i) => {
          // console.log('rect.y', rect.y);
          // console.log('offset.y', offset.y);
          // console.log('midline', midline);
          // console.log(rect.y - offset.y < midline);
          nodes[i].classList.toggle("active", rect.y - offset.y < midline);
          let sparkle = nodes[i].querySelector('.ring');
          sparkle.classList.toggle("active", rect.y - offset.y < midline);
        });		
      };
  
      // get the scroll offsets
      function getScrollOffset() {
        // console.log(block);
        return {
          x: block.scrollLeft,
          y: block.scrollTop
        };
      };
  
      // throttler
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
  
      // debouncer
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
  
      // getBoundingClientRect with offsets
      function rect(e) {
        const o = getScrollOffset();
        const r = e.getBoundingClientRect();
        // console.log('o', o);
        // console.log('r', r);
        
        // console.log(o, r);
        return {
            x: r.left + o.x,
            y: r.top + o.y
        };
      };
    // }

  })



  

  if (timelineData.length > 0) {
    return (
      <div className="cd-timeline cd-container">
      {/* <div className="cd-timeline cd-container" ref={myRef}> */}
        <span className="orange-line"></span>
        <span className="yellow-line"></span>

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
   * Is this the principal call to action on the page?
   */
  primary: PropTypes.bool,

};

// Timeline.defaultProps = {
//   backgroundColor: null,

// };

export default Timeline;
