import { connect } from 'react-redux';
import End from '../components/end/end';

import {
    getHookData,
} from '../actions/index';

const mapStateToProps = (state) => ({
    // HookData: state.main.hook
});

const mapDispatchToProps = (dispatch) => ({
    // getHookData: () => {
    //     dispatch(getHookData());
    // }
});


export default connect(
    mapStateToProps,
    mapDispatchToProps
)(End);