import { connect } from 'react-redux';
import Timeline from '../components/timeline/timeline';

import {
    getTimelineData,
} from '../actions/index';

const mapStateToProps = (state) => ({
    timelineDataExperience: state.main.timelineDataExperience,
    timelineDataEducation: state.main.timelineDataEducation
});

const mapDispatchToProps = (dispatch) => ({
    getTimelineData: (value) => {
        dispatch(getTimelineData(value));
    }
});


export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Timeline);