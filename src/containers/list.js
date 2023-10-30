import { connect } from 'react-redux';
import List from '../components/list/list';

import {
    getListData,
} from '../actions/index';

const mapStateToProps = (state) => ({
    listSkills: state.main.listSkills,
    listInterests: state.main.listInterests
});

const mapDispatchToProps = (dispatch) => ({
    getListData: (value) => {
        dispatch(getListData(value));
    }
});


export default connect(
    mapStateToProps,
    mapDispatchToProps
)(List);